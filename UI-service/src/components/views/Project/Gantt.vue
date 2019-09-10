<template>
  <div class="main">
    <project-header :id="id" :users="project.users"></project-header>
    <div class="info-box">
      <span class="info-box-icon bg-yellow">
        <i class="fa fa-files-o"></i>
      </span>
      <div class="info-box-content">
        <p class="info-box-number"></p>
        <p class="info-box-text">Task</p>
      </div>
    </div>
    <!-- <setting-modal :id="id"></setting-modal> -->
     <filter-modal></filter-modal>
    <gantt-elastic
      :options="options"
      :tasks="tasks"
      @tasks-changed="tasksUpdate"
      @options-changed="optionsUpdate">
      <gantt-header slot="header" :options="headerOptions"></gantt-header>
    </gantt-elastic>
    <taskModal></taskModal>
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
import { mapState } from 'vuex'

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
          taskMapping: {
            progress: 'percent'
          },
          scope: {
              before: 1,
              after: 80
          },
          maxRows: 1000,
          maxHeight: 1000,
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
              progress: {
                  bar: false
              },
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
                      label: 'End',
                      value: task => dayjs(task.endTime).format('DD-MM-YYYY'),
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
    this.$store.dispatch('getProjectById', this.id)
  },
  computed: {
    ...mapState([
      'headerOptions',
      'tasks',
      'project'
    ])
  },
  methods: {
    tasksUpdate(tasks) {
      this.tasks = tasks
    },
    optionsUpdate(options) {
      this.options = options
    },
    showTaskModal(data) {
      this.$modal.show('taskModal', { data: data })
    }
  }
}
</script>
<style>
.gantt-elastic__chart-days-highlight-rect {
  fill: #fae596 !important;
  z-index: 9999 !important;
}
.gantt-elastic__chart-days-highlight-rects{
   fill: rgba(255, 138, 138, 0.952) !important
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