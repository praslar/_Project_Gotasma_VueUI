<template>
  <section class="content">
      <div id="btn-spacing">
        <button
          type="submit"
          v-bind:class="'btn btn-primary btn-lg'"
          @click="createNewProj"
        >Create New Project</button>
      </div>
      <TableProject></TableProject>
      <NewProject></NewProject>
  </section>
</template>


<script>
import TableProject from './TableProject'
import NewProject from './NewProject'
export default {
  name: 'projectsManagement',
  data() {
    return {}
  },
  methods: {
    createNewProj() {
      this.$modal.show('createNewProj')
    }
  },
  components: {
    TableProject,
    NewProject
  }
}
</script>
<style scoped>
#btn-spacing {
  margin-bottom: 20px;
  vertical-align: middle;
}
.content {
  margin-top: 20px !important;
}
</style>
