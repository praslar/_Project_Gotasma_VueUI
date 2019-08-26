<template>
  <li class="notification-item">
    <a href="javascript:;">
    <div class="pull-left">
        <img :src="member.avatar" class="img-circle" alt="User Image">
     </div>

      <h4>
        <span class="name">{{ member.name }}</span>
        <span class="time pull-right">
          <i class="fa fa-tags"></i>
          <span class="name">{{ member.badgeID }}</span>
        </span>
      </h4>
      <p>{{ member.email }}</p>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.name { 
    color: black !important
}
.fa-tags{
    color: green !important
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu > li > ul.menu li > a > h4, .navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu > li > ul.menu li > a > p {
  margin: 0;
  white-space: normal;
  word-break: break-word;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu > li > ul.menu li > a > h4 {
  font-size: 15px;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu > li > ul.menu li > a > h4 small {
  font-size: 10px;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu > li > ul.menu li > a > p {
  font-size: 12px;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu > li > ul.menu li > a > h4 > span {
  display: inline-block;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu > li > ul.menu li > a > h4 > small.time {
  margin-top: 3px;
}
</style>
