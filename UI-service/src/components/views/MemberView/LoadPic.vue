<template>
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
</template>
<script>
import { upload } from '@/services/file-upload'

const STATUS_INITIAL = 0
const STATUS_SAVING = 1
const STATUS_SUCCESS = 2
const STATUS_FAILED = 3

export default {
  data() {
    return {
      // upload picture properties
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
  methods: { reset() {
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
          this.userData.avatar = this.uploadedFiles
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
</style>