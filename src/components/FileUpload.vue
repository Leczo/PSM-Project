<template>
  <div>
    <!-- Styled -->
    <b-row>
      <b-form-file @change="onFileSelected" placeholder="Wybierz zdjęcie"></b-form-file>
    </b-row>
    <br />
    <br />
    <b-row>
      <b-button variant="primary" @click="uploadImage">Zapisz</b-button>
    </b-row>
    <br />
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  methods: {
    onFileSelected(e) {
      this.selectedFile = e.target.files[0];
    },
    uploadImage() {
      var user = firebase.auth().currentUser;
      var upFile = this.selectedFile;
      var storageRef = firebase.storage().ref(user.uid);
      storageRef.put(upFile);
    },

    data() {
      return {
        selectedFile: null
      };
    }
  }
};
</script>