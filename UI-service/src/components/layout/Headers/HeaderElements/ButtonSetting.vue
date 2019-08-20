<template>
  <li>
    <a href="javascript:;" class="dropdown-toggle"  @click="showCreateProj">
      <span class="fa fa-gears" id="myIcon"></span>
    </a>
  </li>
</template>

<script>

export default {
  name: 'buttonSetting',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    showCreateProj () {
      this.$modal.show('dialog', {
        title: 'Project Setting',
        text: 'Some setting will be added later on'
      })
    }
  }
}
</script>

<style scoped>
#myIcon {
  color: black
}
</style>

