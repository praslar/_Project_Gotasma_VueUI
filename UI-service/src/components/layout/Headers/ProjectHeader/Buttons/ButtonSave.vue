<template>
  <li>
    <a @click="showConfirm">
      <span class="fa fa-download" id="myIcon" />
      <span class="hidden-xs myIcon">SAVE</span>
    </a>
  </li>
</template>

<script>
import { EventBus } from '@/main.js'
export default {
  name: 'buttonSave',
  methods: {
    showConfirm() {
      this.$modal.show('dialog', {
        title: 'Are you sure?',
        text: 'Do you wish to save?',
        buttons: [
          {
            title: 'OK',
            default: true,
            handler: () => {
              EventBus.$emit('saveProject')
              this.$modal.hide('dialog')
            }
          },
          {
            title: 'CANCEL',
            handler: () => {
              this.$modal.hide('dialog')
            }
          }
        ]
      })
    }
  },
  beforeDestroy() {
    EventBus.$off('saveProject')
  }
}
</script>

<style scoped>
.myIcon {
  color: rgb(43, 42, 42);
  margin: 0 5px 0 5px
}
a{
  cursor: pointer
}
</style>

