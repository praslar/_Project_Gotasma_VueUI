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
      <table-member class="choose-member" v-if="chooseFromMember" :members="members" :chooseFromMember="chooseFromMember"></table-member>
      <team-table :team="team"></team-table>
    </div>
  </section>
</template>
<script>
import TableMember from './TableMember'
import TeamTable from './TeamTable'

import * as Services from '../../../services'
// Require needed datatables modules

export default {
  name: 'member',
  props: ['id'],
  data() {
    return {
      team: [],
      members: [],
      chooseFromMember: false
    }
  },
  methods: {
    showTableMember() {
      this.chooseFromMember = true
    },
    hideTableMember() {
      this.chooseFromMember = false
    }
  },
  components: { TableMember, TeamTable },
  created() {
    //  getMemberInfo by ID project
      Services.getMemberOfProject()
      .then((response) => {
        this.team = response.members
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
