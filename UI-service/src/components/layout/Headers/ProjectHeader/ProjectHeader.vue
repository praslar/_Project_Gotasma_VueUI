<template>
  <header class="main-header">
          <add-task-modal pivotX="1.0" :users="users" ></add-task-modal>
          <taskModal :exceptionDays="exceptionDays"></taskModal>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <button-add-task></button-add-task>
          <button-add-member :id="id" :users="users"></button-add-member>
          <button-history></button-history>
          <button-filter></button-filter>
          <button-setting></button-setting>
          <button-save></button-save>
        </ul>
      </div>
      <v-dialog/>
  </header>
</template>

<script>
import FilterModal from './Modals/FilterModal'
import SettingModal from './Modals/SettingModal'
import AddTaskModal from './Modals/AddTask'
import ButtonHistory from './Buttons/ButtonHistory'
import ButtonSave from './Buttons/ButtonSave'
import ButtonSetting from './Buttons/ButtonSetting'
import ButtonFilter from './Buttons/ButtonFilter'
import ButtonAddMember from './Buttons/ButtonAddMember'
import ButtonAddTask from './Buttons/ButtonAddTask'
import TaskModal from './Modals/TaskModal'
export default {
  name: 'ProjectHeader',
  components: {
    ButtonHistory,
    ButtonSave,
    ButtonSetting,
    ButtonFilter,
    ButtonAddMember,
    ButtonAddTask,
    AddTaskModal,
    SettingModal,
    FilterModal,
    TaskModal
  },
  props: ['id', 'users', 'exceptionDays']
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
