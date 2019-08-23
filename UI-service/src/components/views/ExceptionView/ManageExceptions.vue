<template>
<!-- still in development -->

  <section class="content">
    <div class="holder">
      <div class="createExcept">
        <!-- testing -->
          <p>Start Date : {{ exceptDate.start }}</p>
          <p>End Date : {{ exceptDate.end }}</p>
        <!-- testing -->

          <h4 class="myheading">Tittle: </h4>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-fw fa-calendar-plus-o"></i></span>
            <input class="form-control" v-model="exceptDate.tittle" placeholder="Enter tittle" type="text">      
          </div>
          <h4 class="myheading">Date range: </h4>
          <div class="input-group">
            <DateRangePicker @selected="onDateSelected" i18n="EN"></DateRangePicker>
          </div>
      </div>
      <!-- button add -->
      <div class="btn-spacing">
        <button
          type="submit"
          v-bind:class="'btn btn-info btn-lg'">
          Add exception</button>
      </div>
      <ExceptionItem :exceptDate="exceptDate"></ExceptionItem>
      <div class="btn-spacing">
        <button
          type="submit"
          v-bind:class="'btn btn-info btn-lg'">
          Add exception</button>
      </div>
    </div>
  </section>  
</template>


<script>
import DateRangePicker from 'vue-rangedate-picker'
import ExceptionItem from './ExceptionItem'
export default {
  name: 'manageExceptions',
  components: {
    ExceptionItem,
    DateRangePicker
  },
  data() {
    return {
      exceptDate: {
        tittle: '',
        startDate: '',
        endDate: ''
      }
    }
  },
  methods: {
    onDateSelected(daterange) {
      this.exceptDate = daterange
    }
  }
}
</script>
<style scoped>

.btn-spacing {
  margin-bottom: 20px;
  text-align: center  
}
.holder {
  padding-right: 100px;
  padding-left: 100px
}
p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

i {
  float: right;
  cursor: pointer;
}
.createExcept {
  margin: 0 200px 30px 200px
}
</style>
