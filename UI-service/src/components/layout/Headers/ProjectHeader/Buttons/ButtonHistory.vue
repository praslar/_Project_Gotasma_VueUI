<template>
  <li>
    <router-link :to="'/project/' + idProject + '/history'">
        <a title="History (snapshots list)" @click="hide">
          <span class="fa fa-history myIcon"></span>
        </a>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'buttonHistory',
  props: ['idProject'],
  methods: {
    hide() {
      this.$modal.hide('someFilter')
      this.$modal.hide('someSetting')
    }
  }
}
</script>

<style scoped>
.myIcon {
  color:#3fb0ac;
  margin: 0 5px 0 5px
}
</style>

