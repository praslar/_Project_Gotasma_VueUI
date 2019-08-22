<template>
  <modal name="createNewProj" transition="pop-out" :height=600 :width=500 :draggable="true" :clickToClose="false">
    <div class="modal-box">
      <div class="partition">
        <div class="partition-title">CREATE NEW PROJECT</div>
        <div class="partition-form">
          <h4 class="myheading">Name of project: </h4>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-fw fa-check"></i></span>
              <input id="myInput" class="form-control" placeholder="Name of project" type="text">      
            </div>
          <h4 class="myheading">Effort: </h4>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-fw fa-calendar-check-o"></i>
            </span>
            <select class="form-control" id="myInput">
              <option>40 hours/week</option>
              <option>38 hours/week</option>
              <option>36 hours/week</option>
              </select>
          </div>
          <h4 class="myheading">Start date: </h4>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-fw fa-calendar"></i>
            </span>
            <datepicker format="MMM/DD/YYYY" id="dateInput"></datepicker>
          </div>
          <div class="button-set">
            <button class="create-btn" @click="createAlert">Create</button>
            <button class="cancel-btn pull-right" @click="cancelCreate">Cancel</button>
          </div>
        </div>
      </div>
    </div>
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
  .modal-box .partition-form .button-set :hover {
      border-color: rgb(0, 128, 255);
      color: #0080ff;
  }
  .modal-box .partition-form .button-set .cancel-btn:hover {
      border-color: rgb(255, 0, 0);
      color: #ff0000;
  }
  .modal-box .button-set {
    margin-top: 30px;
  }
  .myheading {
    margin: 3px 0 !important;
  }
</style>
