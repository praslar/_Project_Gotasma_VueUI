<template>
  <section class="content">
    <div class="btn-spacing">
        <button
          type="submit"
          v-bind:class="'btn btn-info btn-lg'">
          Add exception</button>
    </div>
    <div class="holder">
      <form @submit.prevent="addName">
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
        <!-- <p class="alert" v-if="errors.has('nickname')">{{ errors.first('nickname')}}</p> -->
        </transition>
      </form>
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <!-- <li v-for="(data, index) in nicknames" :key="index">
          {{data.nickname}}
          <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li> -->
          <li></li>
        </transition-group>
      </ul>

      <p>These are the names that you have.</p>
    </div>
  </section>  
</template>


<script>
export default {
  name: 'manageExceptions'
}
</script>
<style scoped>
.btn-spacing {
  margin-bottom: 20px;
  text-align: center  
}
.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}

.alert-in-enter-active {
  animation: bounce-in .5s;
}
.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

i {
  float: right;
  cursor: pointer;
}
</style>
