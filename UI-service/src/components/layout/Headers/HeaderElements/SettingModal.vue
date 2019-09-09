<template>
  <div>
    <modal name="someSetting" 
        transition="nice-modal-fade" 
        :height=600 
        :width=400 
        :draggable="true" 
        :reset="true"
        :pivotX=0.95>
      <a class="pull-right exit-btn" @click="$modal.hide('someSetting')"><i class="fa fa-close"/></a>
      <div class="setting-content">
        <div>
          <h3 class="setting-heading">Project Setting</h3>
        </div>
        <div class="form-group">
          <label class="setting-subheading">Project's name: </label>
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-fw fa-file-o"></i></span>
              <input
                class="form-control" 
                :value="project.name"
                type="text"/>
            </div>
        </div>

        <div class="form-group">
          <label class="setting-subheading">Effort of this project</label>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-fw fa-calendar-check-o"></i>
            </span>
            <select class="form-control">
              <option selected>{{id}}</option>
              <option>40</option>
              <option>42</option>
              <option>38</option>
              <option>36</option>
              </select>
          </div>  
        </div>

        <div class="form-group">
          <label class="setting-subheading">This project start at</label>
          <div>
            <datepicker v-model="project.startDate" appendToBody 
            lang="en" 
            format="MMM/DD/YYYY" 
            width="100%"
            :editable="false">
            </datepicker>
          </div>
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
import datepicker from 'vue2-datepicker'
import { mapState } from 'vuex'

export default {
  name: 'settingModal',
  props: ['id'],
  components: {
    datepicker
  },
  created() {
    this.$store.dispatch('getProjectById', this.id)
  },
  computed: {
   ...mapState([
     'project'
   ])
  },
  shortcuts: [{
    onClick: () => {
      this.project.startDate = [ new Date(), new Date() ]
    }
  }]
}
</script>

<style scoped>
.setting-content{
  text-align: center
}
.setting-heading {
  margin-bottom: 50px
}
.form-group {
  margin: 20px !important;
  padding: 5px
}
.exit-btn {
    font-size: 15px;
    padding: 5px;
    color: #313233
  }
  .exit-btn:hover{
    color: #3fb0ac
  }
</style>

