<template>
<section class="content"> 
   <div class="row center-block">
      <div class="header col-md-12">
        <span>History</span>
        <p> Here you see can all the states of your project at a specific point in time, <br> you navigate around the history list and choose see what you have saved</p>
      </div>
    <Split>
      <SplitArea :size="84">
        <gantt-history></gantt-history>
      </SplitArea>
      <SplitArea :size="16">
          <snapshot-list></snapshot-list>
      </SplitArea>
   </Split>


</div>
</section>
</template>

<script>
import GanttHistory from './GanttHistory'
import SnapshotList from './SnapshotList'

export default {
  name: 'history',
  components: {
    GanttHistory,
    SnapshotList
  }
}
</script>
<style scoped>
.tab-content .current-time {
  text-align: center;
  font-size: 16px;
}

.toggle-aside-bar{
  position: absolute;
  width: 40px !important;
}
.toggle-btn{
  position: fixed;
  color: #000;
  font-size: 24px;
  display: block;
  background-color: #95a5a6;
  padding: 5px;
  border-radius: 5px;
  right: 0;
  z-index: 9999;
  bottom: 20px;
}
</style>
