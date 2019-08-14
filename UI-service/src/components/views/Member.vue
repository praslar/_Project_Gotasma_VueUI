<template>
  <section class="content">
    <div class="row center-block">
      <div class="header col-md-12">
        <span>Team and resources</span>
        <p>Here you manage people from all your projects. You can also invite new members by email. Depending on the rights granted, members can get different roles (work only on personal assigned tasks, edit projects, see costs and work with them).</p>
      </div>
      <div class="col-md-12" id="add-member">
        <div class="input-group">
        <input type="text" class=" col-md-12 form-control"  placeholder="Enter an email address of a person you want to invite"/>
        <span class="input-group-btn">
          <button type="button" class="btn btn-info btn-sm">Invite by email</button>
        </span>
       </div>
      </div>

      <table-member :user="user"></table-member>
    </div>
  </section>
</template>

<script>
import faker from 'faker'
import TableMember from './TableMember'
// Require needed datatables modules

export default {
  name: 'Member',
  components: {
    TableMember
  },
  computed: {
    user() {
      return {
        displayName: faker.name.findName(),
        avatar: faker.image.avatar(),
        roles: [faker.name.jobTitle(), faker.name.jobTitle()]
      }
    }
  }
}
</script>

<style>
/* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.

   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.

@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/

@import url("/static/js/plugins/datatables/dataTables.bootstrap.css");
.header span {
  font-size: 18px;
  color: #242E35;
  font-weight: bold;
}
.header p{
 font-size:14px;
 font-style: italic;
 color: #242E35;
 margin-bottom: 20px;
}
#add-member {
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
}
</style>
