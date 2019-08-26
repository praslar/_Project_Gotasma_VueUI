<template>
<!-- still in development -->

  <section class="content">
    <!-- testing -->
    <h5>Start Date : {{ exceptDate.exDate[0] }}</h5>
    <h5>End Date : {{ exceptDate.exDate[1] }}</h5>
    <!-- testing -->
    <h1>Still in development but can test if you want</h1>
    <div class="holder">
      <div class="createExcept">
          <h4 class="myheading">Tittle: </h4>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-fw fa-calendar-plus-o"></i></span>
            <input class="form-control" v-model="exceptDate.tittle" placeholder="Enter tittle" type="text">      
          </div>
          <h4 class="myheading">Date range: </h4>
            <datepicker v-model="exceptDate.exDate" range appendToBody lang="en" format="DD/MM/YYYY"></datepicker>
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
import datepicker from 'vue2-datepicker'
import ExceptionItem from './ExceptionItem'
export default {
  name: 'manageExceptions',
  components: {
    ExceptionItem,
    datepicker
  },
  data() {
    return {
      exceptDate: {
        tittle: '',
        exDate: ''
      }
    }
  },
  shortcuts: [{
      onClick: () => {
        this.exceptDate.exDate = [ new Date(), new Date() ]
        }
    }
  ]
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
