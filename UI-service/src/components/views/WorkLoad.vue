<template>
  <div class="main">
    <gantt-elastic
      :options="options"
      :tasks="tasks"
      @tasks-changed="tasksUpdate"
      @options-changed="optionsUpdate"
      @dynamic-style-changed="styleUpdate"
    >
    </gantt-elastic>
  </div>
</template>
<script>
import GanttElastic from 'gantt-elastic'

let tasks = [
  {
    id: 1,
    user: 'Thang Pham'
    // collapsed: true,
  },
  {
    id: 2,
    user: 'Quan Vo'
  }

]
let options = {
  taskMapping: {
      title: {
    label: 'Why',
    html: false
  },
    progress: 'percent'
  },
  maxRows: 1000,
  maxHeight: 1000,
  row: {
    height: 24
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
        width: 40
      },
      {
        id: 2,
        label: 'Member',
        value: 'user',
        width: 500,
        expander: true,
        html: true,
        events: {
          click({ data }) {
            alert('description clicked!\n' + data.label)
          }
        }
      }
    ]
  },
  locale: {
    name: 'en',
    Now: 'Now',
    'X-Scale': 'Zoom-X',
    'Y-Scale': 'Zoom-Y',
    'Task list width': 'Task list',
    'Before/After': 'Expand',
    'Display task list': 'Task list'
  }
}

export default {
  name: 'workload',
  components: {
    GanttElastic
  },
  data() {
    return {
      tasks,
      options,
      dynamicStyle: {},
      lastId: 16
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
  }
}
</script>