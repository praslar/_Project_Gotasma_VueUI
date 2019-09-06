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
      <team-table :team="team"></team-table>   
      <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">     
      <resource-table class="choose-member" v-if="chooseFromMember" :projectID="projectID" :members="members" :chooseFromMember="chooseFromMember"></resource-table>
      </transition>   
    </div>
  </section>
</template>
<script>
import ResourceTable from '../Resources/ResourceTable'
import TeamTable from './TeamTable'
import $ from 'jquery'

import * as Services from '../../../services'
// Require needed datatables modules

export default {
  name: 'member',
  props: ['id'],
  data() {
    return {
      team: [],
      members: [],
      projectID: '',
      chooseFromMember: false
    }
  },
  methods: {
    showTableMember() {
      this.chooseFromMember = true
              this.$nextTick(() => {
        $('#example1').DataTable()
      })
    },
    hideTableMember() {
      this.chooseFromMember = false
    }
  },
  components: { ResourceTable, TeamTable },
  created() {
    //  getMemberInfo by ID project
      Services.getMemberOfProject()
      .then((response) => {
        this.team = response.members
        this.projectID = response.projectID
      })
      .catch(error => {
        console.log(error)
      })
      Services.getUsers()
      .then((response) => {
        this.members = response
      })
      .catch(error => {
        console.log(error)
      })
    }
}
</script>

<style>
@import url("/static/js/plugins/datatables/dataTables.bootstrap.css");
.choose-member table {
  font-size: 12px !important;
}
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
table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:after {
  font-family: "FontAwesome";
}

table.dataTable thead .sorting:after {
  content: "\f0dc";
}

table.dataTable thead .sorting_asc:after {
  content: "\f0dd";
}

table.dataTable thead .sorting_desc:after {
  content: "\f0de";
}.email{
  height: 46px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px
}
.special {
  margin: 10px; 
}

</style>
