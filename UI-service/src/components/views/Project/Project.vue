<template>
    <div class="main">
         <settingModal :id="id"></settingModal>
         <filterModal></filterModal>
         <router-view :id="id"></router-view>
    </div>
</template>
<script>
import SettingModal from '../../layout/Headers/HeaderElements/SettingModal'
import FilterModal from '../../layout/Headers/HeaderElements/FilterModal'

export default {
  name: 'Project',
  props: ['id'],
  components: {
    SettingModal,
    FilterModal
  }
}
</script>