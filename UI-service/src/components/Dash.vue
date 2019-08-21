<template>
  <div :class="['wrapper', classes]">
    <!-- Horizontal bar at top. Contains messages, notifications, tasks and user menu -->
    <main-header :admin="admin"></main-header>
    <!-- Left side column. contains the logo and sidebar -->
    <main-sidebar :admin="admin" />
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header" id="head-spacing">
        <h1>
          {{$route.name.toUpperCase() }}
          <small>{{ $route.meta.description }}</small>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="/">
              <i class="fa fa-home"></i>Home
            </a>
          </li>
          <li class="active">{{$route.name.toUpperCase()}}</li>
        </ol>
      </section>
      <router-view></router-view>
    </div>
    <main-footer :admin="admin"></main-footer>
  </div>
</template>

<script>
import config from '../config'
import MainFooter from './layout/Footers/MainFooter'
import MainHeader from './layout/Headers/MainHeader'
import MainSidebar from './layout/Sidebars/MainSidebar'
import 'hideseek'
import * as Services from '../services'

export default {
  name: 'Dash',
  components: {
    MainFooter,
    MainHeader,
    MainSidebar
  },
  data: function() {
    return {
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
          self.admin = response.data
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
