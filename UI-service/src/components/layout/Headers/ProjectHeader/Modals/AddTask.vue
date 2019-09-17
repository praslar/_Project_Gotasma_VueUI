<template>
    <modal name="add-task" transition="nice-modal-fade" 
        :draggable="true" 
        :reset="true"
        :height=500
        :clickToClose="false"
        :resizable="true"
        >
        
    <a class="btn-close" @click="closeModal">
        <i class="fa fa-close"></i>
    </a>
      <form novalidate @submit.prevent="handleSubmit(newTaskInfo)" class="inputUser">
      <div class="box box-group">
        <div class="box-header with-border dark">
          <h3 class="box-title">Add new task</h3>
        </div>
        <div class="box-body">
          <!--Input section-->
          <div class="input-group col-xs-12">
            <span class="input-group-addon">
              <i class="fa fa-sun-o"></i>
            </span>
            <input
              type="number"
              min=0
              id="id"
              v-validate="'required'"
              v-model.number="newTaskInfo.id"
              class="form-control"
              placeholder="Enter task id"
              name="id"
              :class="{ 'is-invalid':submitted &&  errors.has('id') }"
           
            />
            <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
              <div v-if="submitted && errors.has('id')" class="invalid-feedback">{{ errors.first('id') }}</div> 
            </transition>
          </div>
          <div class="input-group col-xs-12">
            <span class="input-group-addon">
              <i class="fa fa-tag"></i>
            </span>
            <input
              type="text"
              id="sum-task-label"
              v-validate="'required|min:3'"
              v-model="newTaskInfo.label"
              class="form-control"
              placeholder="Enter task label"
              name="sum-task-label"
              :class="{ 'is-invalid':submitted &&  errors.has('sum-task-label') }"
           
            />
            <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
              <div v-if="submitted && errors.has('sum-task-label')" class="invalid-feedback">{{ errors.first('sum-task-label') }}</div> 
            </transition>
          </div>
          <div class="input-group col-xs-12">
            <span class="input-group-addon">
              <i class="fa fa-group"></i>
            </span>
           <multiselect 
             class="specialtext"
             id="users"
             name="users"
              :class="{ 'is-invalid':submitted &&  errors.has('users') }"
              v-model="newTaskInfo.users" 
              :options="users" 
              :multiple="true" 
              :close-on-select="false"
              :clear-on-select="false" 
              :preserve-search="true" 
              placeholder="Add member to task" 
              label="name" 
              track-by="name" 
              :preselect-first="true"
             >
          </multiselect>
          </div>     
          <div class="input-group col-xs-12">
            <span class="input-group-addon">
              <i class="fa fa-calendar"></i>
            </span>
            <div>
            <datepicker    
              lang="en" 
              v-model="newTaskInfo.start"
              format="DD/MMM/YYYY"
              width="100%"
              >
            </datepicker>
            </div>
          </div>
          <div class="input-group col-xs-12">
            <span class="input-group-addon">
              <i class="fa fa-hourglass-half"></i>
            </span>
            <div>
            <input
              type="number"
              min = 0
              id="estimate-duraion"            
              v-validate="'required'"
              v-model.number="newTaskInfo.duration"
              class="form-control"
              placeholder="Enter estimated duration"
              name="estimate-duraion"
              :class="{ 'is-invalid': submitted &&  errors.has('estimate-duraion') }"
            />
            <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
              <div v-if="submitted && errors.has('estimate-duraion')" class="invalid-feedback">{{ errors.first('estimate-duraion') }}</div> 
            </transition>
            </div>
          </div>
        </div>
        <div class="box-footer">
          <span class="notice">Add new sum task, choose members can asign to this task</span>
          <button class="btn-create pull-right">Add task</button>
        </div>
      </div>
    </form>

    </modal>
</template>
<script>
import Multiselect from 'vue-multiselect'
import datepicker from 'vue2-datepicker'
import { EventBus } from '@/main.js'

export default {
    props: ['users'],
    data() {
      return {
        submitted: false,
        newTaskInfo: {
          id: '',
          label: '',
          users: [],
          start: '',
          duration: 0,
          type: 'project',
          progress: 0
        }
      }
    },
    shortcuts: [{
      onClick: () => {
        this.values = [ new Date(), new Date() ]
      }
    }
   ],
    methods: {
      closeModal() {
          this.$modal.hide('add-task')
      },
      handleSubmit(newTaskInfo) {
      this.submitted = true
      this.$validator.validate().then(valid => {
                if (valid) {
                  EventBus.$emit('addSumTask', newTaskInfo)
                  this.$modal.hide('add-task')
                }
            })
       }
      },
    components: { Multiselect, datepicker }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>
<style>
  div>ul>li>span>span {
    color: #0d0d0d !important
  }
  .mx-input-append>svg {
    height: 20px;
  }
</style>
<style scoped>
.notice{
  color:  #0d0d0d;
  font-style: italic;
  font-size: 14px;
  padding: 10px;
  padding-top: 20px;
}
.input-group{
  margin-top: 30px !important
}
.invalid-feedback{
  font-size: 12px;
  color: red;
  z-index: 9;
  position: absolute;
  margin-top: 35px;
}
#email{
  margin-top: 0px;
}
.box-title {
  font-family: Roboto;
  font-weight: bold;
}
.input-group {
  margin-top: 15px;
}
button {
  background: white;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  letter-spacing: 1px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  min-width: 140px;
  margin-top: 8px;
  color: #313233;
  cursor: pointer;
  border: 1px solid #bbbbbb;
  text-transform: uppercase;
  transition: 0.1s all;
  font-size: 13px;
  outline: none;
}
.btn-create:hover {
  border-color: #3fb0ac;
  color: #3fb0ac;
  margin: -0px;
}
.btn-close {
  width: 30px;
  font-size: 15px;
  position: absolute;
  z-index: 99;
  right: 0;
  margin: 1px;
  padding-left: 10px;
  color: #3fb0ac;
}
.btn-close:hover {
  color: #173e43;
}
.alert-in-enter-active {
  animation: bounce-in .5s;
}
.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}
</style>