<template>
  <section class="content">
    <div class="row center-block">
      <div class="header col-md-12">
        <span>Team and resources</span>
        <p>Here you manage people from all your projects. You can also invite new members by email.</p>
      </div>
      <div class="col-md-12" id="add-member">
        <div class="input-group">
          <input
            type="email"
            class="col-md-12 form-control email"
            placeholder="Enter an email address of a person you want to invite"
            id="email"
           v-model="userData.email"
          />
          <span class="input-group-btn">
            <button @click="$modal.show('NewMember')" type="button" class="btn btn-info btn-lg">Invite by email</button>
            <new-member :userData="userData"></new-member>
          </span>
        </div>
      </div>
      <table-member></table-member>
    </div>
  </section>
</template>

<script>
import TableMember from './TableMember'
import NewMember from './NewMember'
// Require needed datatables modules

export default {
  name: 'member',
  components: {
    TableMember,
    NewMember
  },
  data() {
    return {
        userData: {
          badgeID: '',
          name: '',
          email: '',
          avatar: []
       }
    }
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
}.email{
  height: 46px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px
}
</style>
