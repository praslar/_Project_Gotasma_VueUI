<template>
  <li class="dropdown messages-menu">
    <a href="javascript:;" title="Add members to project" class="dropdown-toggle" data-toggle="dropdown">
      <span class="fa  fa-street-view myIcon"></span>
      <span class="label special" >{{project.users | count}}</span>
    </a>


     <ul class="dropdown-menu">
      <li class="header">
         There are {{ project.users | count }} member(s) in your project
      </li>
      <li>
        <ul class="menu">
          <member-list v-for="user in project.users" :key="user.id"></member-list>
          <li v-if="project.users.length == 0">
            <span class="center-block text-center alert-error">Please assign member to your project</span>
          </li>
        </ul>
      </li>
      <li class="footer">
        <router-link :to="'/project/' + project.id + '/team'">
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
  components: { MemberList },
  props: ['project'],
  methods: {
    hide() {
      this.$modal.hide('someFilter')
      this.$modal.hide('someSetting')
    }
  }
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

