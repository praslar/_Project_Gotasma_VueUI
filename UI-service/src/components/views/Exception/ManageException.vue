<template>
  <section class="content">
    <div class="row center-block">
      <div class="header col-md-12">
        <div class="mySpacing">
          <span>Exceptions</span>
          <button
          type="submit"
          class="btn btn-lg btn-info pull-right special">
          Recalculated</button>
          <br />
          <i>Here you can manage exception date like Holiday, day-off, etc. The form below help you to create an exception.</i>
        </div>
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Create Exception Date</h3>
          </div>
          <!-- /.box-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="addException">
            <div class="box-body">
              <div class="form-group">
                <label for="exceptTittle">Tittle</label>
                <input
                  type="text"
                  class="form-control"
                  id="exceptTittle"
                  placeholder="Enter tittle"
                  name="Tittle"
                  v-validate="'required|min:5'" 
                  v-model="exceptDate.tittle"
<<<<<<< HEAD
                  :class="{ 'is-invalid': errors.has('Tittle') }"
                />
                <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
                  <div class="invalid-feedback" v-if="errors.has('Tittle')">{{ errors.first('Tittle')}}</div>
=======
                  :class="{ 'is-invalid':  errors.has('Tittle') }"
                />
                <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
                  <div class="invalid-feedback" v-if=" errors.has('Tittle')">{{ errors.first('Tittle')}}</div>
>>>>>>> 636b9742bb487598a648276b988b1c23639128c3
                </transition>
              </div>
              

              <div class="form-group">
                <label>Choose Date</label>
                <datepicker
                  v-model="exceptDate.date"
                  :editable="false"
                  range
                  appendToBody
                  lang="en"
                  format="DD/MMM/YYYY"
                  width="100%"
                  data-vv-name="Date"
                  v-validate="'required'"
<<<<<<< HEAD
                  :class="{ 'is-invalid': errors.has('Date') }"></datepicker>
                <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
                  <div class="invalid-feedback ontop special" v-if="errors.has('Date')">{{ errors.first('Date')}}</div>
=======
                  :class="{ 'is-invalid':  errors.has('Date') }"></datepicker>
                <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
                  <div class="invalid-feedback ontop special" v-if=" errors.has('Date')">{{ errors.first('Date')}}</div>
>>>>>>> 636b9742bb487598a648276b988b1c23639128c3
                </transition>
              </div>
            </div>
            <!-- /.box-body -->

            <div class="box-footer">
              <button type="submit" class="btn btn-info">Submit</button>
            </div>
          </form>
        </div>
        <h2>Exceptions</h2>
        <exception-item></exception-item>
      </div>
    </div>
  </section>
</template>


<script>
import moment from 'moment'
import datepicker from 'vue2-datepicker'
import ExceptionItem from './ExceptionItem'

export default {
  name: 'manageExceptions',
  components: {
    datepicker,
    ExceptionItem
  },
  data() {
    return {
      exceptDate: {
        tittle: '',
        date: ''
      }
    }
  },
   mounted() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case 'ADD_EXCEPTION':
          this.$store.dispatch('getExceptions')
          break
        case 'DELETE_EXCEPTION':
          this.$store.dispatch('getExceptions')
         break
      }
    })
  },
  methods: {
    addException() {
<<<<<<< HEAD
      if (this.exceptDate.date[0] != null && this.exceptDate.date[1] != null) {
=======
>>>>>>> 636b9742bb487598a648276b988b1c23639128c3
        this.$validator.validateAll().then(result => {
        if (result) {
          this.exceptDate.date[0] = moment(this.exceptDate.date[0]).valueOf()
          this.exceptDate.date[1] = moment(this.exceptDate.date[1]).valueOf()
          this.$store.dispatch('addExceptions', this.exceptDate)
        }
      })
  },
  shortcuts: [
    {
      onClick: () => {
        this.exceptDate.date = [new Date(), new Date()]
      }
    }
  ]
}
}
</script>

<style scoped>
.mySpacing {
  padding-bottom: 20px
}
.form-group {
  margin-bottom: 25px !important
}

.invalid-feedback{
  font-size: 12px;
  color: red;
  display: inline-block;
  z-index: 9;
  position: absolute;
}
.alert-in-enter-active {
  animation: bounce-in .5s;
}
.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}
.special{
  position: static;
  margin: 0px !important
}
</style>
