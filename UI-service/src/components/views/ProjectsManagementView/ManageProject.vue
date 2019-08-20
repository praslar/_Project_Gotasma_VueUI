<template>
  <section class="content">
      <div id="btn-spacing">
        <button
          type="submit"
          v-bind:class="'btn btn-primary btn-lg'"
          @click="$modal.show('createNewProj')">
          Create New Project</button>
      </div>
    <div class="col-md-12">
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
                    >Project</th>
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
                    <!-- <th
                      aria-label="CSS grade: activate to sort column ascending"
                      style="width: 101px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    ></th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr class="even" role="row" v-for="index in 5" :key="index">
                    <td class="sorting_1">Ten project</td>
                    <td>So luong member trong proj</td>
                    <td>Progess cua tong proj</td>
                    <td>Lan cuoi sua doi</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th colspan="1" rowspan="1">Project</th>
                    <th colspan="1" rowspan="1">Number of members</th>
                    <th colspan="1" rowspan="1">Progess</th>
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
    </div>
    <NewProject></NewProject>
  </section>  
</template>


<script>
import $ from 'jquery'
require('datatables.net-bs')
require('datatables.net')

import NewProject from './NewProject'
export default {
  name: 'projectsManagement',
  components: {
    NewProject
  },
  props: ['projectItem'],
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  }
}
</script>
<style scoped>
table{
  color: #242E35;
}
img{
  width: 80px;
}
#btn-spacing {
  margin-bottom: 20px;
  vertical-align: middle;
}
.content {
  margin-top: 20px !important
}
</style>
