<template>
  <b-container container-fluid>
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="#">
        <strong>Cv Generator</strong>
      </b-navbar-brand>

      <b-dropdown right text="Right align" variant="primary">
        <template v-slot:button-content>
          <b-icon icon="power" aria-hidden="true"></b-icon>
        </template>
        <b-dropdown-item @click="logout()">Wyloguj</b-dropdown-item>
      </b-dropdown>
    </b-navbar>

    <b-card no-body>
      <b-tabs card>
        <b-tab title="Główna" active>
          <b-card-text>Tab contents 1</b-card-text>
        </b-tab>
        <b-tab title="Uzupełnij Dane">
          <b-card-text>Tab contents 2</b-card-text>
        </b-tab>
        <b-tab title="CV">
          <b-card-text>Tab contents 2</b-card-text>
        </b-tab>
        <b-tab title="Wygenerowanie CV">
          <b-card-text>Tab contents 2</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
import firebase from "firebase";
import router from "../router.js";

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


<style  scoped>
</style>