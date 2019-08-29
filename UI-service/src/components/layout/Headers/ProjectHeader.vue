<template>
  <header class="main-header">
    <span class="logo-mini">
      <a href="/">
        <img
          src="/static/img/kitty.svg"
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
          <buttonAddMember :memberData="memberData" :idProject="idProject"></buttonAddMember>
          <buttonHistory :idProject="idProject"></buttonHistory>
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
import ButtonHistory from './HeaderElements/Buttons/ButtonHistory'
import ButtonSave from './HeaderElements/Buttons/ButtonSave'
import ButtonSetting from './HeaderElements/Buttons/ButtonSetting'
import ButtonFilter from './HeaderElements/Buttons/ButtonFilter'
import buttonAddMember from './HeaderElements/Buttons/ButtonAddMember'

export default {
  name: 'DashHeader',
  components: {
    ButtonHistory,
    ButtonSave,
    ButtonSetting,
    ButtonFilter,
    buttonAddMember
  },
  props: ['memberData', 'idProject']
}
</script>

<style scoped>
.header-name {
  width: 50%;
  display: fixed;
}
.navbar-nav {
  font-size: 18px;
}
</style>
