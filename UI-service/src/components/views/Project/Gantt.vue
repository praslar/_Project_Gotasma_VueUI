<template>
  <div class="main">
    <project-header :id="id" :users="project.users"></project-header>
    <div class="info-box">
      <span class="info-box-icon bg-yellow">
        <i class="fa fa-files-o"></i>
      </span>
      <div class="info-box-content">
        <p class="info-box-number">{{project.name}}</p>
        <p class="info-box-text" v-if="project.tasks">{{project.tasks | count}} tasks</p>
      </div>
    </div>
    <!-- <setting-modal :id="id"></setting-modal> -->
     <v-dialog></v-dialog>
     <filter-modal></filter-modal>
    <gantt-elastic
      v-if="project.tasks && exceptionDays.length > 0"
      :options="options"
      :tasks="tasksTest"
      :exceptionDays="exceptionDays"
      @tasks-changed="tasksUpdate"
      @options-changed="optionsUpdate">
      <gantt-header slot="header" :options="headerOptions"></gantt-header>
    </gantt-elastic>
    <taskModal  v-on:clicked ="breakTask($event)"></taskModal>
    <gantt-elastic
      v-if="tasks"
      :options="workloadOptions"
      :tasks="tasks"
      :exceptionDays="exceptionDays">
    </gantt-elastic>
  </div>
</template>
<script>
import SettingModal from '../../layout/Headers/ProjectHeader/Modals/SettingModal'
import FilterModal from '../../layout/Headers/ProjectHeader/Modals/FilterModal'
import ProjectHeader from '../../layout/Headers/ProjectHeader/ProjectHeader'
import taskModal from './Elememts/TaskModal'
import dayjs from 'dayjs'
import GanttElastic from 'gantt-elastic'
import GanttHeader from 'gantt-elastic-header'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Gantt',
  props: ['id'],
  components: {
    GanttElastic,
    GanttHeader,
    ProjectHeader,
    taskModal,
    SettingModal,
    FilterModal
  },
  data() {
    return {
        options:
         {
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
                      width: 80,
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
                      label: 'Duration (planning)',
                      value: task => task.duration / 86400000,
                      // value: task => dayjs(task.endTime).format('DD-MM-YYYY'),
                      width: 78,
                      events: {
                          click: ({ data }) => {
                              console.log(data.label, data)
                              this.showTaskModal(data)
                          }
                      }
                  }
              ]
          }
      }
    }
  },
  created() {
    this.getProject(this.id)
    if (this.project === 'undefine' || this.project === {}) {
      this.$modal.show('dialog', {
        title: 'frick',
        text: 'frick u too'
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
      this.$modal.show('taskModal', { data: data })
    },
    breakTask(currentTask, lastTask) {
          let tempStart = 0
          let tempDuration = 0
       for (let i = 0; i < 3; i++) {
             this.testTask.push({
              id: 99 + i,
              label: currentTask.label,
              user: currentTask.user,
              start: currentTask.start + tempStart,
              duration: 86400000 * 3 + tempDuration,
              progress: 100,
              type: 'task',
              parentId: currentTask.id,
              style: {
                  base: {
                      fill: '#1EBC61',
                      stroke: '#0EAC51'
                  }
              }
            })
            }
          tempStart = 86400000 * 3
          tempDuration = -86400000
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