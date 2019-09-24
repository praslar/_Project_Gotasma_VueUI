  <template>
  <modal
    name="breakTaskModal"
    transition="pop-out"
    :height="400"
    :width="500"
    :draggable="true"
    :reset="true"
    :clickToClose="false"
    @before-open="beforeOpen"
    @before-close="beforeClose"
  >
    <a class="pull-right exit-btn" @click="cancelEdit">
      <i class="fa fa-close" />
    </a>
    <!-- <form @submit.prevent="applyEdit(currentTask)"> -->
    <div class="modal-box">
      <div class="title">
        <i class="fa fa-fw fa-edit"></i>Break Task
      </div>

      <div class="col-xs-12">
        <h4 class="myheading">Name of Task:</h4>
        <div class="input-group">
          <span class="input-group-addon">
            <i class="fa fa-fw fa-pencil"></i>
          </span>
          <input
            class="form-control"
            placeholder="Name of task"
            type="text"
            v-model="currentTask.label"
          />
        </div>
      </div>

      <div class="col-xs-12" v-if="currentTask.type === 'task'">
        <h4 class="myheading">Assignee:</h4>
        <div class="input-group col-xs-12">
          <span class="input-group-addon">
            <i class="fa fa-fw fa-child"></i>
          </span>
          <input class="form-control" placeholder="Assignee" type="text" v-model="currentTask.user" />
        </div>
      </div>
      <div class="col-xs-12" v-else hidden>
        <h4 class="myheading">Assignee:</h4>
        <div class="input-group col-xs-12">
          <span class="input-group-addon">
            <i class="fa fa-fw fa-child"></i>
          </span>
        </div>
      </div>

      <div class="col-xs-12">
        <h4 class="myheading">Pick date</h4>
        <div class="myPicker">
          <datepicker
            v-model="breakTaskInfo.start"
            lang="en"
            format="DD/MMM/YYYY"
            width="100%"
            :editable="false"
          ></datepicker>
        </div>
      </div>

      <!-- <div class="col-xs-12">
            <h4 class="myheading">Duration (estimated)</h4>
            <div class="input-group col-xs-12">
              <span class="input-group-addon"><i class="fa fa-fw fa-hourglass-3"></i></span>
                <input
                  class="form-control" 
                  placeholder="Duration"    
                  type="number"
                  min="0"
                  v-model.number="currentTask.myAttribute">
            </div>
          </div>

          <div class="col-xs-12">
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
      </div>-->

      <div class="button-set col-xs-12">
        <button class="button-modal pull-right" @click="applyEdit(currentTask)">Apply</button>
      </div>
    </div>
    <!-- </form> -->
  </modal>
</template>
<script>
import datepicker from 'vue2-datepicker'
// import dayjs from 'dayjs'
import { EventBus } from '@/main.js'
export default {
  name: 'BreakTaskModal',
  components: {
    datepicker
  },
  props: ['exceptionDays'],
  data() {
    return {
      currentTask: '',
      beforeEdit: '',
      breakTaskInfo: {
        parentId: '',
        id: '',
        label: '',
        start: '',
        duration: '',
        type: 'task',
        progress: 100,
        collapse: true
      }
    }
  },
  shortcuts: [
    {
      onClick: () => {
        this.currentTask.startDate = [new Date(), new Date()]
      }
    }
  ],
  methods: {
    beforeOpen(event) {
        let day = new Date()
        let number = day.valueOf()
        this.currentTask = event.params.data
        this.breakTaskInfo.parentId = this.currentTask.parentId
        this.breakTaskInfo.label = this.currentTask.label
        this.breakTaskInfo.id = number
        this.beforeEdit = Object.assign({}, this.currentTask)
    },
    beforeClose() {
      this.breakTaskInfo.start = this.breakTaskInfo.start.valueOf()
    },
    applyEdit(task) {
      this.$modal.hide('breakTaskModal')
      if (this.breakTaskInfo.start > this.currentTask.start && this.breakTaskInfo.start < this.currentTask.endTime) {
        let durFirstHalf = this.breakTaskInfo.start.valueOf() - this.currentTask.start
        console.log('first half', durFirstHalf / 86400000)
        let durSecondHalf = this.currentTask.myAttribute - durFirstHalf
        console.log('2nd half', durSecondHalf / 86400000)
        this.breakTaskInfo.duration = durSecondHalf
        this.$modal.hide('breakTaskModal')
        {
          task.duration = durFirstHalf
          let timeStart = new Date(task.startTime)
          let calculateTimeChart = task.startTime
          let dayofWeek = timeStart.getDay()
          let durationDays = task.duration / 86400000
          let actualDuration = task.duration
          if (task.effort === 50) {
            actualDuration = actualDuration * 2
          }
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
          task.endTime = task.startTime + (task.duration)
          EventBus.$emit('breakTask', this.breakTaskInfo)
          // console.log(this.breakTaskInfo)
        }
        return task
      } else {
        console.log('not ok')
      }
    },
    cancelEdit() {
      Object.assign(this.currentTask, this.beforeEdit)
      this.$modal.hide('breakTaskModal')
    }
  },
  beforeDestroy() {
    EventBus.$off('breakTask')
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
  padding: 20px 20px 30px 20px;
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
  font-size: 23px;
  font-weight: 300;
}

.modal-box .input-group {
  padding-bottom: 20px;
}

.modal-box button {
  background: white;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  letter-spacing: 1px;
  font-family: "Open Sans", sans-serif;
  font-weight: 6 00;
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
  color: #eb4b4b;
}
.modal-box .button-set {
  margin: 15px 0 15px 0;
}
.myheading {
  margin: 5px 0 !important;
}
.exit-btn {
  font-size: 25px;
  padding: 5px;
  color: #313233;
}
.exit-btn:hover {
  color: #3fb0ac;
}

.myPicker {
  padding-bottom: 10px;
}
</style>
