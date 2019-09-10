<template>
  <li>
    <a @click="show" title="Setting">
      <span class="fa fa-gears myIcon" ></span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'buttonSetting',
  props: ['id'],
  methods: {
  show () {
    this.$modal.show('someSetting')
    this.$modal.hide('someFilter')
  },
  hide () {
    this.$modal.hide('someSetting')
  }
}
}
</script>

<style scoped>
.myIcon {
  color: rgb(43, 42, 42);
  margin: 0 5px 0 5px
}
a{
  cursor: pointer
}
</style>

