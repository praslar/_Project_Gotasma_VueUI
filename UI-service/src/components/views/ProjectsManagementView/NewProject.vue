<template>
  <modal name="createNewProj" transition="pop-out" :height=600 :width=500 :draggable="true" :clickToClose="false">
    <a class="pull-right exit-btn" @click="cancelCreate"><i class="fa fa-close"/></a>
    <form action="">
      <div class="modal-box">
      <div class="partition">
        <div class="partition-title">CREATE NEW PROJECT</div>
        <div class="partition-form">
          <h4 class="myheading">Name of project: </h4>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-fw fa-check"></i></span>
              <input v-model="projects.name" class="form-control" placeholder="Name of project" type="text">      
            </div>
          <h4 class="myheading">Effort: (hours/week)</h4>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-fw fa-calendar-check-o"></i>
            </span>
            <select class="form-control" v-model="projects.effort">
              <option>40</option>
              <option>38</option>
              <option>36</option>
              </select>
          </div>
          <h4 class="myheading">Start date: </h4>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-fw fa-calendar"></i>
            </span>
            <datepicker name="calenderDate"  format="MMM/DD/YYYY" id="dateInput" v-model="projects.startDate"></datepicker>
          </div>
          <div class="button-set">
            <button class="create-btn" @click="createAlert">Create</button>
          </div>
        </div>
      </div>
    </div>
    </form>
  </modal>
</template>
<script>
import datepicker from 'vue-date-picker'

export default {
  name: 'NewProject',
  components: {
    datepicker
  },
  data() {
    return {
      projects: {
        name: '',
        effort: '',
        startDate: ''
      }
    }
  },
  methods: {
    createAlert() {
      alert('You create one project')
      this.$modal.hide('createNewProj')
    },
    cancelCreate() {
      this.$modal.hide('createNewProj')
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
    margin-top: 30px;
  }
  .myheading {
    margin: 3px 0 !important;
  }
  .exit-btn {
    font-size: 25px;
    padding: 5px;
    color: #313233
  }
  .exit-btn:hover{
    color: #3fb0ac
  }
</style>
