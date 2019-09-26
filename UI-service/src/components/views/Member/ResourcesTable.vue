<template>
            <div class="col-sm-12 table-responsive  " v-if="this.showTableResources && resources">
              <table
                aria-describedby="resourcesTable_info"
                role="grid"
                id="resourcesTable"
                class="table table-striped dataTable box box-body"
              >
                <thead>
                  <tr role="row">
                    <th
                      aria-label="Browser: activate to sort column ascending"
                      style="width: 207px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="resourcesTable"
                      tabindex="0"
                      class="sorting"
                    >Full Name</th>
                    <th
                      aria-label="Browser: activate to sort column ascending"
                      style="width: 207px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="resourcesTable"
                      tabindex="0"
                      class="sorting"
                    >Email Name</th>
                    <th
                      aria-label="Engine version: activate to sort column ascending"
                      style="width: 142px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="resourcesTable"
                      tabindex="0"
                      class="sorting"
                    >Current Projects</th>
                    <th 
                      aria-label="CSS grade: activate to sort column ascending"
                      style="width: 101px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="resourcesTable"
                      tabindex="0"
                      class="sorting"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="even" role="row" v-for="resource of resourcesCanChoose" :key="resource.badgeID">
                    <td>{{resource.name}}</td>
                    <td>{{resource.email}}</td>
                    <td>
                    <div class="external-event bg-yellow" v-for="project in resource.projects" :key="project.projectID">{{project.name}}</div>
                    </td>
                    <td >
                        <a class="btn" @click="showDialogAddresource(resource, idProject)" ><i class="fa fa-user-plus special"></i></a>           
                    </td> 
                  </tr>                        
                </tbody>
              </table>
              <i class="notice">If data in table wasn't available, please go back to the project dashboard to load the data</i>
                <v-dialog/>
            </div>
  </template>
<script>
import $ from 'jquery'
import { mapState } from 'vuex'

require('datatables.net-bs')

export default {
  name: 'resource-table',
  props: ['showTableResources', 'users', 'idProject'],
  data() {
    return {
      resourcesCanChoose: {}
    }
  },
  methods: {
    showDialogAddresource(resource, id) {
      let pickedMember = {
          id: resource.id,
          badgeID: resource.badgeID,
          name: resource.name,
          email: resource.email
      }
      this.$modal.show('dialog', {
        title: 'Are you sure?',
        text: 'Do you wish to add this member project?',
        buttons: [
          {
            title: 'OK',
            default: true,
            handler: () => {
              this.users.push(pickedMember)
              let info = {
                  projectId: id,
                  users: this.users
              }
              this.$store.dispatch('addUserToProject', info)
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
  },
  updated() {
      this.$nextTick(() => {
        $('#resourcesTable').DataTable()
      })
  },
  computed: {
   ...mapState([
     'resources'
   ])
  },
  created() {
    let usersId = []
    if (this.resources.length === 0) {
       this.$store.dispatch('getResources')
    }
    if (this.users !== undefined) {
      this.users.forEach(element => {
        usersId.push(element.id)
      })
        this.resourcesCanChoose = this.resources.filter(resource => { return usersId.indexOf(resource.id) === -1 })
    }
  }
}
</script>
<style scoped>
.special{
    font-size: 20px !important;
    color:green;
    margin-left: 30px
}
table{
  font-size: 16px !important
}
.notice {
  color: red;
}
</style>
