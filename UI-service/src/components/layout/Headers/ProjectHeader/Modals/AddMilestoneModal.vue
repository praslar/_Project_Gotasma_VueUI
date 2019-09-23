<template>
    <modal name="AddMilestone" transition="nice-modal-fade" 
        :draggable="true" 
        :reset="true"
        :height=500
        :width=400>
      <div class="box box-group">
        <div class="box-header with-border dark">
          <h3 class="box-title">Add new Milestone</h3>
        </div>
        <div class="box-body">

           <h4 class="title col-xs-12" >Label</h4>
          <div class="input-group col-xs-12">
            <span class="input-group-addon">
              <i class="fa fa-tag"></i>
            </span>
            <input
              type="text"
              v-validate="'required|min:3'"
              v-model="newTaskInfo.label"
              class="form-control"
              placeholder="Enter label"
              name="Milestone label"
              :class="{ 'is-invalid':submitted &&  errors.has('Milestone label') }"
            />
            <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
              <div v-if="submitted && errors.has('Milestone label')" class="invalid-feedback">{{ errors.first('Milestone label') }}</div> 
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
          <button class="btn-create button-modal pull-right" @click="handleSubmit(newTaskInfo)">Add Milestone</button>
          <button class="btn-close button-modal" @click="closeModal">Cancle</button>
        </div>
      </div>
    </modal>
</template>
<script>
import datepicker from 'vue2-datepicker'
import { EventBus } from '@/main.js'

export default {
    name: 'AddMilestoneModal',
    components: { datepicker },
    data() {
      return {
        currentTask: '',
        submitted: false,
        newTaskInfo: {
          id: 858949034784904,
          label: '',
          start: '',
          duration: 86400000,
          type: 'milestone',
          progress: 100,
          style: {
            base: {
              fill: '#de3131',
              'stroke-width': 2,
              stroke: '#de3131'
            }
          }
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
          this.$modal.hide('AddMilestone')
      },
      handleSubmit(newMilestone) {
      this.submitted = true
      this.$validator.validate().then(valid => {
                if (valid) {
                  EventBus.$emit('addMilestone', newMilestone)
                  this.$modal.hide('AddMilestone')
                } else {
                    this.$modal.show('dialog', {
                      title: 'Error',
                      text: 'Invalid input!'})
                }
            })
       }
    },
    beforeDestroy() {
      EventBus.$off('AddMilestone')
    }
}
</script>

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