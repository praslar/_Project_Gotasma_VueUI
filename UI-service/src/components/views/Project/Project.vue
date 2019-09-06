<template>
    <div class="main">
         <settingModal :id="id" :projectName="projectName"></settingModal>
         <filterModal></filterModal>
         <router-view :members="members"></router-view>
    </div>
</template>
<script>
import SettingModal from '../../layout/Headers/HeaderElements/SettingModal'
import FilterModal from '../../layout/Headers/HeaderElements/FilterModal'
import * as Services from '../../../services'

export default {
  name: 'Project',
  props: ['id'],
  components: {
    SettingModal,
    FilterModal
  },
  data: function() {
    return {
      // section: 'Dash',
      members: [],
      projectName: ''
    }
  },
    mounted() {
    this.getProjectByID()
  },
  methods: {
    getProjectByID() {
     let self = this
      Services.getMemberOfProject()
        .then(response => {
          self.projectName = response.name
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>