<template>
  <div>
    <modal name="someFilter" transition="pop-out" :height=600 :width=400 :draggable="true" :reset="true">
      <div class="setting-content">
        <div>
          <h3 class="setting-heading">Filter</h3>
        </div>
        <div class="form-group">
          <label class="setting-subheading">Task name: </label>
          <input type="text" /> 
          
        </div>

        <div class="form-group">
          <label class="setting-subheading">Assignee </label>
          <input type="text" /> 
        </div>

        <div class="form-group">
          <label class="setting-subheading">Start date</label>
          <input type="text" />
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
  name: 'filterModal'
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

