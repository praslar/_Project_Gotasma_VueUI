<template>
  <li class="dropdown notifications-menu">
    <a href="javascript:;" class="dropdown-toggle" @click="showDialog">
      <span class="fa fa-save" id="myIcon" />
      <span class="hidden-xs" id="myIcon">{{ "SAVE" }}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'buttonSave',
  methods: {
    showDialog() {
      this.$modal.show('dialog', {
        title: 'Are you sure?',
        text: 'Do you wish to save?',
        buttons: [
          {
            title: 'OK',
            default: true,
            handler: () => {
              alert('OK You have saved')
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
  }
}
</script>

<style scoped>
#myIcon {
  color: black;
}
</style>

