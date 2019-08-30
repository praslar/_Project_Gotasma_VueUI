<template>
  <section class="content">
    <div class="row center-block">
      <div class="header col-md-12">
        <div class="mySpacing">
          <span>Exceptions</span>
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
                />
                <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
                  <div class="invalid-feedback" v-if="errors.has('Tittle')">{{ errors.first('Tittle')}}</div>
                </transition>
              </div>
              

              <div class="form-group">
                <label>Choose Date</label>
                <datepicker
                  v-model="exceptDate.exDate"
                  range
                  appendToBody
                  lang="en"
                  format="DD/MMM/YYYY"
                  width="100%"
                  data-vv-name="Date"
                  v-validate="'required'"
                ></datepicker>
                <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
                  <div class="invalid-feedback ontop" v-if=" errors.has('Date')">{{ errors.first('Date')}}</div>
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
        
        <ExceptionItem :exceptions="exceptions"></ExceptionItem>
      </div>
    </div>
  </section>
</template>


<script>
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
      // submitted: false,
      exceptDate: {
        tittle: '',
        exDate: ''
      },
      exceptions: [
        { tittle: 'Day off 1', exDate: ['2019-04-01T23:28:56.782Z', '2019-04-02T23:28:56.782Z'] },
        { tittle: 'Day off 2', exDate: ['2019-09-01T23:28:56.782Z', '2019-09-01T23:28:56.782Z'] }
      ]
    }
  },
  methods: {
    addException() {
      // this.submitted = true
      this.$validator.validateAll().then(result => {
        if (result) {
          this.exceptions.push({
          tittle: this.exceptDate.tittle,
          exDate: this.exceptDate.exDate
        })
          // this.exceptions.push({ exception: this.exception })
          this.exceptDate.tittle = ''
          this.exceptDate.exDate = ''
          // console.log(this.exceptions)
        }
      })
  },
  shortcuts: [
    {
      onClick: () => {
        this.exceptDate.exDate = [new Date(), new Date()]
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
</style>
