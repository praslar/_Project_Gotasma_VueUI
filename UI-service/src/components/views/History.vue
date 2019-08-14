<template>
  <div :class="['wrapper', classes]">
    <dash-header-history></dash-header-history>
    <sidebar-history/>
    
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          {{$route.name.toUpperCase() }}
          <small>{{ $route.meta.description }}</small>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="javascript:;">
              <i class="fa fa-home"></i>Home
            </a>
          </li>
          <li class="active">{{$route.name.toUpperCase()}}</li>
        </ol>
      </section>

      <router-view></router-view>
    </div>
    <dash-footer></dash-footer>
  </div>
</template>

<script>
import config from '../../config'
import DashFooter from '../layout/DashFooter'
import DashHeaderHistory from '../layout/DashHeaderHistory'
import SidebarHistory from '../layout/SidebarHistory'

export default {
  name: 'History',
  components: {
    DashFooter,
    DashHeaderHistory,
    SidebarHistory
  },
  data: function() {
    return {
      // section: 'Dash',
      classes: {
        fixed_layout: config.fixedLayout,
        hide_logo: config.hideLogoOnMobile
      }
    }
  }
}
</script>

