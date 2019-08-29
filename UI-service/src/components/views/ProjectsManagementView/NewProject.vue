<template>
  <modal name="createNewProj" transition="pop-out" :height=450 :width=600 :draggable="true" :reset="true" :clickToClose="false">
    <a class="pull-right exit-btn" @click="cancelCreate"><i class="fa fa-close"/></a>
    <form action="" @submit.prevent="createAlert" >
      <div class="modal-box">
      <div class="partition">
        <div class="partition-title">CREATE NEW PROJECT</div>
        <div class="partition-form">

          <h4 class="myheading">Name of project: </h4>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-fw fa-check"></i></span>
              <input v-model="project.name" 
                      class="form-control" 
                      placeholder="Name of project" 
                      type="text" 
                      v-validate="'required|min:5'" 
                      name="Project Name" 
                      :class="{'is-invalid': submitted && errors.has('Project Name')}">
            </div>
            <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
              <h6 class="alertValidate pull-right" v-if=" submitted && errors.has('Project Name')">{{ errors.first('Project Name')}}</h6>
            </transition>

          <h4 class="myheading">Effort: (hours/week)</h4>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-fw fa-calendar-check-o"></i>
            </span>
            <select class="form-control"
            v-model="project.effort" 
            name="Effort" 
            v-validate="'required'" 
            :class="{'is-invalid': submitted && errors.has('Effort')}" >
              <option value="" disabled selected hidden>Select your option</option>
              <option>40</option>
              <option>42</option>
              <option>38</option>
              <option>36</option>
              </select>
          </div>
          <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
              <h6 class="alertValidate pull-right" v-if=" submitted && errors.has('Effort')">{{ errors.first('Effort')}}</h6>
          </transition>

          <h4 class="myheading">Start date: (DD/MMM/YYYY)</h4>
          <div>
            <datepicker v-model="project.startDate" appendToBody 
            lang="en" 
            format="DD/MMM/YYYY" 
            width="100%"
            data-vv-name="Date"
            v-validate="'required'"
            :editable="false">
            </datepicker>
          </div>
          <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
              <h6 class="alertValidate pull-right ontop" v-if=" submitted && errors.has('Date')">{{ errors.first('Date')}}</h6>
          </transition>

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
import * as Services from '../../../services'

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
      },
      submitted: false
    }
  },
  shortcuts: [{
      onClick: () => {
        this.project.startDate = [ new Date(), new Date() ]
        }
    }
  ],
  methods: {
    createAlert() {
      this.submitted = true
      this.$validator.validateAll().then(result => {
        if (result) {
          Services.addProj(this.project)
          .then(response => {
            alert(JSON.stringify(response) + '\nYou have created one project:    ' + JSON.stringify(this.project))
          })
          .catch(error => {
            console.log(error)
          })
          // alert('You have created one project:    ' + JSON.stringify(this.project))
          this.$modal.hide('createNewProj')
        } else {
          alert('Invalid input')
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
  color: red;
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 10px 5px 5px 5px;
  margin-top: -20px;
}
.alert-in-enter-active {
  animation: bounce-in .5s;
}
.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}
.ontop {
  padding-top: 19px;
}
</style>
