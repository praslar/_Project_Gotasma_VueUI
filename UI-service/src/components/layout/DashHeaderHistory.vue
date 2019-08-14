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
      <div class="input-group">
        <input
          type="text"
          class="col-md-12 form-control"
          placeholder="Enter an email address of a person you want to invite"
        />
        <span class="input-group-btn">
          <button type="button" class="btn btn-info btn-flat">Invite by email</button>
        </span>
      </div>
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
