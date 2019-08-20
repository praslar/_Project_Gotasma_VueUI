<template>
  <section class="content">
    <div class="row center-block">
      <div class="header col-md-12">
        <span>Team and resources</span>
        <p>Here you manage people from all your projects. You can also invite new members by email. Depending on the rights granted, members can get different roles (work only on personal assigned tasks, edit projects, see costs and work with them).</p>
      </div>
      <div class="col-md-12" id="add-member">
        <div class="input-group">
          <input
            type="text"
            class="col-md-12 form-control"
            placeholder="Enter an email address of a person you want to invite"
          />
          <span class="input-group-btn">
            <button type="button" class="btn btn-info btn-sm">Invite by email</button>
          </span>
        </div>
      </div>
      <table-member></table-member>
    </div>
  </section>
</template>

<script>
import TableMember from './TableMember'
// Require needed datatables modules

export default {
  name: 'member',
  components: {
    TableMember
  }
}
</script>

<style>
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
