<template>
  <modal name="createNewProj" transition="pop-out" :height=450 :width=600 :draggable="true" :clickToClose="false">
    <a class="pull-right exit-btn" @click="cancelCreate"><i class="fa fa-close"/></a>
    <form action="" @submit.prevent="createAlert" >
      <div class="modal-box">
      <div class="partition">
        <div class="partition-title">CREATE NEW PROJECT</div>
        <div class="partition-form">
          <h4 class="myheading">Name of project: </h4>
          <h5 class="alertValidate" v-if="errors.has(project.name)">{{ errors.first(project.name)}}</h5>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-fw fa-check"></i></span>
              <input v-model="project.name" class="form-control" placeholder="Name of project" type="text" v-validate="'min:5'" >
              <p class="alertValidate" v-if="errors.has(project.name)">{{ errors.first(project.name)}}</p>
            </div>
          <h4 class="myheading">Effort: (hours/week)</h4>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-fw fa-calendar-check-o"></i>
            </span>
            <select class="form-control" v-model="project.effort">
              <option>40</option>
              <option>38</option>
              <option>36</option>
              </select>
          </div>
          <h4 class="myheading">Start date: </h4>
          <div>
            <datepicker v-model="project.startDate" appendToBody lang="en" ></datepicker>
          </div>
          <div class="button-set">
            <button class="create-btn">Create</button>
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
  name: 'NewProject',
  components: {
    datepicker
  },
  data() {
    return {
      project: {
        name: '',
        effort: '',
        startDate: ''
      }
    }
  },
  shortcuts: [{
      text: 'Today',
      onClick: () => {
        this.project.startDate = [ new Date(), new Date() ]
        }
    }
  ],
  methods: {
    createAlert() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert('You have created one project:    ' + JSON.stringify(this.project))
          this.$modal.hide('createNewProj')
          console.log(this.project)
        } else {
          alert('Not valid')
        }
      })
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
    margin-top: 60px;
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
  .alertValidate {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}
</style>
