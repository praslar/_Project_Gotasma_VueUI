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
    deleteThisTask(idTask) {
      console.log('id xoa', idTask)
      this.tasksTest.forEach(element => {
        if (element.id === idTask) {
          if (element.children.length === 0) {
            console.log('no child, delete one')
            this.tasksTest.splice(this.tasksTest.findIndex(deleteTask => deleteTask.id === idTask), 1)
          } else {
            console.log('has child, delete multiple')
            this.tasksTest.splice(this.tasksTest.findIndex(deleteTask => deleteTask.id === idTask), 1)
            element.children.forEach(child => {
              this.tasksTest.splice(this.tasksTest.findIndex(deleteTask => deleteTask.id === child), 1)
            })
          }
        }
          // update parent task
          // for (let i = 0; i < this.tasksTest.length; i++) {
          //   if (this.tasksTest[i].id === idTask) {
          //     if(this.tasksTest[i].parentId !== null) {
          //       }
          //   }
          // }
      })
      console.log(this.tasksTest)
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
            this.tasksTest.push({
            parentId: newTaskInfo.parentId,
            id: newTaskInfo.id,
            label: newTaskInfo.label,
            start: (newTaskInfo.start).valueOf(),
            duration: newTaskInfo.duration * 86400000,
            progress: newTaskInfo.progress,
            type: newTaskInfo.type,
            style: {
                  base: {
                      fill: '#3fb0ac',
                      'stroke-width': 2,
                      stroke: '#173e43'
                    }
              }
            })
        //   // Recalculate duration (add sunday, sat, and exceptions day)
        //   let timeStart = new Date(newTaskInfo.start)
        //   let calculateTimeChart = (newTaskInfo.start).valueOf()
        //   let dayofWeek = (timeStart.getDay())
        //   let durationDays = newTaskInfo.duration
        //   let actualDuration = newTaskInfo.duration * 86400000
        //   let isHoliday = false
        //   for (let i = 0; i < durationDays; i++) {
        //     for (let j = 0; j < this.exceptionDays.length; j++) {
        //       if (calculateTimeChart === this.exceptionDays[j]) {
        //         isHoliday = true
        //         break
        //       }
        //     }
        //     if (isHoliday) {
        //       actualDuration += 86400000
        //       isHoliday = false
        //       durationDays++
        //       // if holiday la t7 hoac cn
        //       if (dayofWeek === 6) {
        //         dayofWeek = 0
        //       } else { dayofWeek += 1 }
        //     } else if (dayofWeek === 6) {
        //       dayofWeek = 0
        //       actualDuration += 86400000
        //       durationDays++
        //     } else if (dayofWeek === 0) {
        //       dayofWeek += 1
        //       actualDuration += 86400000
        //       durationDays++
        //     } else { dayofWeek += 1 }
        //     calculateTimeChart += 86400000
        //   }
        //       // new day after added (sunday, sat and exceptions)
        //   newTaskInfo.duration = actualDuration
        //   newTaskInfo.endTime = ((newTaskInfo.start).valueOf()) + actualDuration

        //  // LAY ID PARENT VA ID CHILDREM DE SO SANH
        //   for (let i = 0; i < this.tasksTest.length; i++) {
        //   if (this.tasksTest[i].id === newTaskInfo.parentId) {
        //       if (newTaskInfo.endTime > this.tasksTest[i].endTime) {
        //             this.tasksTest[i].duration = (newTaskInfo.endTime - this.tasksTest[i].start)
        //             break
        //       }
        //     }
        //   }
        } else {
            this.$modal.show('dialog', {
            title: 'Error',
            text: 'Add failed, task ID already exist!'
          })
        }
    },
    addTaskVuex(newTaskInfo) {
      this.$store.dispatch('addTask', newTaskInfo)
    },
    getNewTaskInfo(newTaskInfo) {
      this.newTaskInfo.exist = true
      this.newTaskInfo.id = newTaskInfo.id
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