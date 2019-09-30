<template>
    <div class="col-md-12" v-if="resources">
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
            <tbody v-if="resources.length > 0">
                <tr v-for="resource in resources" :key="resource.id">
                    <td><avatar :username="resource.name" :size="40"></avatar></td>
                    <td>{{resource.badgeID}}</td>
                    <td>{{resource.name}}</td>
                    <td>{{resource.email}}</td>
                    <td> <a class="btn-remove" @click="showDialogModal(resource.id, projectId)">remove</a></td>
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
    props: ['resources'],
    components: { Avatar },
    methods: {
    showDialogModal(userId, projectId) {
      // let resourceCurrentProjects = []
      this.$modal.show('dialog', {
        title: 'Are you sure?',
        text: 'Do you want to remove this user?',
        buttons: [
          {
            // title: 'OK',
            // default: true,
            // handler: () => {
            //   this.users.splice(this.users.findIndex(deleteUsers => deleteUsers.id === userId), 1)
            //   let info = {
            //       projectId: this.projectId,
            //       users: this.users
            //   }
            //   for (let i = 0; i < this.resources.length; i++) {
            //       if (this.resources[i].id === userId) {
            //         resourceCurrentProjects = this.resources[i].projects
            //         break
            //       }
            //   }
            //   resourceCurrentProjects.splice(resourceCurrentProjects.findIndex(deleteProject => deleteProject.id === projectId), 1)
            //   let projectOfResourceInfo = {
            //       resourceId: userId,
            //       projects: resourceCurrentProjects
            //   }
            //   this.$store.dispatch('deleteProjectofResource', projectOfResourceInfo)
            //   this.$store.dispatch('deleteUserToProject', info)
            //   this.$modal.hide('dialog')
            // }
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