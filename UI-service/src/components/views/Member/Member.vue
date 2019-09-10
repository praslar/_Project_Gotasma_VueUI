<template>
  <section class="content">
    <div class="row center-block">
      <div class="header col-md-12">
        <span>Team</span>
        <br>
        <button type="button" @click="showTableMember" class="btn btn-info pull-right special">Choose from member</button>
        <button type="button" @click="hideTableMember" class="btn btn-info pull-right special">Hide table</button>
        <i> Here you manage all your project members. You can choose from the already invited team members.</i>
      </div>  
      <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">     
      <resources-table></resources-table>
      </transition> 
      <member-table :users="project.users" ></member-table>     
    </div>
  </section>
</template>
<script>
import ResourcesTable from './ResourcesTable'
import MemberTable from './MemberTable'
import { mapState } from 'vuex'
// Require needed datatables modules

export default {
  name: 'member',
  props: ['id'],
  components: { ResourcesTable, MemberTable },
  created() {
    this.$store.dispatch('getProjectById', this.id)
  },
  computed: {
    ...mapState([
      'project'
    ])
  }
}
</script>

<style scoped>
.delete{
  font-size: 14px !important;
}
.center-block{
  height: 100%;
}
.content {
  padding: 60px;
}
.header span {
  font-size: 24px;
  color: #242e35;
  font-weight: bold;
}
.header p {
  font-size: 14px;
  font-style: italic;
  color: #242e35;
  margin-bottom: 20px;
}
.email{
  height: 46px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px
}
.special {
  margin: 10px; 
}

</style>
