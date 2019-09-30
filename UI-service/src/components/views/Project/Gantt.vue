<template>
  <div class="main">
    <project-header :id="id" :users="getResourceOfProject" :exceptionDays="exceptionDays"  v-if="project.users"></project-header>
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
      v-if="project.tasks && exceptionDays.length > 0 && project.tasks.length > 0"
      :options="options"
      :tasks="project.tasks"
      :exceptionDays="exceptionDays"
      @tasks-changed="tasksUpdate"
      @options-changed="optionsUpdate">
      <gantt-header slot="header" :options="headerOptions"></gantt-header>
    </gantt-elastic>
    <div v-else class="notice">
      <img :src="this.adminInfo.avatar"/>
      <h1>Empty project or exception days</h1>
    </div>
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
              height: 25
          },
          calendar: {
            hour: {
                display: false
            },
            workingDays: [1, 2, 3, 4, 5]
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
                        'task-list-item-value-container': { 'font-weight': 'bold' },
                         'cursor': 'pointer'
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
                      value: task => `${task.user}`,
                      width: 90,
                      html: true
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
                      value: task => (task.estimateDuration / 86400000) + 'd',
                      // value: task => dayjs(task.endTime).format('DD-MM-YYYY'),
                      width: 45,
                      style: {
                        'task-list-header-label': { 'text-align': 'center' }
                      }
                  },
                  {
                      id: 5,
                      label: 'Duration (real)',
                      value: task => task.duration / 86400000 + 'd',
                      // value: task => dayjs(task.endTime).format('DD-MM-YYYY'),
                      width: 45,
                      style: {
                        'task-list-header-label': { 'text-align': 'center' }
                      }
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
                        'task-list-header-label': { 'text-align': 'center' }
                      }
                  },
                  {
                      id: 7,
                      label: 'Assign member',
                      value: task => `<a><i class="fa fa-child" style="font-size:20px; margin-left:15px; color: #65c16f"></i></a>`,
                      html: true,
                      width: 63,
                        events: {
                          click: ({ data }) => {
                              this.showAssignModal(data)
                          }
                      },
                      style: {
                         'task-list-header-label': { 'text-align': 'center' }
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
        this.getStatus(idTask, 'del')
        this.tasksUpdate(this.project.tasks)
       })
     EventBus.$on('addTask', (newTaskInfo) => {
        this.addTask(newTaskInfo)
        this.getStatus(newTaskInfo.id)
      })
     EventBus.$on('addMilestone', (newMilestone) => { this.addMilestone(newMilestone) })
     EventBus.$on('breakTask', (breakTaskInfo) => { this.breakTask(breakTaskInfo) })
     EventBus.$on('editTask', (newTaskInfo) => {
        this.editTask(newTaskInfo)
        this.getStatus(newTaskInfo.id)
        })
     EventBus.$on('assignMember', (newTaskInfo) => { this.assignMember(newTaskInfo) })
  },
  created() {
    this.getResources()
    this.getProject(this.id)
    if (this.exceptions.length === 0) {
      console.log('timelog')
      this.getExceptions()
    }
   },
  computed: {
    ...mapState([
      'adminInfo',
      'headerOptions',
      'project',
      'exceptions',
      'resources'
    ]),
    ...mapGetters([
      'exceptionDays',
      'getResourceOfProject'
    ])
    },
  methods: {
    ...mapActions({
        getResources: 'getResources',
        getProject: 'getProjectById',
        getExceptions: 'getExceptions'
      }),
    tasksUpdate(tasks) {
      this.project.tasks = tasks
      // Sync children with parent tasks when added
      if (this.status.action === true) {
        let currentParents = []
        let minStart = 0
        let maxEnd = 0
        let currentChild = []
        for (let i = 0; i < this.project.tasks.length; i++) {
          if (this.status.id === this.project.tasks[i].id) {
            currentParents = this.project.tasks[i].parents
            break
          }
          }
        if (this.status.type === 'del') {
          this.deleteThisTask(this.status.id)
        }
        for (let i = this.project.tasks.length - 1; i >= 0; i--) {
          let current = this.project.tasks[i]
          for (let j = 0; j < currentParents.length; j++) {
            if (current.id === currentParents[j]) {
              currentChild = current.allChildren
              minStart = 9999997200000
              for (let k = 0; k < this.project.tasks.length; k++) {
                current = this.project.tasks[k]
                for (let h = 0; h < currentChild.length; h++) {
                  if (current.id === currentChild[h]) {
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
              if (minStart !== 9999997200000) {
                this.project.tasks[i].startTime = minStart
                this.project.tasks[i].start = minStart
              }
              this.project.tasks[i].endTime = maxEnd
              if (maxEnd !== 0) {
                this.project.tasks[i].duration = maxEnd - this.project.tasks[i].start
                }
              this.project.tasks[i].estimateDuration = this.project.tasks[i].duration
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
    showAssignModal(data) {
      if (data.children.length <= 0 && data.type !== 'milestone') {
        this.$modal.show('AssignMember', { data: data })
      } else {
         this.$modal.show('dialog', {
           title: 'Warning',
           text: 'Can not assign member to parent task or milestone'
        })
      }
      },
    getStatus(id, type) {
      // access tasksUpdate() method
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
          //   for (let i = 0; i < this.project.tasks.length; i++) {
          //       if (this.project.tasks[i].id === newTaskInfo.id + j) {
          //         newTaskInfo.id += Math.round(Math.random() * 10)
          //         break
          //       }
          //   }
          //   this.project.tasks.push({
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
      },
    assignMember(newTaskInfo) {
      this.$store.dispatch('assignMember', newTaskInfo)
     },
    editTask(newTaskInfo) {
       this.$store.dispatch('editTask', newTaskInfo)
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
.notice {
    text-align: center;
    width: 50%;
    color: rgb(73, 67, 67);
    border-radius: 10px;
    padding: 10px;
    margin: 50px auto
}
.notice img {
  border-radius: 20px;
  width: 50%;
}
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