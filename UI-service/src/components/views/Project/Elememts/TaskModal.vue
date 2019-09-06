<template>
  <modal name="taskModal" transition="pop-out" :height=460 :width=600 :draggable="true" :reset="true" @before-open="beforeOpen" >
    <a class="pull-right exit-btn" @click="cancelCreate"><i class="fa fa-close"/></a>
    <form action="">
      <div class="modal-box">
      <div class="partition">
        <div class="partition-title">new modal</div>
        <div class="partition-form">

          <h4 class="myheading">Name: </h4>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-fw fa-check"></i></span>
              <input
                class="form-control" 
                placeholder="Name of project" 
                type="text"
                v-model="project.label">
            </div>

          <h4 class="myheading">Asignee: </h4>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-fw fa-check"></i></span>
              <input
                class="form-control" 
                placeholder="Asignee" 
                type="text"
                v-model="project.user">
            </div>

          <!-- Effort -->
          <!-- <h4 class="myheading">Effort</h4>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-fw fa-calendar-check-o"></i>
            </span>
            <select class="form-control">
              <option value="" disabled selected hidden>Select your option</option>
              <option>40</option>
              <option>42</option>
              <option>38</option>
              <option>36</option>
              </select>
          </div> -->

          <h4 class="myheading">Start date</h4>
          <div>
            <datepicker appendToBody
            v-model="project.start"
            lang="en" 
            format="MMM/DD/YYYY" 
            width="100%"
            :editable="false">
            </datepicker>
          </div>

          <h4 class="myheading">End date</h4>
          <div>
            <datepicker appendToBody
            v-model="project.endTime"
            lang="en" 
            format="MMM/DD/YYYY" 
            width="100%"
            :editable="false">
            </datepicker>
          </div>

        </div>
      </div>
    </div>
    </form>
  </modal>
</template>
<script>
import datepicker from 'vue2-datepicker'

export default {
  name: 'taskModal',
  components: {
    datepicker
  },
  data() {
    return {
      project: ''
    }
  },
  shortcuts: [{
      onClick: () => {
        this.project.startDate = [ new Date(), new Date() ]
        }
    }
  ],
  methods: {
    cancelCreate() {
      this.$modal.hide('taskModal')
    },
    beforeOpen(event) {
      console.log(event.params.data)
      this.project = event.params.data
    }
  }
}
</script>

<style scoped>
.modal-box {
  background: white;
  color: black;
  font-size: 0;
}

.modal-box .partition .partition-title {
      box-sizing: border-box;
      padding: 30px;
      width: 100%;
      text-align: center;
      letter-spacing: 1px;
      font-size: 23px;
      font-weight: 300;
}
.modal-box .partition .partition-form {
      padding: 0 20px;
}

.modal-box .partition .partition-form .input-group{
      padding-bottom: 10px;
}

.modal-box button {
    background: white;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    letter-spacing: 1px;
    font-family: "Open Sans", sans-serif;
    font-weight: 6  00;
    min-width: 100%;
    margin-top: 8px;
    color: #313233;
    cursor: pointer;
    border: 2px solid #bbbbbb;
    text-transform: uppercase;
    transition: 0.1s all;
    font-size: 13px;
    outline: none;
  }
  .modal-box .partition-form .button-set :hover {
      border-color: #3fb0ac;
      color: #3fb0ac;

  }
  .modal-box .button-set {
    margin-top: 60px;
  }
  .myheading {
    margin: 5px 0 !important;
    padding-top: 8px !important
  }
  .exit-btn {
    font-size: 25px;
    padding: 5px;
    color: #313233
  }
  .exit-btn:hover{
    color: #3fb0ac
  }

.invalid-feedback{
  font-size: 12px;
  color: red;
  display: inline-block;
  z-index: 9;
  position: absolute;
  margin-top: -11px;
}
.alert-in-enter-active {
  animation: bounce-in .5s;
}
.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}
.ontop {
  padding-top: 10px;
}
</style>
