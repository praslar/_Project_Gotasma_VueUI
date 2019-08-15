<template>
  <header class="main-header">
    <span class="logo-mini">
      <a href="/">
        <img
          src="/static/img/copilot-logo-white.svg"
          alt="Logo"
          class="img-responsive center-block logo"
        />
      </a>
    </span>
    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <projectNameHeader class="header-name"></projectNameHeader>
          <buttonFilter></buttonFilter>
          <buttonHistory></buttonHistory>
          <buttonSetting></buttonSetting>
          <buttonSave></buttonSave>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import ProjectNameHeader from './ProjectNameHeader'
import ButtonHistory from './ButtonHistory'
import ButtonSave from './ButtonSave'
import ButtonSetting from './ButtonSetting'
import ButtonFilter from './ButtonFilter'

export default {
  name: 'DashHeader',
  components: {
    ProjectNameHeader,
    ButtonHistory,
    ButtonSave,
    ButtonSetting,
    ButtonFilter
  },
  computed: {
  }
}
</script>

<style scoped>
.header-name {
  width: 50%;
  display: fixed;
}
</style>
