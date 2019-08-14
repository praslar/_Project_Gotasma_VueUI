<template>
  <!-- Main content -->
  <section class="content">
    <div class="col-xs-12">
      <div id="btn-spacing">
        <button type="submit" v-bind:class="'btn btn-primary btn-lg'" id="myBtn">Create New Project</button>
      </div>
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">
            <strong>Project number 1</strong>
          </h3>
          <div class="box-body"></div>
        </div>
      </div>
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">
            <strong>Project number 2</strong>
          </h3>
          <div class="box-body"></div>
        </div>
      </div>
    </div>
  </section>
  <!-- /.content -->
</template>

<script>
export default {
  name: 'projectsManagement',
  components: {},
  data() {
    return {}
  }
}
</script>
<style>
.info-box {
  cursor: pointer;
}
.info-box-content {
  text-align: center;
  vertical-align: middle;
  display: inherit;
}
#btn-spacing {
  margin-bottom: 20px;
  vertical-align: middle;
}
#myBtn {
  position: relative;
}
</style>
