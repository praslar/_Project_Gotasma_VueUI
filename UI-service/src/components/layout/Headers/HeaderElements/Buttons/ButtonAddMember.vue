<template>
  <li class="dropdown messages-menu">
    <!-- <a href="javascript:;" title="Add members to project" class="dropdown-toggle" data-toggle="dropdown">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 36 36">
        <g fill="#fff" fill-rule="evenodd" transform="translate(8 6)">
            <path d="M10.001 2.0029C9.45 2.0029 9.001 2.4519 9.001 3.0029 9.001 3.5549 9.45 4.0029 10.001 4.0029 10.552 4.0029 11.001 3.5549 11.001 3.0029 11.001 2.4519 10.552 2.0029 10.001 2.0029M10.001 6.0029C8.347 6.0029 7.001 4.6569 7.001 3.0029 7.001 1.3489 8.347.0029 10.001.0029 11.655.0029 13.001 1.3489 13.001 3.0029 13.001 4.6569 11.655 6.0029 10.001 6.0029M9.001 18.0029L11.001 18.0029 11.001 14.0029C11.001 13.4509 11.449 13.0029 12.001 13.0029L13.001 13.0029 13.001 12.0029C13.001 10.3489 11.655 9.0029 10.001 9.0029 8.347 9.0029 7.001 10.3489 7.001 12.0029L7.001 13.0029 8.001 13.0029C8.553 13.0029 9.001 13.4509 9.001 14.0029L9.001 18.0029zM12.001 20.0029L8.001 20.0029C7.449 20.0029 7.001 19.5549 7.001 19.0029L7.001 15.0029 6.001 15.0029C5.449 15.0029 5.001 14.5549 5.001 14.0029L5.001 12.0029C5.001 9.2459 7.244 7.0029 10.001 7.0029 12.758 7.0029 15.001 9.2459 15.001 12.0029L15.001 14.0029C15.001 14.5549 14.553 15.0029 14.001 15.0029L13.001 15.0029 13.001 19.0029C13.001 19.5549 12.553 20.0029 12.001 20.0029L12.001 20.0029z"></path>
            <path d="M10.001,24.0029 C5.185,24.0029 0.001,22.7519 0.001,20.0029 C0.001,19.0339 0.668,17.6859 3.842,16.7709 L4.396,18.6929 C2.418,19.2639 2.001,19.9009 2.001,20.0029 C2.001,20.5179 4.752,22.0029 10.001,22.0029 C15.25,22.0029 18.001,20.5179 18.001,20.0029 C18.001,19.9069 17.612,19.2989 15.762,18.7389 L16.342,16.8259 C19.366,17.7409 20.001,19.0589 20.001,20.0029 C20.001,22.7519 14.817,24.0029 10.001,24.0029"></path>
        </g>
      </svg>
      <span class="label label-danger">{{memberData.members | count}}</span>
    </a> -->    
    <a href="javascript:;" title="Add members to project" class="dropdown-toggle" data-toggle="dropdown">
      <span class="fa fa-group myIcon"></span>
      <span class="label special" >{{memberData.members | count}}</span>
    </a>


     <ul class="dropdown-menu">
      <li class="header">
         There are {{ memberData.members | count }} member(s) in your project
      </li>
      <li>
        <ul class="menu">
          <member-list v-for="member in memberData.members" :key="member.memberID" :member="member"></member-list>
          <li v-if="!memberData.members.length">
            <span class="center-block text-center alert-error">Please assign member to your project</span>
          </li>
        </ul>
      </li>
      <li class="footer">
        <router-link :to="teamRoute + idProject + '/team'">
        <a >
          <i class="fa fa-users"></i>
          See all member of project
        </a>
        </router-link>
      </li>
    </ul>
</li>
</template>

<script>
import MemberList from '../MemberList'
export default {
  name: 'buttonAddMember',
  data() {
    return {
      teamRoute: '/project/'
    }
  },
  components: { MemberList },
  props: ['memberData', 'idProject']
}
</script>

<style scoped>
.special {
  padding: 0px;
  margin: 0px;
  text-decoration-line: underline
}
.myIcon {
  color: rgb(43, 42, 42);
  margin: 0 5px 0 5px
}
.dropdown-toggle:hover {
  background-color: #f3f5f7 !important;
  border-radius: none !important
}
</style>

