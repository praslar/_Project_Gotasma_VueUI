<template>
 <ul class="sidebar-menu">
    <li class="header">Projects Management
    </li>
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">View All Project</span>
      </a>
    </router-link>

    <li class="header">Team and Resource</li>
    <router-link tag="li" class="pageLink" to="/tasks">
      <a>
        <i class="fa fa-tasks"></i>
        <span class="page">View all member</span>
      </a>
    </router-link>
 </ul>
</template>
<script>
export default {
  name: 'SidebarMenu'
}
</script>
<style>
span {
  color: #EEEEE7;
}
/* override default */
.sidebar-menu > li > a {
  padding: 12px 15px 12px 15px;
}

.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}

.treeview-title {
  z-index: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-90deg);
  }
}
</style>
