<template>
  <modal name="createNewProj" transition="pop-out" :width="modalWidth" :scrollable="true" height="auto">
    <div class="modal-box">
        <div class="partition" id="partition-register">
          <div class="partition-title">CREATE NEW PROJECT</div>
          <div class="partition-form">
            <form>
              <input id="" type="text" placeholder="Name project" />
              <input id="" type="text" placeholder="Start date" />
              <input id="" type="text" placeholder="Effort" />
            </form>
            <div style="margin-top: 42px"></div>
            <div class="button-set">
              <button id="create-btn" @click="createAlert">Create</button>
              <button id="cancel-btn" class="pull-right" @click="cancelCreate">Cancel</button>
            </div>
          </div>
        </div>
      </div>
  </modal>
</template>
<script>
const MODAL_WIDTH = 656

export default {
  name: 'NewProject',
  data() {
    return {
      modalWidth: MODAL_WIDTH
    }
  },
  created() {
    this.modalWidth =
      window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH
  },
  methods: {
    createAlert() {
      alert('You create one project')
      this.$modal.hide('createNewProj')
    },
    cancelCreate() {
      this.$modal.hide('createNewProj')
    }
  }
}
</script>

<style>

.modal-box {
  background: white;
  overflow: hidden;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 0 40px black;
  color: black;
  font-size: 0;
}

.modal-box .partition {
    width: 100%;
    height: 100%;
}

.modal-box .partition .partition-title {
      box-sizing: border-box;
      padding: 30px;
      width: 100%;
      text-align: center;
      letter-spacing: 1px;
      font-size: 23px;
      font-weight: 300;
}
.modal-box .partition .partition-form{
      padding: 0 20px;
      box-sizing: border-box;
}

.modal-box input[type=text]{
    display: block;
    box-sizing: border-box;
    margin-bottom: 4px;
    width: 100%;
    font-size: 15px;
    line-height: 2;
    border: 0;
    border-bottom: 1px solid #DDDEDF;
    padding: 4px 8px;
    font-family: inherit;
    transition: 0.5s all;
    outline: none;
}

.modal-box button {
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
  .modal-box button :hover {
      border-color: mix(#DDDEDF, black, 90%);
      color: mix(#8b8c8d, black, 80%);
  }

  .modal-box #create-btn, #cancel-btn {
    margin-left: 8px;
  }
  .modal-box .button-set {
    margin-bottom: 20px;
  }


.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.5s;
}

.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  transform: translateY(24px);
}
</style>
