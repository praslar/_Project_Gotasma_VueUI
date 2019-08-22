<template>
  <modal name="NewMember" class="modal-new-member" :resizable="true" :draggable="true">
    <form enctype="multipart/form-data" novalidate>
      <div class="box box-group">
        <div class="box-header with-border dark">
          <h3 class="box-title">Add new member</h3>
        </div>
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
          <div class="input-group col-xs-8">
            <span class="input-group-addon">
              <i class="fa fa-tag"></i>
            </span>
            <input type="text" class="form-control" placeholder="Badge ID" />
          </div>
          <div class="input-group col-xs-8">
            <span class="input-group-addon">
              <i class="fa fa-user-plus"></i>
            </span>
            <input type="text" class="form-control" placeholder="Username" />
          </div>
          <br />
          <div class="input-group col-xs-8">
            <span class="input-group-addon">
              <i class="fa fa-envelope"></i>
            </span>
            <input type="email" class="form-control" placeholder="Email" readonly :value="userData.email"/>
          </div>
        </div>
      </div>
      <div class="box-footer">
        <button type="submit" class="btn bg-navy pull-right">Submit</button>
      </div>
    </form>
  </modal>
</template>
<script>
import { upload } from '@/services/file-upload'

const STATUS_INITIAL = 0
const STATUS_SAVING = 1
const STATUS_SUCCESS = 2
const STATUS_FAILED = 3
export default {
  name: 'NewMember',
  props: ['userData'],
  data() {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'photos'
    }
  },
  computed: {
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
  },
  methods: {
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
    }
  },
  mounted() {
    this.reset()
  }
}
</script>
<style scoped>
.box-title {
  font-family: Roboto;
  font-weight: bold;
}
.input-group {
  margin-top: 10px;
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
  color: #000;
}
.box-footer button {
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
</style>