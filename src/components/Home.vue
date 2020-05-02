<template>
  <b-jumbotron id="sth">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@3/distr/fira_code.css"
    />
    <b-navbar
      toggleable
      style="  border-top-left-radius: 20px; border-top-right-radius: 20px;"
      fixed="bottom"
      sticky="true"
      type="dark"
      variant="dark"
    >
      <b-navbar-brand id="Brand">
        <strong>Cv Generator</strong>
      </b-navbar-brand>

      <b-dropdown right text="Right align" variant="secondary">
        <template v-slot:button-content>
          <b-icon icon="power" aria-hidden="true"></b-icon>
        </template>
        <b-dropdown-item @click="logout()">Wyloguj</b-dropdown-item>
      </b-dropdown>
    </b-navbar>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Główna" active>
          <template v-slot:title>
            <b-icon icon="pencil-square" title="d" aria-hidden="true"></b-icon>
            <span> Główna</span>
          </template>
          <b-card-text>Tab contents 1</b-card-text>
        </b-tab>
        <b-tab title="Uzupełnij Dane">
          <template v-slot:title>
            <b-icon icon="pencil-square" title="d" aria-hidden="true"></b-icon>
            <span> Uzupełnij Dane</span>
          </template>
          <b-card-text
            ><div>
              <div>
                <b-card no-body>
                  <b-tabs
                    justified
                    variant="secondary"
                    card
                    vertical
                    nav-wrapper-class="w-50"
                  >
                    <b-tab title="Edukacja" active
                      ><b-card-text>Edukacja</b-card-text></b-tab
                    >
                    <b-tab title="Praca"
                      ><b-card-text>Praca</b-card-text></b-tab
                    >
                    <b-tab title="Języki"
                      ><b-card-text>Języki</b-card-text></b-tab
                    >
                  </b-tabs>
                </b-card>
              </div>
            </div></b-card-text
          >
        </b-tab>

        <b-tab te="Zapisane CV">
          <template v-slot:title>
            <b-icon icon="folder-fill" title="d" aria-hidden="true"></b-icon>
            <span> Upload</span>
          </template>
          <b-card-text>Tutaj File z bootstrapa</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
    <b-navbar
      toggleable
      style="  border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;"
      fixed="bottom"
      sticky="true"
      type="dark"
      variant="dark"
    >
    </b-navbar>
  </b-jumbotron>
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
    },
  },
};
</script>

<style scoped>
#sth {
  min-height: 100vh;
  margin: 0%;
  flex-direction: column;
  justify-content: center;
}
#Brand {
  font-family: "Fira Code", mono;
}
</style>
