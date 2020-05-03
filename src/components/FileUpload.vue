<template>
  <div>
    <!-- Styled -->
    <b-row>
      <b-form-file @change="onFileSelected" placeholder="Wybierz zdjęcie"></b-form-file>
    </b-row>
    <br />
    <br />
    <b-row>
<<<<<<< HEAD
      <b-button variant="primary" @click="uploadImage()">Zapisz</b-button>
=======
      <b-button style="display:block;margin: auto;" variant="primary" @click="uploadImage">Zapisz</b-button>
>>>>>>> a50615704056b7ec891e12a169db5d0de13b206b
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
    async uploadImage() {
      var user = firebase.auth().currentUser;
      var uid = user.uid;
      let file = this.selectedFile;
      var storageRef = firebase.storage().ref("/images/" + uid);
      await storageRef.put(file);
      this.loadImage();
    },
    loadImage() {
      var user = firebase.auth().currentUser;
      var uid = user.uid;

      firebase
        .storage()
        .ref("/images/" + uid)
        .getDownloadURL()
        .then(url => {
          this.image = url;
          this.saveData();
        });
    },
    saveData: function() {
      this.$emit("saveData", this.image);
    },

    data() {
      return {
        selectedFile: null,
        image: ""
      };
    }
  }
};
</script>