<template>
  <div :class="['wrapper', classes]">
    <!-- Horizontal bar at top. Contains messages, notifications, tasks and user menu -->
    <main-header :admin="adminInfo"></main-header>
    <!-- Left side column. contains the logo and sidebar -->
    <main-sidebar :admin="adminInfo" />
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      
      <section class="content-header" id="head-spacing" >
        <h1>
          {{$route.name.toUpperCase() }} 
          <small><i class="fa  fa-long-arrow-right"></i>&nbsp;{{ $route.meta.description }}</small>
        </h1>
        <ol class="breadcrumb">
          <li>
            <router-link to="/">
            <a>
              <i class="fa fa-home"></i>Home
            </a>
            </router-link>
          </li>
          <li class="active"> <i class="fa fa-pagelines"></i> &nbsp;{{$route.name.toUpperCase()}}</li>
        </ol>
      </section>
      <router-view></router-view>
    </div>
    <main-footer :admin="adminInfo"></main-footer>
  </div>
</template>

<script>
import config from '../config'
import MainFooter from './layout/Footers/MainFooter'
import MainHeader from './layout/Headers/MainHeader'
import MainSidebar from './layout/Sidebars/MainSidebar'
import { mapState } from 'vuex'
import 'hideseek'

export default {
  name: 'Dash',
  components: {
    MainFooter,
    MainHeader,
    MainSidebar
  },
  data() {
    return {
      classes: {
        fixed_layout: config.fixedLayout,
        hide_logo: config.hideLogoOnMobile
      }
    }
  },
  computed: {
    ...mapState([
      'adminInfo'
    ])
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
