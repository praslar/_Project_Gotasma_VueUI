<template>
  <li>
    <a class="toggle-btn" href="" data-toggle="control-sidebar" title="Setting" @click="show">
      <span class="fa fa-gears" id="myIcon" ></span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'buttonSetting',
  methods: {
  show () {
    this.$modal.show('hello-world')
  },
  hide () {
    this.$modal.hide('hello-world')
  }
}
}
</script>

<style scoped>
#myIcon {
  color: rgb(43, 42, 42);
  margin: 0 5px 0 5px
}
</style>

