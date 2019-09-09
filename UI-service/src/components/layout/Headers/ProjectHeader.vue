<template>
  <header class="main-header">
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <buttonAddMember :project="project"></buttonAddMember>
          <buttonHistory :project="project"></buttonHistory>
          <buttonFilter></buttonFilter>
          <buttonSetting></buttonSetting>
          <buttonSave></buttonSave>
        </ul>
      </div>
      <v-dialog/>
  </header>
</template>

<script>
import ButtonHistory from './HeaderElements/Buttons/ButtonHistory'
import ButtonSave from './HeaderElements/Buttons/ButtonSave'
import ButtonSetting from './HeaderElements/Buttons/ButtonSetting'
import ButtonFilter from './HeaderElements/Buttons/ButtonFilter'
import buttonAddMember from './HeaderElements/Buttons/ButtonAddMember'

export default {
  name: 'DashHeader',
  components: {
    ButtonHistory,
    ButtonSave,
    ButtonSetting,
    ButtonFilter,
    buttonAddMember
  },
  props: ['project']
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
