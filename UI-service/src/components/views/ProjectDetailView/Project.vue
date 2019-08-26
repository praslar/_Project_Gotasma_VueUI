<template>
   <div :class="['wrapper', classes]">
    <!-- Horizontal bar at top. Contains messages, notifications, tasks and user menu -->
    <project-header :memberData="memberData" ></project-header>
    <!-- Left side column. contains the logo and sidebar -->
    <main-sidebar :admin='admin'/>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
         <setting-modal></setting-modal>
         <router-view></router-view>
    </div>
    <main-footer :admin="admin"></main-footer>
  </div>
</template>
<script>
import config from '../../../config'
import MainFooter from '../../layout/Footers/MainFooter'
import ProjectHeader from '../../layout/Headers/ProjectHeader'
import MainSidebar from '../../layout/Sidebars/MainSidebar'
import * as Services from '../../../services'
import SettingModal from '../../layout/Headers/HeaderElements/SettingModal'

export default {
  name: 'Project',
  props: ['id'],
  components: {
    MainFooter,
    ProjectHeader,
    MainSidebar,
    SettingModal
  },
  data: function() {
    return {
      // section: 'Dash',
      classes: {
        fixed_layout: config.fixedLayout,
        hide_logo: config.hideLogoOnMobile
      },
      admin: [
        {
          id: null,
          fullName: '',
          email: '',
          country: '',
          avatar: ''
        }
      ],
      memberData: {
        projectID: '',
        name: '',
        effort: '',
        startDate: '',
        updateDate: '',
        members: []
      }
    }
  },
    mounted() {
    this.fetchAdmin()
    this.getMember()
  },
  methods: {
    fetchAdmin: function() {
      let self = this
      Services.getAdmin()
        .then(response => {
          self.admin = response
        })
        .catch(error => {
          console.log(error)
        })
    },
    getMember() {
      Services.getMemberOfProject()
      .then((response) => {
        this.memberData = response
      })
      .catch(error => {
        console.log(error)
      })
    }
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
