<template>
    <div class="col-md-12" v-if="users">
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
            <tbody v-if="users.length > 0">
                <tr v-for="user in users" :key="user.id">
                    <td><avatar :username="user.name" :size="40"></avatar></td>
                    <td>{{user.badgeID}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td> <a class="btn-remove" @click="showDialogModal">remove</a></td>
                </tr>
            </tbody>
            <tbody v-else>
                <p class="notice"> No member available in this team! Please choose member from member list</p>
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
.notice {
  padding: 10px;
  font-size: 14px;
  font-style: italic;
  color: rgb(238, 61, 61)
}
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