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
                  v-model="exceptDate.tittle"
                />
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
                ></datepicker>
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

    <!-- <div class="box box-success" v-for="(exception, index) in exceptions" :key="index">
      <div class="box-header with-border">
        <h3 class="box-title"> {{ exception.tittle }} </h3>
    
        <div class="box-tools pull-left">
          <button type="button" class="btn btn-box-tool">
            <i class="fa fa-times"></i>
          </button>
        </div>
      </div>

      <div class="box-body"> <p>From: {{ exception.exDate[0] }}</p></div>
      <div class="box-body"> <p>To: {{ exception.exDate[1] }}</p></div>    

    </div>-->
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
      exceptDate: {
        tittle: '',
        exDate: ''
      },
      exceptions: [
        { tittle: 'Day off 1', exDate: ['2/Sep/2019', '3/Sep/2019'] },
        { tittle: 'Day off 2', exDate: ['13/Sep/2019', '22/Sep/2019'] }
      ]
      // exceptions: []
    }
  },
  methods: {
    addException() {
      this.exceptions.push({
        tittle: this.exceptDate.tittle,
        exDate: this.exceptDate.exDate
      })
      // this.exceptions.push({ exception: this.exception })
      this.exceptDate.tittle = ''
      this.exceptDate.exDate = ''
      console.log(this.exceptions)
    }
  },
  shortcuts: [
    {
      onClick: () => {
        this.exceptDate.exDate = [new Date(), new Date()]
      }
    }
  ]
}
</script>
<style scoped>
.mySpacing {
  padding-bottom: 20px
}
</style>
