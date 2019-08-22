<template>
  <section class="content">
      <div class="btn-spacing">
        <button
          type="submit"
          v-bind:class="'btn btn-info btn-lg'"
          @click="$modal.show('createNewProj')">
          Create New Project</button>
      </div>
    <tableProject></tableProject>
    <NewProject></NewProject>
  </section>  
</template>


<script>

import NewProject from './NewProject'
import tableProject from './TableProject'
export default {
  name: 'manageProject',
  components: {
    NewProject,
    tableProject
  }
}
</script>
<style scoped>
table{
  color: #242E35;
}
img{
  width: 80px;
}
.btn-spacing {
  margin-bottom: 20px;
  vertical-align: middle;
}
.content {
  margin-top: 20px !important
}
</style>
