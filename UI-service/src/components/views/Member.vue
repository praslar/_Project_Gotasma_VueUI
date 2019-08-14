<template>
  <section class="content">
    <div class="row center-block">
      <div class="header">
        <i class="fa fa-users"></i>
        <a>Team and resources</a>
      </div>
      <div class="col-md-12">
        <div class="box">
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-6">
                  <div id="example1_length" class="dataTables_length"></div>
                </div>
              </div>

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
                        >First name</th>
                        <th
                          aria-label="Platform(s): activate to sort column ascending"
                          style="width: 182px;"
                          colspan="1"
                          rowspan="1"
                          aria-controls="example1"
                          tabindex="0"
                          class="sorting"
                        >Last name</th>
                        <th
                          aria-label="Engine version: activate to sort column ascending"
                          style="width: 142px;"
                          colspan="1"
                          rowspan="1"
                          aria-controls="example1"
                          tabindex="0"
                          class="sorting"
                        >Email</th>
                        <th
                          aria-label="CSS grade: activate to sort column ascending"
                          style="width: 101px;"
                          colspan="1"
                          rowspan="1"
                          aria-controls="example1"
                          tabindex="0"
                          class="sorting"
                        >Assigned</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="even" role="row">
                        <td class="sorting_1">
                          <img src="../../../static/img/stock/user1-128x128.jpg" alt />
                        </td>
                        <td>John</td>
                        <td>Alibab</td>
                        <td>John@gmai.com</td>
                        <td>Task 1</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">
                          <img src="../../../static/img/stock/user1-128x128.jpg" alt />
                        </td>
                        <td>John</td>
                        <td>Alibab</td>
                        <td>John@gmai.com</td>
                        <td>Task 1</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">
                          <img src="../../../static/img/stock/user1-128x128.jpg" alt />
                        </td>
                        <td>Manathan</td>
                        <td>AHellibab</td>
                        <td>John@gmai.com</td>
                        <td>Task 1</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">
                          <img src="../../../static/img/stock/user1-128x128.jpg" alt />
                        </td>
                        <td>Kirsy</td>
                        <td>Katarian</td>
                        <td>John@gmai.com</td>
                        <td>Write doc</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">
                          <img src="../../../static/img/stock/user1-128x128.jpg" alt />
                        </td>
                        <td>Hong</td>
                        <td>Machken</td>
                        <td>John@gmai.com</td>
                        <td>Design View</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">
                          <img src="../../../static/img/stock/user1-128x128.jpg" alt />
                        </td>
                        <td>John</td>
                        <td>Alibab</td>
                        <td>John@gmai.com</td>
                        <td>Task ê</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colspan="1" rowspan="1">Member</th>
                        <th colspan="1" rowspan="1">First name</th>
                        <th colspan="1" rowspan="1">Last name</th>
                        <th colspan="1" rowspan="1">Email</th>
                        <th colspan="1" rowspan="1">Assigned</th>
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
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
// Require needed datatables modules
require('datatables.net')
require('datatables.net-bs')

export default {
  name: 'Member',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  }
}
</script>

<style>
/* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.

   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.

@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/

@import url("/static/js/plugins/datatables/dataTables.bootstrap.css");
.header {
  text-align: center;
  font-size: 24px;
}
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
img {
  width: 60px;
}
</style>
