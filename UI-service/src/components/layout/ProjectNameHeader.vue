<template>
  <li class="dropdown notifications-menu">
    <a href="javascript:;" class="dropdown-toggle">
      <input type="text" class="form-control" value="Project number 1" />
    </a>
  </li>
</template>

<script>
export default {
  name: 'projectNameHeader',
  props: 'name-header'
}
</script>

<style scoped>
input {
    width: 100% !important;
    height: 20px !important;
}
</style>
