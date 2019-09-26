<template>
    <modal name="AssignMember" transition="nice-modal-fade" 
        :draggable="true" 
        :reset="true"
        :height="500"
        :clickToClose="false"
        @before-open="beforeOpen"
    >
      <div class="box box-group">
        <div class="box-header with-border dark">
          <h3 class="box-title">Assign member</h3>
        </div>
        <div class="box-body">
            <div class="row" >
              <div class="col-xs-12">
                <h4 class="title">Assignee: </h4>
                <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-fw fa-child"></i></span>
                    <multiselect 
                        name="users"
                        v-model="newTaskInfo.user"
                        :class="{ 'is-invalid': errors.has('users') }" 
                        :options="users"
                         placeholder="Add member to task"
                        :multiple="true"
                        :close-on-select="false"
                        :clear-on-select="false"
                        :preserve-search="true"
                        label="name"
                        track-by="name"
                    >
                    </multiselect>
                </div>
            </div>
          </div>
          <!--Input section-->
          <div class="row">
            <div class="col-xs-12">
                <h4 class="title" >Task ID</h4>
                <div class="input-group ">
                    <span class="input-group-addon">
                    <i class="fa fa-sun-o"></i>
                    </span>
                    <input
                    type="number"
                    v-model.number="currentTask.id"   
                    width="100%"
                    class="form-control"
                    disabled
                    />
                </div>
            </div>
            <div class="col-xs-12">
                <h4 class="title" >Task label</h4>
                <div class="input-group">
                    <span class="input-group-addon">
                    <i class="fa fa-tag"></i>
                    </span>
                    <input
                    type="text"
                    v-model="currentTask.label"
                    class="form-control"   
                    width="100%" 
                    disabled      
                    />
                </div>
            </div>
          </div>
        </div>
        <div class="box-footer">
          <button class="btn-create button-modal pull-right" @click="handleSubmit(newTaskInfo, currentTask)">Assign Member</button>
          <button class="btn-close button-modal" @click="closeModal">Cancle</button>
        </div>
      </div>
    </modal>
</template>
<script>
import Multiselect from 'vue-multiselect'
import { EventBus } from '@/main.js'

export default {
    name: 'AssignMember',
    components: { Multiselect },
    props: ['users'],
    data() {
        return {
          currentTask: {},
          newTaskInfo: {
            collapse: true,
            user: []
          },
          beforeEdit: ''
        }
    },
    methods: {
        beforeOpen(event) {
          let currentUserId = []
          this.currentTask = event.params.data
          currentUserId = this.currentTask.usersId
          console.log(currentUserId)
          for (let i = 0; i < this.users.length; i++) {
            for (let j = 0; j < currentUserId.length; j++) {
              if (this.users[i].id === currentUserId[j]) {
                this.newTaskInfo.user.push(this.users[i])
              }
            }
          }
          console.log(this.newTaskInfo.user)
          this.beforeEdit = Object.assign({}, this.currentTask)
        },
        closeModal() {
            Object.assign(this.currentTask, this.beforeEdit)
            this.$modal.hide('AssignMember')
        },
        handleSubmit(newTaskInfo, currentTask) {
          this.$validator.validate().then(valid => {
                  if (valid) {
                      let info = {
                        newTaskInfo: newTaskInfo,
                        currentTask: currentTask
                      }
                      EventBus.$emit('assignMember', info)
                      this.$modal.hide('AssignMember')
                  } else {
                      this.$modal.show('dialog', {
                        title: 'Error',
                        text: 'Invalid input!'})
                  }
              })
           }
    },
    beforeDestroy() {
      EventBus.$off('assignMember')
    }
}
</script>
<style scoped>
.box-footer {
  margin-top: 80px
}
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