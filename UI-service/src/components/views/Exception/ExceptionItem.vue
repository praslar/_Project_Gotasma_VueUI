<template>
<div>
  <transition-group enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
  <div class="col-md-3" v-for="(exception, index) in exceptions" :key="index">
    <div class="box box-success">
      <div class="box-header with-border">
        <h3 class="box-title"> {{ exception.tittle }} </h3>
    
        <div class="box-tools pull-left">
          <button type="button" class="btn btn-box-tool" @click="showDialog(index)">
            <i class="fa fa-times"></i>
          </button>
        </div>
      </div>

      <div class="box-body">From:&nbsp;{{ exception.exDate[0] | momentNormalDate }}</div>
      <div class="box-body">To:&nbsp;{{ exception.exDate[1] | momentNormalDate }}</div>
    </div>
  </div>
  </transition-group>
  <v-dialog/>
</div>
</template>

<script>
export default {
    name: 'ExceptionItem',
    props: ['exceptions'],
    methods: {
    showDialog(index) {
      this.$modal.show('dialog', {
        title: 'Are you sure?',
        text: 'Do you wish to delete?',
        buttons: [
          {
            title: 'OK',
            handler: () => {
              this.$modal.hide('dialog')
              this.exceptions.splice(index, 1)
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
.box-body {
  font-size: 16px !important
}
</style>