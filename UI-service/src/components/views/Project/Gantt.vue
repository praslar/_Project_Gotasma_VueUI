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
          maxHeight: 480,
          times: {
              timeZoom: 21
          },
          row: {
              height: 15
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
                  display: true
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
        status: {
          type: '',
          action: false,
          id: ''
        }
    }
  },
  mounted() {
     EventBus.$on('addSumTask', (newTaskInfo) => { this.addSumTask(newTaskInfo) })
     EventBus.$on('deleteThisTask', (idTask) => {
        this.getStatus(idTask, 'delete')
      })
     EventBus.$on('addTask', (newTaskInfo) => {
        this.addTask(newTaskInfo)
        this.getStatus(newTaskInfo.id)
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
      // Sync children with parent tasks when added
      if (this.status.action) {
        let currentParents = []
        let minStart = 0
        let maxEnd = 0
        let currentChild = []
        let now = new Date()
        for (let i = 0; i < this.tasksTest.length; i++) {
          if (this.status.id === this.tasksTest[i].id) {
            currentParents = this.tasksTest[i].parents
            break
          }
          }
        if (this.status.type === 'delete') {
          this.deleteThisTask(this.status.id)
          }
        for (let i = this.tasksTest.length - 1; i >= 0; i--) {
          let current = this.tasksTest[i]
          for (let j = 0; j < currentParents.length; j++) {
            if (current.id === currentParents[j]) {
              currentChild = current.allChildren
              minStart = 9999997200000
              console.log('this is him', current.label)
              for (let k = 0; k < this.tasksTest.length; k++) {
                current = this.tasksTest[k]
                for (let h = 0; h < currentChild.length; h++) {
                  if (current.id === currentChild[h]) {
                    console.log('this is childer', current.label)
                    if (minStart > current.start) {
                      minStart = current.start
                    }
                    if (maxEnd < current.endTime) {
                      maxEnd = current.endTime
                    }
                    break
                  }
                }
              }
              this.tasksTest[i].startTime = minStart
              this.tasksTest[i].start = minStart
              this.tasksTest[i].endTime = maxEnd
              this.tasksTest[i].duration = maxEnd - this.tasksTest[i].start
              if (this.tasksTest[i].start === 9999997200000) {
                this.tasksTest[i].start = now.valueOf()
                this.tasksTest[i].startTime = now.valueOf()
                this.tasksTest[i].duration = 0
                this.tasksTest[i].myAttribute = 0
              }
            }
          }
          }
      }
      // reset status of new task info
      this.status.action = false
      this.status.id = ''
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
    // tasksUpdate method status
    getStatus(id, type) {
      this.status.type = type
      this.status.action = true
      this.status.id = id
    },
    addSumTask(newTaskInfo) {
      this.$store.dispatch('addSumTask', newTaskInfo)
    },
    deleteThisTask(idTaskDelete) {
      this.$store.dispatch('deleteThisTask', idTaskDelete)
    },
    addTask(newTaskInfo) {
          // for (let j = 0; j < newTaskInfo.users.length; j++) {
          //   for (let i = 0; i < this.tasksTest.length; i++) {
          //       if (this.tasksTest[i].id === newTaskInfo.id + j) {
          //         newTaskInfo.id += Math.round(Math.random() * 10)
          //         break
          //       }
          //   }
          //   this.tasksTest.push({
          //   parentId: newTaskInfo.parentId,
          //   id: (newTaskInfo.id + j),
          //   label: newTaskInfo.label,
          //   user: newTaskInfo.users[j].name,
          //   start: (newTaskInfo.start).valueOf(),
          //   duration: newTaskInfo.duration * 86400000,
          //   progress: newTaskInfo.progress,
          //   type: newTaskInfo.type,
          //   style: {
          //         base: {
          //             fill: '#3fb0ac',
          //             'stroke-width': 2,
          //             stroke: '#173e43'
          //           }
          //     }
          //   })
          // }
      this.$store.dispatch('addTask', newTaskInfo)
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