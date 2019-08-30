<template>
    <div class="box">
      <div class="box-body">
        <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
          <div class="row">
            <div class="col-sm-12 table-responsive">
              <table
                aria-describedby="example1_info"
                role="grid"
                id="example1"
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
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting_asc"
                    >Project name</th>
                    <th
                      aria-label="Browser: activate to sort column ascending"
                      style="width: 20px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    >Number of members</th>
                    <th
                      aria-label="Browser: activate to sort column ascending"
                      style="width: 10px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    >Max effort (hours/week)</th>
                    <th
                      aria-label="Browser: activate to sort column ascending"
                      style="width: 150px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    >Start date</th>
                    <th
                      aria-label="Engine version: activate to sort column ascending"
                      style="width: 150px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    >Last change (Last Update)</th>
                    <th
                      aria-label="Engine version: activate to sort column ascending"
                      style="width: 100px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="even" role="row" v-for="project of projects" :key="project.projectID" >
                    <td class="sorting_1">{{ project.name }}</td>
                    <td>{{ project.numberOfMembers }}</td>
                    <td>{{ project.effort }}</td>
                    <td>{{ project.startDate | momentNormalDate }}</td>
                    <td>{{ project.updateDate | momentDetailDate }}</td>
                    <td>
                      <router-link :to="projectRoute + project.projectID ">
                          <a class="btn btn-app" title="View this project" ><i class="fa fa-reply"></i></a>
                      </router-link>
                      <a class="btn btn-app del-btn" title="Delete project" @click="showDialog"><i class="fa fa-remove"></i></a>
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
import * as Services from '../../../services'

require('datatables.net-bs')
require('datatables.net')

export default {
  name: 'tableProject',
  created() {
    Services.getProj()
    .then((response) => {
      this.projects = response
      this.$nextTick(() => {
      $('#example1').DataTable()
  })
    })
    .catch(error => {
      console.log(error)
    })
  },
   data: () => ({
    projects: [],
    projectRoute: '../project/'
  }),
  methods: {
    showDialog() {
      this.$modal.show('dialog', {
        title: 'Are you sure?',
        text: 'Do you wish to delete?',
        buttons: [
          {
            title: 'OK',
            default: true,
            handler: () => {
              alert('OK You have deleted')
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