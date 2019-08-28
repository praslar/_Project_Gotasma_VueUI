<template>
  <li>
    <router-link :to="'/project/' + idProject + '/history'">
        <a title="History (snapshots list)" class="myIcon">
          <i class="fa fa-history"></i>
        </a>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'buttonHistory',
  props: ['idProject']
}
</script>

<style scoped>
.myIcon {
  color:white;
  margin: 0 5px 0 5px
}
</style>

