<template>
  <div class="col-md-12 box box-body">
            <div class="col-sm-12 table-responsive">
              <table
                aria-describedby="resourcesTable_info"
                role="grid"
                id="resourcesTable"
                class="table   table-hover dataTable"
              >
                <thead>
                  <tr role="row">
                    <th
                      aria-label="Rendering engine: activate to sort column descending"
                      aria-sort="ascending"
                      style="width: 167px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="resourcesTable"
                      tabindex="0"
                      class="sorting_asc"
                    ></th>
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
                      aria-label="Platform(s): activate to sort column ascending"
                      style="width: 182px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="resourcesTable"
                      tabindex="0"
                      class="sorting"
                    >Email</th>
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
                  <tr class="even" role="row" v-for="resource of resources" :key="resource.badgeID">
                    <td>  <avatar :username="resource.name"></avatar></td>
                    <td>{{resource.name}}</td>
                    <td>{{resource.email}}</td>
                    <td>
                    <div class="external-event bg-yellow" v-for="project in resource.projects" :key="project.projectID">{{project.name}}</div>
                    </td>
                    <td >
                        <a class="btn btn-app" @click="showDialogAddresource(resource.id)" ><i class="fa fa-level-down special"></i></a>           
                    </td> 
                  </tr>                        
                </tbody>
              </table>
            </div>
  <v-dialog/>
  </div> 
  </template>
<script>
import $ from 'jquery'
import { mapState } from 'vuex'
import Avatar from 'vue-avatar'

require('datatables.net-bs')

export default {
  name: 'resource-table',
  components: {
    Avatar
  },
  methods: {
    showDialogAddresource(id) {
      this.$modal.show('dialog', {
        title: 'Are you sure?',
        text: 'Do you wish to add this member project?',
        buttons: [
          {
            title: 'OK',
            default: true,
            handler: () => {
              this.$store.dispatch('deleteResource', id)
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
  created() {
    this.$store.dispatch('getResources')
  },
  computed: {
   ...mapState([
     'resources'
   ])
  }
}
</script>
<style scoped>
.special{
    font-size: 24px !important;
    color:green
}
table{
  font-size: 16px !important
}
</style>
