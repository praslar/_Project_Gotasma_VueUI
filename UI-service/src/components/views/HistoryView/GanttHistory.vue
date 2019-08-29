<template>
<div id="gantt">
  <gantt-elastic v-if="task1ID == snapshotHistoryID" :options="options" :tasks="task1"></gantt-elastic>
   <gantt-elastic v-else :options="options" :tasks="task2"></gantt-elastic>
</div>
</template>
<script>
import GanttElastic from 'gantt-elastic'
import dayjs from 'dayjs'
import * as Services from '../../../services'
// just helper to get current dates

let options = {
  scope: {
      before: 1,
      after: 100
    },
  maxRows: 1000,
  maxHeight: 1000,
  row: {
    height: 20
  },
  times: {
    timeZoom: 21
  },
  calendar: {
    hour: {
      display: false
    },
    workingDays: [0, 1, 2]
  },
  chart: {
    progress: {
      bar: false
    },
    expander: {
      display: false
    },
    text: {
      display: false
    },
    grid: {
      vertical: {
        gap: 50
      }
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
        width: 100,
        expander: true,
        html: true
      },
      {
        id: 3,
        label: 'Assigned to',
        value: 'user',
        width: 100,
        html: true,
        events: {
          click({ data }) {
            alert('Assign new member to this task!\n' + data.label)
          }
        }
      },
      {
        id: 3,
        label: 'Start',
        value: task => dayjs(task.start).format('YYYY-MM-DD'),
        width: 78
      }
    ]
  }
}
export default {
  name: 'Gantt-History',
  props: ['snapshotHistoryID'],
  components: {
    GanttElastic
  },
  data() {
    return {
      task1ID: '',
      task2ID: '',
      task1: [{
        id: '',
        label: '',
        user: [],
        start: '',
        duration: '',
        type: ''
      }],
      task2: [{
        id: '',
        label: '',
        user: [],
        start: '',
        duration: '',
        type: ''
      }],
      options
    }
  },
  mounted() {
    this.getTask()
  },
  methods: {
    getTask() {
      Services.getTaskBySnapshotId()
      .then((response) => {
        this.task1 = response.tasks
        this.task1ID = response.snapshotID
      })
      .catch(error => {
        console.log(error)
      })
      Services.getTaskBySnapshotId2()
      .then((response) => {
        this.task2 = response.tasks
        this.task2ID = response.snapshotID
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style scoped>
#btn-add-task{
  position: absolute;
  margin-left: 200px;
  margin-top: 10px;
  font-size: 16px;
  padding: 7px 12px;

}
@media screen and (max-width: 1200px) {
  #btn-add-task{
  position: relative;
  margin: 10px;
}
}
</style>