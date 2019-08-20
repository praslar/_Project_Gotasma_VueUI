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
                    >User</th>
                    <th
                      aria-label="Browser: activate to sort column ascending"
                      style="width: 207px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    >Full Name</th>
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
                    >Project</th>
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
                  <tr class="even" role="row" v-for="user of users" :key="user">
                    <td class="sorting_1">
                      <img :src="user.avatar" class="user-image" alt="User Image" />
                    </td>
                    <td>{{user.fullName}}</td>
                    <td>{{user.email}}</td>
                    <td>
                    <div class="external-event bg-red">{{user.country}}</div>
                    <div class="external-event bg-light-blue">{{user.graphColor}}</div>
                    </td>
                    <td><a class="btn btn-app"><i class="fa fa-edit"></i></a>
                        <a class="btn btn-app"><i class="fa fa-remove"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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

export default {
  data: () => ({
    users: []
  }),
  name: 'table-member',
  created() {
    Services.getUsers()
      .then((response) => {
        this.users = response.data
        this.$nextTick(() => {
      $('#example1').DataTable()
    })
      })
      .catch(error => {
        console.log(error)
      })
    }
}
</script>
<style scoped>
table{
  color: #242E35;
}
img{
  width: 40px;
}
td a {
  min-width: 30px !important;
  width: 30px;
  height: 40px
}
td a i{
  padding: 0px;
  margin-bottom: 10px;
}
</style>
