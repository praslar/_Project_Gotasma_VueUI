<template>
  <div class="main">
    <project-header :memberData="memberData" :idProject="id" ></project-header>
          <div class="info-box">
            <span class="info-box-icon bg-yellow"><i class="fa fa-files-o"></i></span>
            <div class="info-box-content">
              <p class="info-box-number">{{memberData.name}}</p>
              <p class="info-box-text">{{tasks | count}} Task</p>
            </div>
      </div>
    <gantt-elastic
      :options="options"
      :tasks="tasks"
      @tasks-changed="tasksUpdate"
      @options-changed="optionsUpdate"
      @dynamic-style-changed="styleUpdate"
    >
      <gantt-header slot="header" :options="headerOptions" ></gantt-header>
    </gantt-elastic>
  </div>
</template>
<script>
import GanttElastic from 'gantt-elastic'
import GanttHeader from 'gantt-elastic-header'
import dayjs from 'dayjs'
import ProjectHeader from '../../layout/Headers/ProjectHeader'
import * as Services from '../../../services'
// just helper to get current dates
let options = {
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
    columns: [
      {
        id: 1,
        label: 'ID',
        value: 'id',
        width: 35
      },
      {
        id: 2,
        label: 'Description',
        value: 'label',
        width: 100,
        expander: true,
        html: true,
        events: {
          click({ data }) {
            alert('description clicked!\n' + data.label)
          }
        }
      },
      {
        id: 3,
        label: 'Assignee',
        value: 'user',
        width: 80
      },
      {
        id: 3,
        label: 'Start',
        value: task => dayjs(task.start).format('YYYY-MM-DD'),
        width: 78
      },
      {
        id: 4,
        label: 'Type',
        value: 'type',
        width: 68
      }
    ]
  }
}
function getDate(hours) {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()
  const timeStamp = new Date(
    currentYear,
    currentMonth,
    currentDay,
    0,
    0,
    0
  ).getTime()
  return new Date(timeStamp + hours * 60 * 60 * 1000).getTime()
}
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
      memberData: {
        projectID: '',
        name: '',
        effort: '',
        startDate: '',
        updateDate: '',
        members: []
      },
      tasks: [{
          id: 0,
          label: 'Preloading',
          user: 'Preloading',
          start: getDate(0),
          duration: 1 * 24 * 60 * 60 * 1000,
          type: 'project'
      }],
      headerOptions: {
         title: {
              label: 'ID: ' + this.id,
              html: false
          },
          locale: {
            name: 'en',
            Now: 'Now',
            'X-Scale': 'Width',
            'Y-Scale': 'Height',
            'Task list width': 'Task width',
            'Before/After': 'Expand',
            'Display task list': 'Hide Task'
          }
      },
      options,
      dynamicStyle: {}
    }
  },
  methods: {
    tasksUpdate(tasks) {
      this.tasks = tasks
    },
    optionsUpdate(options) {
      this.options = options
    },
    styleUpdate(style) {
      this.dynamicStyle = style
    }
  },
  beforeCreate() {
    Services.getMemberOfProject()
      .then((response) => {
        this.memberData = response
      })
      .catch(error => {
        console.log(error)
      })
    Services.getTasksByProjectID()
      .then((response) => {
        this.tasks = response.tasks
      })
      .catch(error => {
        console.log(error)
      })
  }
}

</script>
<style scoped>
.info-box-icon{

  height: 50px;
  font-size: 30px;
  line-height: 40px;
  padding: 5px
  
}
.info-box-number{
  margin-bottom: 0
}
.info-box {
  min-height: 30px;
  height: 50px;
}
.title {
  padding: 10px;
  padding-left: 20px;
  color: black;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
}
button {
  margin: 10px;
  font-size: 16px;
  padding: 7px 12px;
}
.split-panel {
  min-height: 700px
}
</style>