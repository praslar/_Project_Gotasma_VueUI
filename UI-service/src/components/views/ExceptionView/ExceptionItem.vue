<template>
  <div class="col-md-3">
    <div class="box box-success">
      <div class="box-header with-border">
        <h3 class="box-title">{{exceptDate.tittle}}</h3>
    
        <div class="box-tools pull-left">
          <button type="button" class="btn btn-box-tool" data-widget="remove" @click="showDialog">
            <i class="fa fa-times"></i>
          </button>
        </div>
        <!-- /.box-tools -->
      </div>
      <!-- /.box-header -->
      <div class="box-body">{{exceptDate.startDate}} {{exceptDate.endDate}}</div>
      <!-- /.box-body -->
    </div>
    <!-- /.box -->
    <v-dialog/>
  </div>
</template>

<script>
export default {
    name: 'ExceptionItem',
    props: ['exceptDate'],
    data() {
        return {
        }
    },
    methods: {
    showDialog() {
      this.$modal.show('dialog', {
        title: 'Are you sure?',
        text: 'Do you wish to delete?',
        buttons: [
          {
            title: 'OK',
            default: true,
            handler: () => {
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