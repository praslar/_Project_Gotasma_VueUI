<template>
  <div class="main">
    <project-header :id="id" :users="project.users" :exceptionDays="exceptionDays"></project-header>
    <div class="info-box">
      <span class="info-box-icon bg-yellow">
        <i class="fa fa-files-o"></i>
      </span>
      <div class="info-box-content">
        <p class="info-box-number">{{project.name}}</p>
        <p class="info-box-text" v-if="project.tasks">{{project.tasks | count}} tasks</p>
      </div>
    </div>
    <!-- <setting-modal :id="id"><  /setting-modal> -->
    <gantt-elastic
      v-if="tasksTest && exceptionDays.length > 0"
      :options="options"
      :tasks="tasksTest"
      :exceptionDays="exceptionDays"
      @tasks-changed="tasksUpdate"
      @options-changed="optionsUpdate">
      <gantt-header slot="header" :options="headerOptions"></gantt-header>
    </gantt-elastic>
    <!-- <gantt-elastic
      v-if="tasks"
      :options="workloadOptions"
      :tasks="tasks"
      :exceptionDays="exceptionDays">
    </gantt-elastic> -->
  </div>
</template>
<script>
import ProjectHeader from '../../layout/Headers/ProjectHeader/ProjectHeader'
import dayjs from 'dayjs'
import GanttElastic from 'gantt-elastic'
import GanttHeader from 'gantt-elastic-header'
import { mapState, mapGetters, mapActions } from 'vuex'
import { EventBus } from '@/main.js'

