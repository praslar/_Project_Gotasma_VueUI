<template>
  <section class="content">
    <div class="row center-block">
      <div class="header col-md-12">
        <span>Team</span>
        <p> Here you manage all your project members. You can choose from the already invited team members.</p>
      </div>
      <div class="col-md-12" id="add-member">
          <span class="input-group-btn">
            <button type="button" class="btn btn-info btn-lg">Choose from Team</button>
          </span>
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
</style>
</style>
