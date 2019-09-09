<template>
    <div class="box">
      <div class="box-body">
        <div class="dataTables_wrapper form-inline dt-bootstrap" id="tableProjects_wrapper">
          <div class="row">
            <div class="col-sm-12 table-responsive">
              <table
                aria-describedby="tableProjects_info"
                role="grid"
                id="tableProjects"
                class="table table-bordered table-hover dataTable"
              >
                <thead>
                  <tr role="row">
                    <th
                      aria-label="Rendering engine: activate to sort column descending"
                      aria-sort="ascending"
                      style="width: 130px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="tableProjects"
                      tabindex="0"
                      class="sorting_asc"
                    >Project name</th>
                    <th
                      aria-label="Browser: activate to sort column ascending"
                      style="width: 20px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="tableProjects"
                      tabindex="0"
                      class="sorting"
                    >Number of members</th>
                    <th
                      aria-label="Browser: activate to sort column ascending"
                      style="width: 10px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="tableProjects"
                      tabindex="0"
                      class="sorting"
                    >Max effort (hours/week)</th>
                    <th
                      aria-label="Browser: activate to sort column ascending"
                      style="width: 150px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="tableProjects"
                      tabindex="0"
                      class="sorting"
                    >Start date</th>
                    <th
                      aria-label="Engine version: activate to sort column ascending"
                      style="width: 150px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="tableProjects"
                      tabindex="0"
                      class="sorting"
                    >Last change (Last Update)</th>
                    <th
                      aria-label="Engine version: activate to sort column ascending"
                      style="width: 80px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="tableProjects"
                      tabindex="0"
                      class="sorting"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="even" role="row" v-for="project of projects" :key="project.id" >
                    <td class="sorting_1">
                      <router-link :to="'../project/' + project.id ">
                          <a>{{ project.name }}</a>
                      </router-link></td>
                    <td>{{ project.users | count }}</td>
                    <td>{{ project.effort }}</td>
                    <td>{{ project.startDate | momentNormalDate }}</td>
                    <td>{{ project.updateDate | momentDetailDate }}</td>
                    <td>
                      <a class="btn btn-app del-btn" title="Delete project" @click="showDialog(project.id)"><i class="fa fa-remove"></i></a>
                      <a class="btn btn-app star-btn" title="Highlight project" ><i class="fa fa-star"></i></a>
                    </td>
                  </tr>
                </tbody>  
                <tfoot>
                  <tr>
                    <th colspan="1" rowspan="1">Project name</th>
                    <th colspan="1" rowspan="1">Number of members</th>
                    <th colspan="1" rowspan="1">Max effort</th>
                    <th colspan="1" rowspan="1">Start date</th>
                    <th colspan="1" rowspan="1">Last change (Last Update)</th>
                    <th colspan="1" rowspan="1"></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
      <v-dialog/>
    </div>
</template>

<script>
import $ from 'jquery'
require('datatables.net-bs')

export default {
  name: 'tableProject',
  props: ['projects'],
  mounted() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case 'ADD_PROJECT':
          this.$store.dispatch('getProjects')
          break
        case 'DELETE_PROJECT':
          this.$store.dispatch('getProjects')
         break
      }
    })
  },
  methods: {
    showDialog(id) {
      this.$modal.show('dialog', {
        title: 'Are you sure?',
        text: 'Do you wish to delete?',
        buttons: [
          {
            title: 'OK',
            default: true,
            handler: () => {
              this.$store.dispatch('deleteProject', id)
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
        $('#tableProjects').DataTable()
      })
  }
}
</script>

<style scoped>
table {
  color: #242e35;
  font-size: 16px !important
}
td a {
  min-width: 30px !important;
  width: 40px;
  height: 40px
}
.del-btn {
  color: #c70707c2
}
.star-btn {
  color: #ffca00
}
</style>