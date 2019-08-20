<template>
  <!-- <div class="col-md-12"> -->
    <div class="box">
      <div class="box-body">
        <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
          <div class="row">
            <div class="col-sm-12 table-responsive">
              <table
                aria-describedby="example1_info"
                role="grid"
                id="example1"
                class="table table-bordered table-striped dataTable"
              >
                <thead>
                  <tr role="row">
                    <th
                      aria-label="Rendering engine: activate to sort column descending"
                      aria-sort="ascending"
                      style="width: 167px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting_asc"
                    >Project name</th>
                    <th
                      aria-label="Browser: activate to sort column ascending"
                      style="width: 207px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    >Number of members</th>
                    <th
                      aria-label="Platform(s): activate to sort column ascending"
                      style="width: 182px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    >Progess</th>
                    <th
                      aria-label="Engine version: activate to sort column ascending"
                      style="width: 142px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    >Last change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="even" role="row" v-for="projects of projects" :key="projects">
                    <td class="sorting_1">{{ projects.proj_name }}</td>
                    <td>{{ projects.proj_members }}</td>
                    <td>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-primary progress-bar-striped"
                          role="progressbar"
                          aria-valuenow= "40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="width: 40%"
                        ></div>
                      </div>
                    </td>
                    <td>
                      <p class="current-time"></p>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th colspan="1" rowspan="1">Project name</th>
                    <th colspan="1" rowspan="1">Number of members</th>
                    <th colspan="1" rowspan="1">Progress</th>
                    <th colspan="1" rowspan="1">Last change</th>
                    <!-- <th colspan="1" rowspan="1"></th> -->
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import $ from 'jquery'
import * as Services from '../../../services'

require('datatables.net-bs')
require('datatables.net')

export default {
  name: 'tableProject',
  // {
  //     return {
  //           date: this.$dn.date(new Date(), 'dd-mm-yyyy', '-')
  //     }
  // },
  created() {
    Services.getProj()
    .then((response) => {
      this.projects = response.data
    })
    .catch(error => {
      console.log(error)
    })
  },
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  },
   data: () => ({
    projects: []
  })
}
</script>

<style scoped>
table {
  color: #242e35;
}
</style>