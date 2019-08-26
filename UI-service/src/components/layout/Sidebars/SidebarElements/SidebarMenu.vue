<template>
  <ul class="sidebar-menu">
    <li class="header">Projects managment</li>
    <router-link tag="li" class="pageLink" to="/projectsmanagement">
      <a>
        <i class="fa fa-suitcase"></i>
        <span class="page">View all project</span>
      </a>
    </router-link>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-tags"></i>
        <span class="treeview-title">Recent Projects</span>
        <span class="pull-right-container pull-right">
          <i class="fa fa-angle-left fa-fw"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <a href="/project/1510251">
            <i class="fa fa-file-o"></i> Project No.1
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-o"></i> Item 2
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-o"></i> Item 3
          </a>
        </li>
      </ul>
    </li>

    <li class="header">Team and Resource</li>
    <router-link tag="li" class="pageLink" to="/member">
      <a>
        <i class="fa fa-users"></i>
        <span class="page">View all member</span>
      </a>
    </router-link>

    <li class="header">Exceptions</li>
    <router-link tag="li" class="pageLink" to="/exceptions">
      <a>
        <i class="fa fa-calendar-times-o  "></i>
        <span class="page">View Exceptions</span>
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
  color: #eeeee7
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

span {
  color: #eeeee7;
}
</style>
