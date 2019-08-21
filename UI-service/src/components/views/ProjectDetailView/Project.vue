<template>
<div>
   <div :class="['wrapper', classes]">
    <!-- Horizontal bar at top. Contains messages, notifications, tasks and user menu -->
    <project-header ></project-header>
    <!-- Left side column. contains the logo and sidebar -->
    <main-sidebar :admin='admin'/>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
         <gantt></gantt> 
    </div>
    <!-- /.content-wrapper -->

    <!-- Horizontal bar at bottom. Contains copy right -->
    <main-footer></main-footer>
  </div>

</div>
</template>
<script>
import Gantt from './Gantt'
import config from '../../../config'
import MainFooter from '../../layout/Footers/MainFooter'
import ProjectHeader from '../../layout/Headers/ProjectHeader'
import MainSidebar from '../../layout/Sidebars/MainSidebar'
import * as Services from '../../../services'

export default {
  name: 'Project',
  components: {
    Gantt,
    MainFooter,
    ProjectHeader,
    MainSidebar
  },
  data: function() {
    return {
      // section: 'Dash',
      classes: {
        fixed_layout: config.fixedLayout,
        hide_logo: config.hideLogoOnMobile
      },
      admin: ''
    }
  },
    created() {
    Services.getAdmin()
      .then((response) => {
        this.admin = response.data
      })
      .catch(error => {
        console.log(error)
      })
    }
}
</script>

<style>
.wrapper.fixed_layout .main-header {
  position: fixed;
  width: 100%;
}
.wrapper.fixed_layout .content-wrapper {
  padding-top: 10px;
}
.wrapper.fixed_layout .main-sidebar {
  position: fixed;
  height: 100vh;
}

@media (max-width: 767px) {
  .wrapper.hide_logo .main-header .logo {
    display: none;
  }
}

.logo-mini,
.logo-lg {
  text-align: left;
}
.logo-mini img,
.logo-lg img {
  padding: 0.4em !important;
}
.logo-lg img {
  display: -webkit-inline-box;
  width: 25%;
}

hr.visible-xs-block {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.17);
  height: 1px;
  border-color: transparent;
}
</style>