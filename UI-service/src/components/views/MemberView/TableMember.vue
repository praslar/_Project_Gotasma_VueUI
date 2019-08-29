<template>
  <div class="col-md-12">
    <div class="box">
      <div class="box-body ">
        <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
          <div class="row">
            <div class="col-sm-12 table-responsive">
              <table
                aria-describedby="example1_info"
                role="grid"
                id="example1"
                class="table table-bordered table-hover dataTable"
              >
                <thead>
                  <tr role="row">
                    <th
                      aria-label="Rendering engine: activate to sort column descending"
                      aria-sort="ascending"
                      style="width: 167px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting_asc"
                    >Member</th>
                    <th
                      aria-label="Browser: activate to sort column ascending"
                      style="width: 207px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    >Full Name</th>
                    <th
                      aria-label="Platform(s): activate to sort column ascending"
                      style="width: 182px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    >Email</th>
                    <th
                      aria-label="Engine version: activate to sort column ascending"
                      style="width: 142px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    >Current Projects</th>
                    <th 
                      aria-label="CSS grade: activate to sort column ascending"
                      style="width: 101px;"
                      colspan="1"
                      rowspan="1"
                      aria-controls="example1"
                      tabindex="0"
                      class="sorting"
                    ></th>
                  </tr>
                </thead>
                <tbody v-if="chooseFromMember">
                  <tr class="even" role="row" v-for="member of members" :key="member.badgeID">
  
                        <td class="sorting_1">
                          <img :src="member.avatar" class="user-image" alt="User Image" />
                        </td>
                        <td>{{member.name}}</td>
                        <td>{{member.email}}</td>
                        <td>     
                          <div v-for="project in member.projects" :key="project.projectID" class="status">            
                             <p class="external-event btn-info" v-if="projectID != project.projectID" >{{project.name}} </p>
                            <p class="external-event btn-danger danger" v-else>All ready in project </p>
                          </div>
                        </td>
                        <td >
                            <a class="btn btn-app"><i class="fa fa-level-down" style="color:#008d4c; font-size: 22px"></i></a>
                        </td> 
                  </tr> 
                </tbody>
                <tbody v-else>
                  <tr class="even" role="row" v-for="member of members" :key="member.badgeID">
                    <td class="sorting_1">
                      <img :src="member.avatar" class="user-image" alt="User Image" />
                    </td>
                    <td>{{member.name}}</td>
                    <td>{{member.email}}</td>
                    <td>
                    <div class="external-event bg-yellow" v-for="project in member.projects" :key="project.projectID">{{project.name}}</div>
                    </td>
                    <td ><a class="btn btn-app" @click="$modal.show('NewMember', {member})"><i class="fa fa-edit"></i></a>
                        <a class="btn btn-app" @click="showDialog"><i class="fa fa-remove"></i></a>           
                    </td> 
                  </tr>                        
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-dialog/>
  </div> 
  </template>
<script>
import NewMember from './NewMember'

require('datatables.net-bs')
export default {
  props: ['members', 'chooseFromMember', 'manageMember', 'projectID'],
  data() {
    return {
      projectOfEachMember: []
    }
  },
  components: {
    NewMember
  },
  name: 'table-member',
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
              alert('OK You have deleted')
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
.danger {
  width: 100%;
  position: relative;
  font-size: 14px
}
table{
  color: #242E35;
}
img{
  width: 40px;
}
td a {
  min-width: 30px !important;
  width: 40px;
  height: 40px
}
td a i{
  padding: 0px;
  margin-bottom: 10px;
}
table {
  border-radius: 10px;
  font-size: 18px !important
}
.del-btn {
  background-color: rgba(255, 0, 0, 0.13)
}
</style>
