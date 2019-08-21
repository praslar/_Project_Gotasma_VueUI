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
    <nav class="navbar navbar-static-top" role="navigation">
            <a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
    <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <admin-menu :admin="admin"></admin-menu>
        </ul>
    </div>
    </nav>

  </header>
</template>
<script>
import AdminMenu from './HeaderElements/AdminMenu'

export default {
  name: 'dash-header-history',
  components: { AdminMenu },
  props: ['admin'],
  data() {
    return {
    }
  }
}
</script>
