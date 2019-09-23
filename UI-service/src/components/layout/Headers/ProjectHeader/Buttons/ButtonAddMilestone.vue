<template>
  <li>
    <a @click="showModal" title="Add a Milestone">
      <span class="fa fa-diamond myIcon"></span>
    </a>
  </li>
</template>
<script>
export default {
  methods: {
    showModal() {
        this.$modal.show('AddMilestone')
    }
  }
}
</script>

<style scoped>
.myIcon {
  color: rgb(43, 42, 42);
  margin: 0 5px 0 5px
}
a {
  cursor: pointer
}
</style>