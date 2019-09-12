<template>
            <div class="col-sm-12 table-responsive  " v-if="this.showTableResources">
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
                  <tr class="even" role="row" v-for="resource of resources" :key="resource.badgeID">
                    <td>{{resource.name}}</td>
                                      <td>{{resource.email}}</td>
                    <td>
                    <div class="external-event bg-yellow" v-for="project in resource.projects" :key="project.projectID">{{project.name}}</div>
                    </td>
                    <td >
                        <a class="btn" @click="showDialogAddresource(resource.id)" ><i class="fa fa-level-down special"></i></a>           
                    </td> 
                  </tr>                        
                </tbody>
              </table>
                <v-dialog/>
            </div>
  </template>
<script>
import $ from 'jquery'
import { mapState, mapGetters } from 'vuex'

require('datatables.net-bs')

export default {
  name: 'resource-table',
  props: ['showTableResources'],
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
   ]),
   ...mapGetters({
      chooseResources: 'chooseResources'
    })
  },
  created() {
    if (this.resources.length === 0) {
       this.$store.dispatch('getResources')
    }
  }
}
</script>
<style scoped>
.special{
    font-size: 20px !important;
    color:green
}
table{
  font-size: 16px !important
}
</style>
