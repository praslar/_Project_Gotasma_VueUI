  <template>
  <modal name="taskModal" transition="pop-out" 
      height="auto" 
      :scrollable="true"
      :width=500 
      :draggable="true" 
      :reset="true"
      :clickToClose="false"
      @before-open="beforeOpen" 
      @before-close="beforeClose" >
      <a class="pull-right exit-btn" @click="cancelEdit"><i class="fa fa-close"/></a>
    <!-- <form @submit.prevent="applyEdit(currentTask)"> -->
      <div class="modal-box">
        <div class="title"><i class="fa fa-fw fa-edit"></i> Task info</div>
        
          <div class="col-xs-12">
            <h4 class="myheading">Name of Task: </h4>
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-fw fa-pencil"></i></span>
                <input
                  class="form-control" 
                  placeholder="Name of task" 
                  type="text"
                  v-model="currentTask.label"
                  >
            </div>
          </div>

          <div class="col-xs-12" v-if="currentTask.type === 'task'">
            <h4 class="myheading">Assignee: </h4>
            <div class="input-group col-xs-12">
              <span class="input-group-addon"><i class="fa fa-fw fa-child"></i></span>
                <input
                  class="form-control" 
                  placeholder="Assignee"
                  type="text"
                  v-model="currentTask.user">
            </div>
          </div>
          <div class="col-xs-12" v-else hidden>
            <h4 class="myheading">Assignee: </h4>
            <div class="input-group col-xs-12">
              <span class="input-group-addon"><i class="fa fa-fw fa-child"></i></span>
            </div>
          </div>

          <div class="col-xs-12" v-if="currentTask.type === 'task'">
            <h4 class="myheading">Start date</h4>
            <div class="myPicker">
              <datepicker
              v-model="currentTask.start"
              lang="en" 
              format="DD/MMM/YYYY"
              width="100%"
              :editable="false">
              </datepicker>
            </div>
          </div>
          <div class="col-xs-12" v-else hidden>
            <h4 class="myheading">Start date</h4>
            <div class="myPicker">
              <datepicker>
              </datepicker>
            </div>
          </div>

          <div class="col-xs-12">
            <h4 class="myheading">Duration (estimated)</h4>
            <div class="input-group col-xs-12">
              <span class="input-group-addon"><i class="fa fa-fw fa-hourglass-3"></i></span>
                <input
                  v-if="currentTask.type === 'task'"
                  class="form-control" 
                  placeholder="Duration"
                  type="number"
                  min="0"
                  v-model.number="currentTask.myAttribute">
                <input
                  v-else
                  disabled
                  class="form-control"
                  v-model.number="currentTask.myAttribute">
            </div>
          </div>

          <div class="col-xs-12" v-if="currentTask.type === 'task'">
            <h4 class="myheading">Effort</h4>
            <div class="input-group col-xs-12">
              <span class="input-group-addon"><i class="fa fa-fw fa-check-square-o"></i></span>
                <input
                  class="form-control" 
                  placeholder="Effort"
                  type="number"
                  min="0"
                  max="100"
                  v-model.number="currentTask.effort">
              </div>
          </div>
          <div class="col-xs-12" v-else hidden>
            <h4 class="myheading">Effort</h4>
            <div class="input-group col-xs-12">
              <span class="input-group-addon"><i class="fa fa-fw fa-check-square-o"></i></span>
                <input
                  class="form-control" 
                  placeholder="Effort"
                  type="number"
                  min="0"
                  max="100"
                  v-model.number="currentTask.effort">
              </div>
          </div>

          <div class="col-xs-12">
            <h4 class="myheading">Type</h4>
            <div class="input-group col-xs-12">
              <span class="input-group-addon">
                <i class="fa fa-fw fa-hand-pointer-o"></i>
              </span>
              <select
              disabled
              class="form-control"
              v-model="currentTask.type">
                <option v-for="type in taskType" :value="type.value" :key="type">
                    {{ type.text }}
                </option>
              </select>
            </div>          
          </div>

          <div class="col-xs-6">
              <h4 class="myheading">Duration (real-time)</h4>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-fw fa-hourglass"></i></span>
                  <input
                    class="form-control" 
                    disabled
                    v-model="currentTask.duration">
              </div>
            </div>

            <div class="col-xs-6">
              <h4 class="myheading">End date</h4>
              <div>
                <datepicker
                v-model="currentTask.endTime"
                lang="en" 
                format="DD/MMM/YYYY" 
                width="100%"
                :editable="false"
                disabled>
                </datepicker>
              </div>
            </div>

          <div class="button-set col-xs-12">
            <button class="button-modal pull-right" @click="applyEdit(currentTask)">Apply</button>
            <button class="btn-close button-modal" @click="deleteTask(currentTask.id)">Delete</button>
          </div>
    </div>
    <!-- </form> -->
  </modal>
