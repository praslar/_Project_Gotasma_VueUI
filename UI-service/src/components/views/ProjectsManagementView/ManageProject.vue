<template>
  <section class="content">
    <div class="row center-block">
      <div class="header col-md-12">
        <span>Projects</span> <br>
        <button
          type="submit"
          class="btn btn-info pull-right special"
          @click="$modal.show('createNewProj')">
          Create New Project</button>
        <i>Here you can manage all your projects. You can also create new project by clicking a single button.</i>
        
      </div>
    </div>
     
    <tableProject class="main" ></tableProject>
    <NewProject :projects="projects"></NewProject>
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
  },
  data() {
    return {
      projects: {
        name: '',
        startDate: ''
      }
    }
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
  margin: 20px 0;
  vertical-align: middle;
}
.content {
  margin-top: 20px !important
}
.vdp-datepicker .vdp-datepicker__calendar{
  color: #000 !important;
}

</style>
