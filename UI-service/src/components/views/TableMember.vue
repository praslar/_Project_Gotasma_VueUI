<template>
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
                    >Avatar</th>
                    <th
                      aria-label="Browser: activate to sort column ascending"
                      style="width: 207px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    >Name</th>
                    <th
                      aria-label="Platform(s): activate to sort column ascending"
                      style="width: 182px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    >Email</th>
                    <th
                      aria-label="Engine version: activate to sort column ascending"
                      style="width: 142px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    >Assigned Task</th>
                    <th
                      aria-label="CSS grade: activate to sort column ascending"
                      style="width: 101px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="even" role="row" v-for="index in 20" :key="index">
                    <td class="sorting_1">
                      <img :src="user.avatar" class="user-image" alt="User Image" />
                    </td>
                    <td>{{user.displayName}}</td>
                    <td>{{user.displayName}}</td>
                    <td>{{user.roles}}</td>
                    <td></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th colspan="1" rowspan="1">Member</th>
                    <th colspan="1" rowspan="1">Name</th>
                    <th colspan="1" rowspan="1">Email</th>
                    <th colspan="1" rowspan="1">Assigned Task</th>
                    <th colspan="1" rowspan="1"></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <!-- /.box-body -->
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
require('datatables.net-bs')
require('datatables.net')
export default {
  name: 'table-member',
  props: ['user'],
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  }
}
</script>
