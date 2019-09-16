<template>
  <li>
    <a @click="showModal" title="Add Sum Task">
      <span class="fa fa-file-text-o myIcon"></span>
    </a>
  </li>
</template>
<script>
export default {
  methods: {
    showModal() {
        this.$modal.show('add-task')
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