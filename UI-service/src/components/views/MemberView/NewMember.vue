<template>
  <modal
    name="NewMember"
    class="modal-new-member"
    :resizable="true"
    :draggable="true"
    :height="280"
    @before-open="beforeOpen"
  >
    <a class="btn-close" @click="cancelCreate">
      <i class="fa fa-close"></i>
    </a>
    <form enctype="multipart/form-data" novalidate @submit.prevent="handleSubmit" class="inputUser">
      <div class="box box-group">
        <div class="box-header with-border dark">
          <h3 class="box-title">Add new member</h3>
        </div>
        <!--Picture drag or selecte-->
        <div class="dropbox col-xs-4">
          <input
            type="file"
            multiple
            :name="uploadFieldName"
            :disabled="isSaving"
            @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
            accept="image/*"
            class="input-file"
          />
          <p v-if="isInitial">
            Drag your file(s) here to begin
            <br />or click to browse
          </p>
          <p v-if="isSaving">Uploading {{ fileCount }} files...</p>
          <!--SUCCESS-->
          <div v-if="isSuccess">
            <a class="reset-btn" href="javascript:void(0)" @click="reset()">Upload again</a>
            <ul class="list-unstyled">
              <li v-for="item in uploadedFiles" :key="item">
                <img :src="item.url" :alt="item.originalName" />
              </li>
            </ul>
          </div>
          <!--FAILED-->
          <div v-if="isFailed">
            <h2>Uploaded failed.</h2>
            <p>
              <a href="javascript:void(0)" @click="reset()">Try again</a>
            </p>
            <pre>{{ uploadError }}</pre>
          </div>
        </div>
        <div class="box-body">
          <!--Input section-->
          <div class="input-group col-xs-8">
            <span class="input-group-addon">
              <i class="fa fa-tag"></i>
            </span>
            <input
              type="text"
              id="badgeID"
              v-model="member.badgeID"
              v-validate="'required|min:3'"
              class="form-control"
              placeholder="Badge ID"
              name="badgeID"
              :class="{ 'is-invalid': submitted && errors.has('badgeID') }"
           
            />
            <div v-if="submitted && errors.has('badgeID')" class="invalid-feedback">{{ errors.first('badgeID') }}</div>
          </div>
          <div class="input-group col-xs-8">
            <span class="input-group-addon">
              <i class="fa fa-user-plus"></i>
            </span>
            <input
              type="text"
              id="name"
              name="name"
              v-model="member.name"
              class="form-control"
              v-validate="'required|min:5'"
              :class="{ 'is-invalid': submitted && errors.has('name') }"
              placeholder="Username"
      
            />
             <div v-if="submitted && errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</div>
          </div>
          <div class="input-group col-xs-8">
            <span class="input-group-addon">
              <i class="fa fa-envelope"></i>
            </span>
            <input
              v-validate="'required|email'"
              name="email"
              id="email"
              type="email"
              class="form-control"
              placeholder="Email"
              v-model="member.email"
              :class="{ 'is-invalid': submitted && errors.has('email') }"
            />
             <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
          </div>
        </div>
        <div class="box-footer">
          <p class="quote">
            Upload member potrait.
            <br />File should be .jpg type with max solution at 128x128
          </p>
          <button class="btn-create">Create</button>
        </div>
      </div>
    </form>
  </modal>
</template>
<script>
import { upload } from '@/services/file-upload'
import * as Services from '../../../services'

const STATUS_INITIAL = 0
const STATUS_SAVING = 1
const STATUS_SUCCESS = 2
const STATUS_FAILED = 3
export default {
  name: 'NewMember',
  props: ['memberData'],
  data() {
    return {
      // upload picture properties
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'photos',
      submitted: false,
      member: this.memberData
    }
  },
  computed: {
    // upload pictute function
    isInitial() {
      return this.currentStatus === STATUS_INITIAL
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED
    }
    // .....................

  },
  methods: {
    // picture method
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL
      this.uploadedFiles = []
      this.uploadError = null
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING

      upload(formData)
        .then(x => {
          this.uploadedFiles = [].concat(x)
          this.currentStatus = STATUS_SUCCESS
          this.member.avatar = this.uploadedFiles
        })
        .catch(err => {
          this.uploadError = err.response
          this.currentStatus = STATUS_FAILED
        })
    },
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData()

      if (!fileList.length) return

      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name)
      })

      // save it
      this.save(formData)
    },
    // Modal
    cancelCreate() {
      this.$modal.hide('NewMember')
    },
    handleSubmit() {
      this.submitted = true
      this.$validator.validate().then(valid => {
                if (valid) {
                    Services.addUser(this.member)
                      .then(response => {
                        console.log(response)
                        alert(JSON.stringify(response))
                      })
                      .catch(error => {
                        console.log(error)
                      })
                }
            })
    },
    beforeOpen(event) {
      if (event.params != null) {
        this.member = event.params.member
        this.isEditting = true
      } else {
        this.member = this.memberData
      }
    },
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
  },
  mounted() {
    // picture reset
    this.reset()
  }
}
</script>
<style scoped>
.invalid-feedback{
  font-size: 12px;
  color: red;
  z-index: 9;
  position: absolute;
  margin-top: 35px;
}
#email{
  margin-top: 0px;
}
.box-title {
  font-family: Roboto;
  font-weight: bold;
}
.input-group {
  margin-top: 15px;
}
.box-footer {
  border: none;
  padding-top: 0;
}
.dropbox {
  outline: 1px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: rgb(245, 245, 245);
  color: dimgray;
  padding: 10px 10px;
  min-height: 130px; /* minimum height */
  cursor: pointer;
  width: auto;
  margin-top: 20px;
  border-radius: 10px;
  margin-right: 20px;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 100px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: #95a5a6; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  overflow: hidden;
  font-size: 12px;
  text-align: center;
  padding: 30px 0;
}
.reset-btn {
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  position: absolute;
  bottom: 0;
  z-index: 999;
  color: #3fb0ac;
}
.reset-btn:hover {
  color: #173e43;
}
button {
  background: white;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  letter-spacing: 1px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  min-width: 140px;
  margin-top: 8px;
  color: #313233;
  cursor: pointer;
  border: 1px solid #bbbbbb;
  text-transform: uppercase;
  transition: 0.1s all;
  font-size: 13px;
  outline: none;
}
.btn-create {
  margin: 10px;
  position: absolute;
  right: 10px;
  bottom: 5px;
}
.btn-create:hover {
  border-color: #173e43;
  color: #173e43;
  margin: 15px;
}
.btn-close {
  width: 30px;
  font-size: 20px;
  position: absolute;
  z-index: 99;
  right: 0;
  margin: 1px;
  padding-left: 10px;
  color: #3fb0ac;
}
.btn-close:hover {
  color: #173e43;
}
.quote {
  font-size: 14px;
  color: #000;
  display: inline;
  font-style: italic;
}
</style>