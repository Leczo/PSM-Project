<template>
  <b-jumbotron id="jumbotron">
    <div id="main-container">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@3/distr/fira_code.css"
      />
      <b-navbar
        toggleable
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
              <b-icon icon="house-fill" title="d" aria-hidden="true"></b-icon>
              <span></span>
            </template>
            <b-card-text><CvData /></b-card-text>
          </b-tab>
          <b-tab title="Uzupełnij Dane">
            <template v-slot:title>
              <b-icon
                icon="pencil-square"
                title="d"
                aria-hidden="true"
              ></b-icon>
              <span> Uzupełnij Dane</span>
            </template>
            <b-card-text>
              <div>
                <div>
                  <b-card no-body>
                    <b-tabs
                      justified
                      variant="secondary"
                      card
                      vertical
                      nav-wrapper-class="w-50"
                    >
                      <b-tab title="Dane Osobowe" active>
                        <b-card-text><strong>Dane Osobowe</strong></b-card-text>
                        <PersonalData />
                      </b-tab>

                      <b-tab title="Edukacja">
                        <b-card-text><strong>Edukacja</strong></b-card-text>
                        <EducationForm />
                      </b-tab>
                      <b-tab title="Praca">
                        <b-card-text><strong>Praca</strong></b-card-text>
                        <JobForm />
                      </b-tab>
                      <b-tab title="Języki">
                        <b-card-text><strong>Języki</strong></b-card-text>
                        <LanguageForm />
                      </b-tab>
                    </b-tabs>
                  </b-card>
                </div>
              </div>
            </b-card-text>
          </b-tab>

          <b-tab te="Zapisane CV">
            <template v-slot:title>
              <b-icon
                icon="cloud-download"
                title="d"
                aria-hidden="true"
              ></b-icon>
              <span> Zapisane</span>
            </template>
            <FileUpload />
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
      ></b-navbar>
    </div>
  </b-jumbotron>
</template>

<script>
import firebase from "firebase";
import router from "../router.js";
import FileUpload from "./FileUpload.vue";
import EducationForm from "./EducationForm.vue";
import JobForm from "./JobForm.vue";
import LanguageForm from "./LanguageForm.vue";
import PersonalData from "./PersonalData.vue";
import CvData from "./CvData.vue";

export default {
  name: "Home",
  components: {
    FileUpload,
    EducationForm,
    JobForm,
    LanguageForm,
    PersonalData,
    CvData,
  },
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
#jumbotron {
  min-height: 100vh;
  margin: 0%;
  flex-direction: column;
  justify-content: center;
}
#main-container {
  width: 80%;
  margin: 0 auto;
  display: block;
  justify-content: center;
}
#Brand {
  font-family: "Fira Code", mono;
}
</style>
