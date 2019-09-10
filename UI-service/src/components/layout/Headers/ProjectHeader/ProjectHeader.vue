<template>
  <header class="main-header">
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <buttonAddMember :id="id" :users="users"></buttonAddMember>
          <buttonHistory></buttonHistory>
          <buttonFilter></buttonFilter>
          <buttonSetting></buttonSetting>
          <buttonSave></buttonSave>
        </ul>
      </div>
      <v-dialog/>
  </header>
</template>

<script>
import ButtonHistory from './Buttons/ButtonHistory'
import ButtonSave from './Buttons/ButtonSave'
import ButtonSetting from './Buttons/ButtonSetting'
import ButtonFilter from './Buttons/ButtonFilter'
import buttonAddMember from './Buttons/ButtonAddMember'

export default {
  name: 'DashHeader',
  components: {
    ButtonHistory,
    ButtonSave,
    ButtonSetting,
    ButtonFilter,
    buttonAddMember
  },
  props: ['id', 'users']
}
</script>

<style scoped>
.header-name {
  width: 50%;
  display: fixed;
}
.navbar-nav {
  font-size: 18px;
}
</style>
