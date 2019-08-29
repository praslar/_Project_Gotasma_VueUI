<template>
   <div :class="['wrapper', classes]">
    <!-- Horizontal bar at top. Contains messages, notifications, tasks and user menu -->
    <!-- <main-header :memberData="memberData" :idProject="id" ></main-header> -->
    <main-header :admin="admin"></main-header>
    <!-- Left side column. contains the logo and sidebar -->
    <main-sidebar :admin='admin'/>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
         <settingModal :id="id"></settingModal>
         <filterModal></filterModal>
         <router-view></router-view>
    </div>
    <main-footer :admin="admin"></main-footer>
  </div>
</template>
<script>
import config from '../../../config'
import MainFooter from '../../layout/Footers/MainFooter'
import MainHeader from '../../layout/Headers/MainHeader'
import MainSidebar from '../../layout/Sidebars/MainSidebar'
import SettingModal from '../../layout/Headers/HeaderElements/SettingModal'
import FilterModal from '../../layout/Headers/HeaderElements/FilterModal'
import * as Services from '../../../services'

export default {
  name: 'Project',
  props: ['id'],
  components: {
    MainFooter,
    MainHeader,
    MainSidebar,
    SettingModal,
    FilterModal
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
      ]
    }
  },
    mounted() {
    this.fetchAdmin()
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
    }
  }
}
</script>
<style>
.control{
  position: absolute;
  height: 100%;
  background-color: red;
}
.wrapper.fixed_layout .main-header {
  position: fixed;
  width: 100%;
}
.wrapper.fixed_layout .content-wrapper {
  padding-top: 10px;
  height: 100%;
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
