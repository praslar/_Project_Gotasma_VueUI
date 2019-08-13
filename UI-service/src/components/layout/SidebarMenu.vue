<template>
  <ul class="sidebar-menu">
    <li class="header">Projects managment</li>
    <router-link tag="li" class="pageLink" to="/Projects">
      <a>
        <i class="fa fa-tasks"></i>
        <span class="page">View all project</span>
      </a>
    </router-link>
  </ul>
</template>

<script>
export default {}
</script>

<style>
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
  color: #eeeee7
}
</style>
