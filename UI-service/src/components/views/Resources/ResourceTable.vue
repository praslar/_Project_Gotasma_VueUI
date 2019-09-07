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
                    >Bagde ID</th>
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
                    <td class="sorting_1">
                      {{resource.badgeID}}
                    </td>
                    <td>{{resource.name}}</td>
                    <td>{{resource.email}}</td>
                    <td>
                    <div class="external-event bg-yellow" v-for="project in resource.projects" :key="project.projectID">{{project.name}}</div>
                    </td>
                    <td ><a class="btn btn-app" @click="$modal.show('newresource', {resource})"><i class="fa fa-edit"></i></a>
                        <a class="btn btn-app" @click="showDialogMember()"><i class="fa fa-remove"></i></a>           
                    </td> 
                  </tr>                        
                </tbody>
              </table>
            </div>
  <v-dialog/>
  </div> 
  </template>
<script>
import NewResource from './NewResource'
import $ from 'jquery'
require('datatables.net-bs')

export default {
  name: 'resource-table',
  props: ['resources'],
  components: {
    NewResource
  },
  methods: {
    showDialogMember() {
      this.$modal.show('dialog', {
        title: 'Are you sure?',
        text: 'Do you wish to delete this project',
        buttons: [
          {
            title: 'OK',
            default: true,
            handler: () => {
              alert('OK')
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
@import url("/static/js/plugins/datatables/dataTables.bootstrap.css");
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
}
.danger {
  width: 100%;
  position: relative;
  font-size: 14px
}
table{
  color: #242E35;
  border-radius: 10px;
  font-size: 16px !important
}
td a {
  min-width: 30px !important;
  width: 40px;
  height: 40px
}
td a i{
  padding: 0px;
  margin-bottom: 10px;
}
</style>
