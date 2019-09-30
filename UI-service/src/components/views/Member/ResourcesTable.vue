<template>
            <div class="col-sm-12 table-responsive" v-if="this.showTableResources && availableResources">
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
                  <tr class="even" role="row" v-for="resource of availableResources" :key="resource.id">
                    <td>{{resource.name}}</td>
                    <td>{{resource.email}}</td>
                    <td>
                    <div class="external-event bg-yellow" v-for="project in getProjectsOfResource(resource.id)" :key="project.projectID">{{project.name}}</div>
                    </td>
                    <td >
                        <a class="btn" @click="addResource(resource)" ><i class="fa fa-user-plus special"></i></a>           
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

require('datatables.net-bs')

export default {
  name: 'resource-table',
  props: ['showTableResources', 'availableResources', 'projects', 'currentProject'],
  methods: {
    getProjectsOfResource(idResource) {
      let projectsName = []
      for (let i = 0; i < this.projects.length; i++) {
        let current = this.projects[i]
          for (let j = 0; j < current.users.length; j++) {
            if (idResource === current.users[j]) {
              projectsName.push(current.name)
              break
            }
          }
      }
      return projectsName
    },
    addResource(resource) {
      this.$modal.show('dialog', {
        title: 'Are you sure?',
        text: 'Do you wish to add this member project?',
        buttons: [
          {
            title: 'OK',
            default: true,
            handler: () => {
                this.currentProject.users.push(resource.id)
                let addInfo = {
                    id: this.currentProject.id,
                    newInfo: this.currentProject.users
                }
                resource.projects.push(this.currentProject.id)
                // this.$store.dispatch('addResourceToProject', addInfo)
                    addInfo.id = resource.id
                    addInfo.newInfo = resource.projects
                    console.log(addInfo)
                // this.$store.dispatch('addProjectToResource', addInfo)
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
  }
}
</script>
<style scoped>
.special{
    font-size: 20px !important;
    color:green;
}
table{
  font-size: 16px !important
}
.notice {
  color: red;
}
</style>
