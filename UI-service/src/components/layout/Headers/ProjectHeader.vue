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
          <buttonHistory></buttonHistory>
          <buttonAddMember></buttonAddMember>
          <buttonFilter></buttonFilter>
          <buttonSetting></buttonSetting>
          <buttonSave></buttonSave>
        </ul>
      </div>
      <v-dialog/>
    </nav>
  </header>
</template>

<script>
import ButtonHistory from './HeaderElements/ButtonHistory'
import ButtonSave from './HeaderElements/ButtonSave'
import ButtonSetting from './HeaderElements/ButtonSetting'
import ButtonFilter from './HeaderElements/ButtonFilter'
import buttonAddMember from './HeaderElements/ButtonAddMember'

export default {
  name: 'DashHeader',
  components: {
    ButtonHistory,
    ButtonSave,
    ButtonSetting,
    ButtonFilter,
    buttonAddMember
  },
  methods: {
  }
}
</script>

<style scoped>
.header-name {
  width: 50%;
  display: fixed;
}
</style>
