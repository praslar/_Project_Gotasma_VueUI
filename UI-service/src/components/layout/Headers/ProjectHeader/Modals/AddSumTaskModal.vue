<template>
    <modal name="AddSumTaskModal" transition="nice-modal-fade" 
        :draggable="true" 
        :reset="true"
        :height=400
    >
      <div class="box box-group">
        <div class="box-header with-border dark">
          <h3 class="box-title">Add new sum task</h3>
        </div>
        <div class="box-body">
          <!--Input section-->
          <h4 class="title col-xs-12" >Task ID</h4>
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
           <h4 class="title col-xs-12" >Task label</h4>
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
           <h4 class="title col-xs-12" >Start day</h4>
          <div class="input-group col-xs-12">
              <span class="input-group-addon">
                <i class="fa fa-calendar"></i>
              </span>
              <datepicker    
                lang="en"
                name="start"
                id="start" 
                v-model="newTaskInfo.start"
                format="DD/MMM/YYYY"
                width="100%"
                v-validate="'required'"
                data-vv-name="start"
                :class="{ 'is-invalid':submitted &&  errors.has('start') }"
                > 
              </datepicker>
              <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
               <div v-if="submitted && errors.has('start')" class="invalid-feedback sitLenMotTi">{{ errors.first('start') }}</div> 
             </transition>
          </div>
        </div>
        <div class="box-footer">
          <button class="btn-create button-modal pull-right" @click="handleSubmit(newTaskInfo)">Add sum task</button>
          <button class="btn-close button-modal" @click="closeModal">Cancle</button>
        </div>
      </div>
    </modal>
</template>
<script>
import datepicker from 'vue2-datepicker'
import { EventBus } from '@/main.js'

export default {
    name: 'AddSumTaskModal',
    components: { datepicker },
    data() {
      return {
        currentTask: '',
        submitted: false,
        newTaskInfo: {
          id: '',
          label: '',
          start: '',
          duration: '',
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
          this.$modal.hide('AddSumTaskModal')
      },
      handleSubmit(newTaskInfo) {
      this.submitted = true
      this.$validator.validate().then(valid => {
                if (valid) {
                  EventBus.$emit('addSumTask', newTaskInfo)
                  this.$modal.hide('AddSumTaskModal')
                } else {
                    this.$modal.show('dialog', {
                      title: 'Error',
                      text: 'Invalid input!'})
                }
            })
       }
    },
    beforeDestroy() {
      EventBus.$off('addSumTask')
    }
}
</script>
<style>
  .mx-input-append>svg {
    height: 20px;
  }
  .multiselect__element>span>span {
    color: rgba(41, 36, 36, 0.856)
  }
  .button-modal {
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
  }
  .btn-close:hover {
    border-color:  hsl(350, 47%, 47%);
    color: hsl(350, 47%, 47%);
  }
  .invalid-feedback{
  font-size: 12px;
  color: red;
  z-index: 9;
  position: absolute;
  margin-top: 35px;
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }
  .sitLenMotTi{
    margin-top: 0px;
  }
</style>
<style scoped>
.box-title {
  padding: 5px;
  letter-spacing: 1px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: #313233;
  text-transform: uppercase;
  transition: 0.1s all;
  font-size: 16px;
  cursor: pointer;
}
.title {
  padding: 6px 6px;
  font-size: 14px;
  font-weight: 600;
  margin-left: 0px;
  padding-left: 0px 
}

</style>