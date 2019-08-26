<template>
  <li class="dropdown user user-menu">
    <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
      <!-- The user image in the navbar-->
      <!-- hidden-xs hides the username on small devices so only the image appears. -->
      <img :src="admin.avatar" class="pull-left avatar"/>
      <div class="pull-left info">
          <div>
            <span class="hidden-xs">{{admin.fullName}}</span>
          </div>
            <i class="fa fa-circle text-success"></i> <span>{{admin.role}}</span>
        </div>
    </a>
    <ul class="dropdown-menu">
      <li class="user-header" style="height:auto;min-height:85px;padding-bottom:15px;">
        <p>
          <span>{{admin.fullName}}</span>
          <small>{{admin.country}}</small>
        </p>
      </li>
      <li class="user-footer">
        <a href="javascript:;" class="btn btn-default btn-flat btn-block">
          <i class="fa fa-sign-out"></i>
          <span class="myColor">Log out</span>
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'AdminMenu',
  props: ['admin']
}
</script>
<style scoped>
.dropdown-toggle{
  padding-top: 5px;
}
  .dropdown-toggle .user-image{
    border-radius: 5px !important;
    width: 30px;
    height: 40px;
  }
  .hidden-xs{
    font-size: 20px;
  }
  .avatar {
    margin: 5px;
    margin-top: 2px;
    border-radius: 8px;
    width: 40px;
  }
  .myColor {
    color: #587477 !important
  }
</style>
