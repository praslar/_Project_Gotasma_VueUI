<template>
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <!-- /.box-header -->
          <div class="box-body no-padding table-responsive">
            <table class="table table-hover">
            <thead>
                  <th>User</th>
                  <th>Badge ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Remove</th>
            </thead>
            <tbody>
                <tr v-for="team in team" :key="team.badgeID">
                    <td>  <img :src="team.avatar" class="user-image" alt="User Image" /> </td>
                    <td>{{team.badgeID}}</td>
                    <td>{{team.name}}</td>
                    <td>{{team.email}}</td>
                    <td> <a class="btn-remove" @click="showDialogModal">remove</a></td>
                    </tr>
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
      </div>
      <v-dialog></v-dialog>
    </div>
</template>
<script>

export default {
    name: 'team-table',
    props: ['team'],
    methods: {
    showDialogModal() {
      this.$modal.show('dialog', {
        title: 'Are you sure?',
        text: 'Do you want to remove this user?',
        buttons: [
          {
            title: 'OK',
            default: true,
            handler: () => {
              alert('OK You have remove user')
              this.$modal.hide('dialog')
            }
          },
          {
            title: 'CANCEL',
            handler: () => {
              this.$modal.hide('dialog')
            }
          }
        ]
      })
    }
    }
}
</script>

<style scoped>
.btn-remove:hover{
  cursor: pointer
}
table>thead>th{
  padding: 10px
}
img{
  width: 40px;
}
td a {
  min-width: 30px !important;
  width: 30px;
  height: 40px
}
td a i{
  padding: 0px;
  margin-bottom: 10px;
}
table {
  border-radius: 10px;
  font-size: 18px !important;
}
</style>