</template>
<script>
import datepicker from 'vue2-datepicker'
import dayjs from 'dayjs'
import { EventBus } from '@/main.js'
export default {
  name: 'TaskModal',
  components: {
    datepicker
  },
  props: ['exceptionDays'],
  data() {
    return {
      currentTask: '',
      beforeEdit: '',
      taskType: [
        { text: 'Parent Task', value: 'project' },
        { text: 'Task', value: 'task' },
        { text: 'Milestone', value: 'milestone' }
      ]
    }
  },
  shortcuts: [{
      onClick: () => {
        this.currentTask.startDate = [ new Date(), new Date() ]
      }
    }
  ],
  methods: {
    beforeOpen(event) {
      // console.log(event.params.data)
      this.currentTask = event.params.data
      this.currentTask.myAttribute = this.currentTask.myAttribute / 86400000
      this.currentTask.duration = this.currentTask.duration / 86400000
      this.beforeEdit = Object.assign({}, this.currentTask)
      this.myType = this.currentTask.type
    },
    beforeClose() {
      this.currentTask.startTime = (this.currentTask.start).valueOf()
      this.currentTask.start = (this.currentTask.start).valueOf()
      this.currentTask.myAttribute = this.currentTask.myAttribute * 86400000
      this.currentTask.duration = this.currentTask.duration * 86400000
    },
    applyEdit(task) {
      this.$modal.hide('taskModal')
        {
          console.log('attribute', task.myAttribute)
          task.duration = task.myAttribute
          console.log('duration', task.duration)
          let timeStart = new Date(task.startTime)
          console.log('time start', timeStart)
          let calculateTimeChart = task.startTime
          let dayofWeek = (timeStart.getDay())
          let durationDays = task.duration / 86400000
          let actualDuration = task.duration
          console.log('actual trc effort', actualDuration)
          if (task.effort === 50) {
            actualDuration = actualDuration * 2
          }
          console.log('actual', actualDuration)
          console.log('startTime: ' + dayjs(task.startTime).format('DD-MM-YYYY'))
          console.log('duration: ' + durationDays)
          console.log('dateofweeks ' + dayofWeek)
          let isHoliday = false
          for (let i = 0; i < durationDays; i++) {
            for (let j = 0; j < this.exceptionDays.length; j++) {
              if (calculateTimeChart === this.exceptionDays[j]) {
                isHoliday = true
                break
              }
            }
            // console.log('lập lần', i , 'durationDays', durationDays)
            if (isHoliday) {
              // console.log('La holiday')
              // console.log('ngay trong tuan', dayofWeek)
              actualDuration += 86400000
              console.log('actual', actualDuration)
              isHoliday = false
              durationDays++
              if (dayofWeek === 6) {
                dayofWeek = 0
              } else {
                dayofWeek += 1
              }
            } else if (dayofWeek === 6) {
              // console.log('la T7')
              dayofWeek = 0
              actualDuration += 86400000
              console.log('actual', actualDuration)
              durationDays++
            } else if (dayofWeek === 0) {
              // console.log('la CN')
              dayofWeek += 1
              actualDuration += 86400000
              console.log('actual', actualDuration)
              durationDays++
            } else {
              // console.log('la ngay thuong')
              dayofWeek += 1
            }
          calculateTimeChart += 86400000
          }
        console.log('actual after', actualDuration)
        task.duration = actualDuration
        task.endTime = task.startTime + (task.duration - 1)
        }
      return task
    },
    deleteTask(idTask) {
      this.$modal.show('dialog', {
        title: 'Are you sure?',
        text: 'This task will be deleted permanantly',
        buttons: [
          {
            title: 'OK',
            default: true,
            handler: () => {
              EventBus.$emit('deleteThisTask', idTask)
              this.$modal.hide('dialog')
              this.$modal.hide('taskModal')
            }
          },
          {
            title: 'CANCEL',
            handler: () => {
              this.$modal.hide('dialog')
            }
          }
        ]
      })
    },
    cancelEdit() {
      Object.assign(this.currentTask, this.beforeEdit)
      this.$modal.hide('taskModal')
    }
  },
  beforeDestroy() {
    console.log('destroyed delete task')
    EventBus.$off('deleteThisTask')
  }
}
</script>

<style scoped>
.modal-box {
  background: white;
  color: black;
  font-size: 0;
}

.modal-box .title {
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
  font-size: 23px;
  font-weight: 300;
}

.modal-box .input-group{
  padding-bottom: 10px
}

.modal-box button {
    background: white;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    letter-spacing: 1px;
    font-family: "Open Sans", sans-serif;
    font-weight: 6  00;
    margin-top: 8px;
    color: #313233;
    cursor: pointer;
    border: 2px solid #bbbbbb;
    text-transform: uppercase;
    transition: 0.1s all;
    font-size: 13px;
    outline: none;
  }
  .modal-box .button-set :hover {
      border-color: #3fb0ac;
      color: #3fb0ac;
  }

  .modal-box .button-set .btn-close:hover {
    border-color: #eb4b4b; 
    color: #eb4b4b
  }
  .modal-box .button-set {
    margin: 15px 0 15px 0;
  }
  .myheading {
    margin: 5px 0 !important
  }
  .exit-btn {
    font-size: 25px;
    padding: 5px;
    color: #313233
  }
  .exit-btn:hover{
    color: #3fb0ac
  }

  .myPicker {
    padding-bottom: 10px
  }
</style>
