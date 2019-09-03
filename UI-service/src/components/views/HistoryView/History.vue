<template>
<section class="content"> 
   <div class="row center-block">
      <div class="header col-md-12">
        <span>History</span>
        <p> Here you see can all the states of your project at a specific point in time, <br> you navigate around the history list and choose see what you have saved</p>
      </div>
      <snapshot-list :ProjectHistory="ProjectHistory" @clicked="eventChild" ></snapshot-list>
</div>
 <gantt-history :snapshotHistoryID="snapshotHistoryID" class="heightOf"></gantt-history>
</section>
</template>

<script>
import GanttHistory from './GanttHistory'
import SnapshotList from './SnapshotList'
import * as Services from '../../../services'

export default {
  name: 'history',
  components: {
    GanttHistory,
    SnapshotList
  },
  data() {
    return {
      ProjectHistory: [],
      snapshotHistoryID: ''
    }
  },
  created() {
    //  getMemberInfo by ID project
      Services.getProjectSnapshotByIDProject()
      .then((response) => {
        this.ProjectHistory = response.snapshots
      })
      .catch(error => {
        console.log(error)
      })
    },
  methods: {
    eventChild(snapshotID) {
      this.snapshotHistoryID = snapshotID
    },
    show() {
      this.showSnapList = true
    },
    hide() {
      this.showSnapList = false
    }
  }
}
</script>
<style scoped>

.heightOf {
  height: 100%;
  z-index: 1020 !important;
}
.tab-content .current-time {
  text-align: center;
  font-size: 16px;
}

.toggle-aside-bar{
  position: absolute;
  width: 40px !important;
}
.toggle-btn{
  color: #000;
  font-size: 24px;
  padding: 5px;
  border-radius: 5px;
}
</style>
