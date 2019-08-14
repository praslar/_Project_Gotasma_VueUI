<template>
  <li class="dropdown notifications-menu">
    <a href="javascript:;" class="dropdown-toggle">
      <span class="fa fa-save" id="myIcon"/>
      <span class="hidden-xs" id="myIcon">{{ "SAVE" }}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'buttonSave'
}
</script>

<style scoped>
#myIcon {
  color: black;
}
</style>

