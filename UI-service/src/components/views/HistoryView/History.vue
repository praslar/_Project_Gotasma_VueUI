<template>
<section class="content">
  <a class="toggle-btn" href="#" data-toggle="control-sidebar"><i class="fa fa-exchange"></i></a>
  <gantt-history></gantt-history>
  <snapshot-list></snapshot-list>
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
