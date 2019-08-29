<template>
<div>
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

      <div class="box-body"> <p>From: {{ exception.exDate[0] }}</p></div>
      <div class="box-body"> <p>To: {{ exception.exDate[1] }}</p></div>    

    </div>

    <v-dialog/>
  </div>
</div>
</template>

<script>
export default {
    name: 'ExceptionItem',
    props: ['exceptions'],
    data() {
        return {
        }
    },
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