<template>
  <li>
    <a @click="showSetting" title="Setting">
      <span class="fa fa-gears" id="myIcon" ></span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'buttonSetting',
  methods: {
    showSetting() {
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
#myIcon {
  color: rgb(43, 42, 42);
  margin: 0 5px 0 5px
}
</style>