export default {
  name: 'Gantt',
  props: ['id'],
  components: {
    GanttElastic,
    GanttHeader,
    ProjectHeader
  },
  data() {
    return {
        options: {
          scope: {
              before: 1,
              after: 80
          },
          maxRows: 1000,
          maxHeight: 400,
          times: {
              timeZoom: 21
          },
          row: {
              height: 20
          },
          calendar: {
              hour: {
                  display: false
              }
          },
          chart: {
              text: {
                  display: false
              },
              expander: {
                  display: false
              }
          },
          taskList: {
              expander: {
                  straight: true
              },
              columns: [
                  {
                      id: 2,
                      label: 'Description',
                      value: 'label',
                      width: 200,
                      expander: true,
                      style: {
                        'task-list-item-value-container': { 'font-weight': 'bold' }
                      },
                      events: {
                          click: ({ data }) => {
                              console.log(data.label, data)
                              console.log(this.tasksTest)
                              // console.log(this.project.tasks)
                              this.showTaskModal(data)
                          }
                      }
                  },
                  {
                      id: 3,
                      label: 'Assignee',
                      value: task => `<a>${task.user}</a>`,
                      width: 90,
                      html: true,
                      events: {
                          click: ({ data }) => {
                              console.log(data.label, data)
                              this.showTaskModal(data)
                          }
                      },
                      style: {
                        'task-list-item-value-container': {
                          'cursor': 'pointer'
                        }
                      }
                  },
                  {
                      id: 3,
                      label: 'Start',
                      value: task => dayjs(task.start).format('DD-MM-YYYY'),
                      width: 78
                  },
                  {
                      id: 4,
                      label: 'Duration (estimated)',
                      value: task => (task.myAttribute / 86400000) + 'd',
                      // value: task => dayjs(task.endTime).format('DD-MM-YYYY'),
                      width: 45
                  },
                  {
                      id: 5,
                      label: 'Duration (real)',
                      value: task => task.duration / 86400000 + 'd',
                      // value: task => dayjs(task.endTime).format('DD-MM-YYYY'),
                      width: 45
                  },
                  {
                      id: 6,
                      label: 'Add Task',
                      value: task => `<a><i class="fa fa-plus" style="font-size:20px; margin-left:8px"></i></a>`,
                      html: true,
                      width: 45,
                        events: {
                          click: ({ data }) => {
                              this.showAddTaskModal(data)
                          }
                      },
                      style: {
                        'task-list-item-value-container': { 'text-align': 'center' }
                      }
                  }
              ]
          }
        },
        newTaskInfo: {
          exist: false,
          id: ''
        }
    }
  },
  mounted() {
     EventBus.$on('addSumTask', (newTaskInfo) => { this.addSumTask(newTaskInfo) })
     EventBus.$on('deleteThisTask', (idTask) => { this.deleteThisTask(idTask) })
     EventBus.$on('addTask', (newTaskInfo) => {
        this.addTaskVuex(newTaskInfo)
        this.getNewTaskInfo(newTaskInfo)
     })
     EventBus.$on('addMilestone', (newMilestone) => { this.addMilestone(newMilestone) })
     EventBus.$on('breakTask', (breakTaskInfo) => { this.breakTask(breakTaskInfo) })
  },
  created() {
    this.getProject(this.id)
    if (this.project === 'undefined' || this.project === {}) {
      this.$modal.show('dialog', {
        title: 'Error',
        text: 'No data available'
      })
    }
    if (this.exceptions.length === 0) {
      console.log('timelog')
      this.getExceptions()
    }
    if (this.resources.length === 0) {
        this.getResources()
    }
  },
  computed: {
    ...mapState([
      'headerOptions',
      'workloadOptions',
      'workloadHeaderOptions',
      'tasks',
      'project',
      'exceptions',
      'resources',
      'tasksTest'
    ]),
    ...mapGetters([
      'exceptionDays'
    ])
  },
  methods: {
    ...mapActions({
      getProject: 'getProjectById',
      getResources: 'getResources',
      getExceptions: 'getExceptions'
    }),
    tasksUpdate(tasks) {
      this.tasksTest = tasks
      if (this.newTaskInfo.exist) {
        for (let i = 0; i < this.tasksTest.length; i++) {
          if (this.newTaskInfo.id === this.tasksTest[i].id) {
            this.newTaskInfo = this.tasksTest[i]
            console.log(this.newTaskInfo)
            break
          }
        }
        for (let i = 0; i < this.tasksTest.length; i++) {
          for (let j = 0; j < this.newTaskInfo.parents.length; j++) {
            if (this.tasksTest[i].id === this.newTaskInfo.parents[j]) {
              if (this.newTaskInfo.endTime > this.tasksTest[i].endTime) {
                this.tasksTest[i].duration = (this.newTaskInfo.endTime - this.tasksTest[i].start)
                this.tasksTest[i].endTime = this.tasksTest[i].start + this.tasksTest[i].duration
              }
            }
          }
        }
      }
    this.newTaskInfo = {}
    this.newTaskInfo.exist = false
    this.newTaskInfo.id = ''
    },
    optionsUpdate(options) {
      this.options = options
    },
    showTaskModal(data) {
      this.$modal.show('taskModal', { data: data })
    },
    showAddTaskModal(data) {
      this.$modal.show('AddTask', { data: data })
    },
    addSumTask(newTaskInfo) {
        this.$store.dispatch('addSumTask', newTaskInfo)
    },
    deleteThisTask(idTaskDelete) {
      console.log('id xoa', idTaskDelete)
      if (this.tasksTest.length !== 1) {
        for (let i = 0; i < this.tasksTest.length; i++) {
          if (this.tasksTest[i].id === idTaskDelete) {
            if (this.tasksTest[i].children.length === 0) {
              console.log('NO child, delete one')
              this.tasksTest.splice(this.tasksTest.findIndex(deleteTask => deleteTask.id === idTaskDelete), 1)
            } else {
              console.log('has child, delete multiple')
              this.tasksTest[i].allChildren.forEach(child => {
                this.tasksTest.splice(this.tasksTest.findIndex(deleteTask => deleteTask.id === child), 1)
                })
              this.tasksTest.splice(this.tasksTest.findIndex(deleteTask => deleteTask.id === idTaskDelete), 1)
            }
            break
          }
        }
      } else {
        alert('cannot delete anymore')
      }
      console.log(this.tasksTest)
    },
    addTaskVuex(newTaskInfo) {
      this.$store.dispatch('addTask', newTaskInfo)
    },
    getNewTaskInfo(newTaskInfo) {
      this.newTaskInfo.exist = true
      this.newTaskInfo.id = newTaskInfo.id
    },
    addMilestone(newMilestone) {
      this.$store.dispatch('addMilestone', newMilestone)
    },
    breakTask(breakTaskInfo) {
      this.$store.dispatch('breakTask', breakTaskInfo)
    }
  }
}
</script>
<style>
.gantt-elastic__chart-days-highlight-rect {
  fill: #ddd !important;
  z-index: 9999 !important;
}
.gantt-elastic__chart-days-highlight-rects{
   fill: #fae596 !important
}
.gantt-elastic__grid-line-time {
    stroke-width: 4px !important
}
</style>
<style scoped>
.info-box-icon {
  height: 50px;
  font-size: 30px;
  line-height: 40px;
  padding: 5px
}
.info-box-number {
  margin-bottom: 0
}
.info-box {
  min-height: 30px;
  height: 50px
}
.title {
  padding: 10px;
  padding-left: 20px;
  color: black;
  font-size: 24px;
  font-family: "Roboto", sans-serif
}
button {
  margin: 10px;
  font-size: 16px;
  padding: 7px 12px
}
.split-panel {
  min-height: 700px
}
</style>