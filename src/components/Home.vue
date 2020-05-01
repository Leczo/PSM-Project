<template>
  <button type="button" @click="logout()">Wyloguj</button>
</template>

<script>
import firebase from "firebase";
import router from '../router.js';

export default {
  name: "Home",
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => router.replace("/"));
    }
  }
};
</script>