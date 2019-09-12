<template>
    <div class="col-md-12">
          <!-- /.box-header -->
          <div class="box box-body no-padding table-responsive">
            <table class="table table-hover">
            <thead>
                  <th>Member</th>
                  <th>Badge ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Remove</th>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td><avatar :username="user.name" :size="40"></avatar></td>
                    <td>{{user.badgeID}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td> <a class="btn-remove" @click="showDialogModal">remove</a></td>
                    </tr>
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
      <v-dialog></v-dialog>
    </div>
</template>
<script>
import Avatar from 'vue-avatar'

export default {
    name: 'team-table',
    props: ['users'],
    components: { Avatar },
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
table {
  border-radius: 10px;
  font-size: 16px !important;
}
</style>