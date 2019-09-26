<template>
  <modal name="createNewProj" transition="pop-out" height="500" :width=500 
  :draggable="true" 
  :reset="true" 
  :clickToClose="false" 
  @before-open="beforeOpen">
    <a class="pull-right exit-btn" @click="cancelCreate"><i class="fa fa-close"/></a>
    <form action="" @submit.prevent="createProject" >
      <div class="modal-box">
      <div class="partition">
        <div class="partition-title"><i class="fa fa-fw fa-edit"></i>CREATE NEW PROJECT</div>
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
                      :class="{'is-invalid':submitted && errors.has('Project Name')}">
            </div>
            <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
              <div class="invalid-feedback" v-if="submitted && errors.has('Project Name')">{{ errors.first('Project Name')}}</div>
            </transition>

  
            <h4 class="myheading">Working day: </h4>
            <div class="input-group col-xs-12">
              <span class="input-group-addon"><i class="fa fa-fw fa-calendar"></i></span>
                  <multiselect 
                      name="workingDays"
                      v-model="project.workingDays"
                      :class="{ 'is-invalid': errors.has('workingDays') }" 
                      :options="dayOfWeek"
                      placeholder="Choose working day" 
                      v-validate="'required'"
                      :multiple="true"
                      :close-on-select="false"
                      :clear-on-select="false"
                      :preserve-search="true"
                      label="name"
                      track-by="name"
                      :preselect-first="true"
                      :max-height="150"
                    >
                  </multiselect>
            </div>
          
          <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
              <div class="invalid-feedback" v-if="submitted && errors.has('workingDays')">{{ errors.first('workingDays')}}</div>
          </transition>

          <h4 class="myheading">Start date: (MMM/DD/YYYY)</h4>
          <div>
            <datepicker v-model="project.startDate" 
            appendToBody 
            lang="en" 
            format="MMM/DD/YYYY" 
            width="100%"
            data-vv-name="Start Date"
            v-validate="'required'"
            :class="{'is-invalid':submitted && errors.has('Start Date')}"
            :editable="false">
            </datepicker>
          </div>
          <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
              <div class="invalid-feedback ontop" v-if="submitted && errors.has('Start Date')">{{ errors.first('Start Date')}}</div>
          </transition>

          <div class="button-set">
            <button>Create</button>
          </div>
        </div>
      </div>
    </div>
    </form>
  </modal>
</template>
<script>
import datepicker from 'vue2-datepicker'
import Multiselect from 'vue-multiselect'

export default {
  name: 'NewProject',
  components: {
    datepicker, Multiselect
  },
  data() {
    return {
      submitted: false,
      project: {
        name: '',
        effort: '',
        startDate: '',
        updateDate: '',
        tasks: [],
        users: [],
        workingDays: []
      },
      dayOfWeek: [{
          name: 'Monday',
          value: '1'
        },
        {
          name: 'Tuesday',
          value: '2'
        },
        {
          name: 'Wednesday',
          value: '3'
        },
        {
          name: 'Thursday',
          value: '4'
        },
        {
          name: 'Friday',
          value: '5'
        },
        {
          name: 'Staturday',
          value: '6'
        },
        {
          name: 'Sunday',
          value: '0'
        }]
    }
  },
  shortcuts: [{
      onClick: () => {
        this.project.startDate = [ new Date(), new Date() ]
        }
    }
  ],
  methods: {
    createProject() {
      this.submitted = true
      this.$validator.validateAll()
      .then(result => {
        if (result) {
          this.project.startDate = (this.project.startDate).valueOf()
          this.$store.dispatch('addProject', this.project)
          this.$modal.hide('createNewProj')
        } else {
          alert('invalid Input')
        }
      })
      .catch(error => {
        console.log(error)
      })
    },
    beforeOpen() {
        let d = new Date()
        d.setHours(0, 0, 0, 0)
        let n = d.valueOf()
        this.project.name = ''
        this.project.effort = ''
        this.project.startDate = ''
        this.project.updateDate = n
        this.project.tasks = [{
          id: 1,
          label: 'Welcome the Coffee Cat Project',
          user: 'Coffee Cat',
          start: n,
          duration: 0,
          type: 'project',
          progress: 0
        }]
        this.project.users = []
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
      font-size: 18px;
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
    margin-top: 50px;
  }
  .myheading {
    margin: 5px 0 !important;
    padding-top: 8px !important
  }
  .exit-btn {
    font-size: 15px;
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
