<template>
  <div>
  <aside class="control-sidebar control-sidebar-light ">
    <div class="tab-home">
      <!-- Home tab content -->
      <div class="tab-pane" id="control-sidebar-home-tab">
        <h3 class="control-sidebar-heading">Recent Activity</h3>
        <ul class="control-sidebar-menu">
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon fa fa-clock-o bg-green"></i>
              <div class="menu-info">
                <h4 class="control-sidebar-subheading">The <b>'Test'</b> task have been added to the project</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon fa fa-clock-o bg-red"></i>
              <div class="menu-info">
                <h4 class="control-sidebar-subheading">Member <i>Johnken DamanaTut</i> have been remove from the project</h4>         
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon fa fa-clock-o bg-green"></i>
              <div class="menu-info">
                <h4 class="control-sidebar-subheading">Nora Joined Mailing List</h4>          
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon fa fa-file-code-o bg-green"></i>
              <div class="menu-info">
                <h4 class="control-sidebar-subheading">Cron Job 254 Executed</h4>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
    <div class="control-sidebar-bg"></div>
  </div>
</template>

<script>
export default {
  name: 'settingModal'
}
</script>