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
     <v-dialog></v-dialog>

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
              columns: [{
                      id: 1,
                      label: 'ID',
                      value: 'id',
                      width: 35
                  },
                  {
                      id: 2,
                      label: 'Description',
                      value: 'label',
                      width: 200,
                      expander: true,
                      events: {
                          click: ({ data }) => {
                              console.log(data.label, data)
                              this.showTaskModal(data)
                          }
                      }
                  },
                  {
                      id: 3,
                      label: 'Assignee',
                      value: 'user',
                      width: 90,
                      events: {
                          click: ({ data }) => {
                              console.log(data.label, data)
                              this.showTaskModal(data)
                          }
                      }
                  },
                  {
                      id: 3,
                      label: 'Start',
                      value: task => dayjs(task.start).format('DD-MM-YYYY'),
                      width: 78,
                      events: {
                          click: ({ data }) => {
                              console.log(data.label, data)
                              this.showTaskModal(data)
                          }
                      }
                  },
                  {
                      id: 4,
                      label: 'Duration (est)',
                      value: task => task.myAttribute / 86400000,
                      // value: task => dayjs(task.endTime).format('DD-MM-YYYY'),
                      width: 45,
                      events: {
                          click: ({ data }) => {
                              console.log(data.label, data)
                              this.showTaskModal(data)
                          }
                      }
                  },
                  {
                      id: 5,
                      label: 'Duration (real)',
                      value: task => task.duration / 86400000,
                      width: 45
                  },
                  {
                      id: 6,
                      label: 'Add Task',
                      value: task => `<button>+</button>`,
                      html: true,
                      width: 45,
                        events: {
                          click: ({ data }) => {
                              this.showAddTaskModal(data)
                          }
                      }
                  }
              ]
          }
        }
    }
  },
  mounted() {
     EventBus.$on('addSumTask', (newTaskInfo) => { this.addSumTask(newTaskInfo) })
     EventBus.$on('addTask', (newTaskInfo) => { this.addTask(newTaskInfo) })
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
      this.tasks = tasks
    },
    optionsUpdate(options) {
      this.options = options
    },
    showTaskModal(data) {
      this.$modal.show('TaskModal', { data: data })
    },
    showAddTaskModal(data) {
      this.$modal.show('AddTask', { data: data })
    },
    addSumTask(newTaskInfo) {
      let checkExistId = false
      for (let i = 0; i < this.tasksTest.length; i++) {
         if (this.tasksTest[i].id === newTaskInfo.id) {
            checkExistId = true
            break
          }
      }
      if (checkExistId === false) {
        this.tasksTest.push({
            id: newTaskInfo.id,
            label: newTaskInfo.label,
            start: (newTaskInfo.start).valueOf(),
            duration: newTaskInfo.duration * 86400000,
            progress: newTaskInfo.progress,
            type: newTaskInfo.type
        })
      } else {
          this.$modal.show('dialog', {
          title: 'Error',
          text: 'Add failed, ID already exist!'
        })
      }
    },
    addTask(newTaskInfo) {
      let checkExistId = false
      for (let i = 0; i < this.tasksTest.length; i++) {
         if (this.tasksTest[i].id === newTaskInfo.id) {
            checkExistId = true
            break
          }
      }

      if (checkExistId === false) {
          for (let j = 0; j < newTaskInfo.users.length; j++) {
            for (let i = 0; i < this.tasksTest.length; i++) {
                if (this.tasksTest[i].id === newTaskInfo.id + j) {
                  newTaskInfo.id += Math.round(Math.random() * 10)
                  break
                }
            }
            this.tasksTest.push({
            parentId: newTaskInfo.parentId,
            id: (newTaskInfo.id + j),
            label: newTaskInfo.label,
            user: newTaskInfo.users[j].name,
            start: (newTaskInfo.start).valueOf(),
            duration: newTaskInfo.duration * 86400000,
            progress: newTaskInfo.progress,
            type: newTaskInfo.type,
            style: newTaskInfo.style
          })
        }
        } else {
            this.$modal.show('dialog', {
            title: 'Error',
            text: 'Add failed, task ID already exist!'
          })
        }
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