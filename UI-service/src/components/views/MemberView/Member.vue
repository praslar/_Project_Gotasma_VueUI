<template>
  <section class="content">
    <div class="row center-block">
      <div class="header col-md-12">
        <span>Team and resources</span> <br>
          <button type="button" @click="$modal.show('NewMember')" class="btn btn-info pull-right special">Invite new member</button>
        <i>Here you manage people from all your projects. You can also invite new members by email.</i>
              
      </div>
            <new-member :memberData="memberData"></new-member>
            <table-member :members="members"></table-member>
      </div>
  </section>
</template>

<script>
import TableMember from './TableMember'
import NewMember from './NewMember'
import * as Services from '../../../services'
import $ from 'jquery'
require('datatables.net-bs')
// Require needed datatables modules

export default {
  name: 'member',
  components: {
    TableMember,
    NewMember
  },
  data() {
    return {
        memberData: {
          badgeID: '',
          name: '',
          email: '',
          avatar: []
       },
       members: []
    }
  },
created() {
    Services.getUsers()
      .then((response) => {
        this.members = response
        this.$nextTick(() => {
        $('#example1').DataTable()
      })
      })
      .catch(error => {
        console.log(error)
      })
    }
}
</script>
<style scoped>
@import url("/static/js/plugins/datatables/dataTables.bootstrap.css");

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
</style>
