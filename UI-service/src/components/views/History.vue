<template>
<section class="content">
  <gantt-history></gantt-history>
  <aside class="control-sidebar control-sidebar-light ">
    <!-- Create the tabs -->
    <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
       <li ><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-history"> View history</i></a></li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
      <!-- Home tab content -->
      <p class="current-time">{{day}} {{date}}</p>
      <form v-on:submit.prevent class="sidebar-form" id="searchForm">
        <div class="input-group" id="searchContainer">
          <span class="input-group-btn">
            <input type="text"
            name="search"
            id="search"
            class="search form-control"
            data-toggle="hideseek" p
            laceholder="Search Menus"
            data-list=".sidebar-menu">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat">
              <i class="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
      <div class="tab-pane" id="control-sidebar-home-tab">
        <h3 class="control-sidebar-heading">Recent Activity</h3>
        <ul class="control-sidebar-menu">
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon fa fa-clock-o bg-green"></i>

              <div class="menu-info">
                <h4 class="control-sidebar-subheading">The <b>'Test'</b> task have been added to the project</h4>

                <p>{{time}}</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon fa fa-clock-o bg-red"></i>

              <div class="menu-info">
                <h4 class="control-sidebar-subheading">Member <i>Johnken DamanaTut</i> have been remove from the project</h4>

         
                <p>{{time}}</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon fa fa-clock-o bg-green"></i>

              <div class="menu-info">
                <h4 class="control-sidebar-subheading">Nora Joined Mailing List</h4>

          
                <p>{{time}}</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon fa fa-file-code-o bg-green"></i>

              <div class="menu-info">
                <h4 class="control-sidebar-subheading">Cron Job 254 Executed</h4>

                <p>{{time}}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
  <div class="control-sidebar-bg"></div>
</section>
</template>

<script>
import GanttHistory from './Gantt-history'

export default {
  name: 'history',
  components: {
    GanttHistory,
    day: new Date(),
    date: new Date()
  },
  data() {
    return {
        date: this.$dn.date(new Date(), 'dd-mm-yyyy', '-'),
        day: this.$dn.dayText(new Date(), 'en'),
        time: this.$dn.time()
    }
  }
}
</script>
<style scoped>
.tab-content .current-time {
  text-align: center;
  font-size: 16px;
}
ul li {
  border-bottom: 1px solid #242e35 ;
}
.control-sidebar-heading {
  text-align: center;
}
.toggle-aside-bar{
  position: absolute;
  width: 40px !important;
}
</style>
