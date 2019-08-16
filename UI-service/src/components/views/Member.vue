<template>
  <div :class="['wrapper', classes]">
    <dash-header-history></dash-header-history>
    <sidebar />
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          {{$route.name.toUpperCase() }}
          <small>{{ $route.meta.description }}</small>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="javascript:;">
              <i class="fa fa-home"></i>Home
            </a>
          </li>
          <li class="active">{{$route.name.toUpperCase()}}</li>
        </ol>
      </section>
      <section class="content">
        <div class="row center-block">
          <div class="header col-md-12">
            <span>Team and resources</span>
            <p>Here you manage people from all your projects. You can also invite new members by email. Depending on the rights granted, members can get different roles (work only on personal assigned tasks, edit projects, see costs and work with them).</p>
          </div>
          <div class="col-md-12" id="add-member">
            <div class="input-group">
              <input
                type="text"
                class="col-md-12 form-control"
                placeholder="Enter an email address of a person you want to invite"
              />
              <span class="input-group-btn">
                <button type="button" class="btn btn-info btn-sm">Invite by email</button>
              </span>
            </div>
          </div>

          <table-member ></table-member>
        </div>
      </section>
    </div>
    <dash-footer></dash-footer>
  </div>
</template>

<script>

import TableMember from './TableMember'
import config from '../../config'
import Sidebar from '../layout/Sidebar'
import DashFooter from '../layout/DashFooter'
import DashHeaderHistory from '../layout/DashHeaderHistory'
// Require needed datatables modules

export default {
  name: 'Member',
  components: {
    TableMember,
    Sidebar,
    DashFooter,
    DashHeaderHistory
  },
  data: function() {
    return {
      // section: 'Dash',
      classes: {
        fixed_layout: config.fixedLayout,
        hide_logo: config.hideLogoOnMobile
      }
    }
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
.content{
  padding: 60px;
}
.header span {
  font-size: 24px;
  color: #242e35;
  font-weight: bold;
}
.header p {
  font-size: 14px;
  font-style: italic;
  color: #242e35;
  margin-bottom: 20px;
}
#add-member {
  margin-bottom: 20px;
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
</style>
