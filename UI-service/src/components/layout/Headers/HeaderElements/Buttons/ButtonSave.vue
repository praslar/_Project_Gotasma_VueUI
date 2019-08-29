<template>
  <li>
    <a @click="showDialog">
      <span class="fa fa-download" id="myIcon" />
      <span class="hidden-xs myIcon">{{ "SAVE" }}</span>
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
.myIcon {
  color: rgb(43, 42, 42);
  margin: 0 5px 0 5px
}
a{
  cursor: pointer
}
</style>

