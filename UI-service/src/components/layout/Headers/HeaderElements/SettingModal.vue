<template>
  <div>
    <modal name="someSetting" transition="pop-out" :height=600 :width=400 :draggable="true" :reset="true">
      <div class="setting-content">
        <div>
          <h3 class="setting-heading">Project Setting</h3>
        </div>
        <div class="form-group">
          <label class="setting-subheading">Project's Name</label>
          <input type="text" /> 
          <p> id: {{ id }} </p>
          
        </div>

        <div class="form-group">
          <label class="setting-subheading">Effort of this project</label>

          <p>40 hours/week</p>
          <button class="btn btn-flat btn-sm btn-info"> Change </button>
        </div>

        <div class="form-group">
          <label class="setting-subheading">This project start at</label>

          <p>view date</p>
        </div>

        <div class="form-group">
          <label class="setting-subheading">Last update at</label>

          <p>view date</p>
        </div>

        <div>
          <button class="btn btn-info btn-flat btn-lg">APPLY</button>
        </div>
      </div>

    </modal>
  </div>
</template>

<script>
export default {
  name: 'settingModal',
  props: ['id']
}
</script>

<style scoped>
.setting-content{
  text-align: center
}
.setting-heading {
  margin-bottom: 60px
}
.form-group {
  margin: 20px !important;
  padding: 5px
}
</style>

