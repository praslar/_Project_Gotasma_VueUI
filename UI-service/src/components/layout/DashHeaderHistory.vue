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
    </nav>
  </header>
</template>
<script>
export default {
  name: 'dash-header-history',
  data() {
    return {
      snapshotNames: [{ snap1: 'Changing the timeline' }]
    }
  }
}
</script>
<style scoped>
.main-header nav {
  background-color: #242e35 !important;
}
</style>
