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
                class="table table-bordered table-striped dataTable"
              >
                <thead>
                  <tr role="row">
                    <th
                      aria-label="Rendering engine: activate to sort column descending"
                      aria-sort="ascending"
                      style="width: 150px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting_asc"
                    >Project name</th>
                    <th
                      aria-label="Browser: activate to sort column ascending"
                      style="width: 40px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    >Number of members</th>
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
                  </tr>
                </thead>
                <tbody>
                  <tr class="even" role="row" v-for="projects of projects" :key="projects">
                    <td class="sorting_1">{{ projects.name }}</td>
                    <td>{{ projects.numberOfMembers }}</td>
                    <td>{{ projects.startDate }}</td>
                    <td>{{ projects.updateDate }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th colspan="1" rowspan="1">Project name</th>
                    <th colspan="1" rowspan="1">Number of members</th>
                    <th colspan="1" rowspan="1">Start date</th>
                    <th colspan="1" rowspan="1">Last change (Last Update)</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
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
      this.projects = response.data
      this.$nextTick(() => {
      $('#example1').DataTable()
  })
    })
    .catch(error => {
      console.log(error)
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