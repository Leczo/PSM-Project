<template>
  <b-jumbotron fluid id="jumbotron">
    <div id="main-container">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@3/distr/fira_code.css"
      />

      <b-card no-body>
        <b-tabs card>
          <b-tab title="Główna" active>
            <template v-slot:title>
              <b-icon icon="house-fill" title="d" aria-hidden="true"></b-icon>
              <span></span>
            </template>
            <b-card-text>
              <div class="cvData">
                <h2>Twoje Dane:</h2>
                {{ cvData }}
              </div>
            </b-card-text>
          </b-tab>
          <b-tab title="Uzupełnij Dane">
            <template v-slot:title>
              <b-icon icon="pencil-square" title="d" aria-hidden="true"></b-icon>
              <span>Uzupełnij Dane</span>
            </template>
            <b-card-text>
              <div>
                <div>
                  <b-card no-body>
                    <b-tabs justified variant="secondary" card vertical nav-wrapper-class="w-50">
                      <b-tab alingn="left" title="Dane Osobowe" active>
                        <b-card-text>
                          <strong>Dane Osobowe</strong>
                        </b-card-text>
                        <PersonalData v-on:saveData="updateData"></PersonalData>
                      </b-tab>

                      <b-tab title="Edukacja">
                        <b-card-text>
                          <strong>Edukacja</strong>
                        </b-card-text>
                        <EducationForm v-on:saveData="saveEducationData"></EducationForm>
                      </b-tab>
                      <b-tab title="Praca">
                        <b-card-text>
                          <strong>Praca</strong>
                        </b-card-text>
                        <JobForm v-on:saveData="saveJobForm"></JobForm>
                      </b-tab>
                      <b-tab title="Języki">
                        <b-card-text>
                          <strong>Języki</strong>
                        </b-card-text>
                        <LanguageForm v-on:saveData="saveLanguageData"></LanguageForm>
                      </b-tab>
                    </b-tabs>
                  </b-card>
                </div>
              </div>
            </b-card-text>
          </b-tab>

          <b-tab te="Zapisane CV">
            <template v-slot:title>
              <b-icon icon="cloud-download" title="d" aria-hidden="true"></b-icon>
              <span>Zapisane</span>
            </template>
            <FileUpload />
          </b-tab>
        </b-tabs>
      </b-card>
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

export default {
  name: "Home",
  components: {
    FileUpload,
    EducationForm,
    JobForm,
    LanguageForm,
    PersonalData
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => router.replace("/"));
    },
    updateData(event) {
      this.cvData.personalData = event;
    },
    saveEducationData(event) {
      let tempStartDate =
        event.startDate.toString().substring(4, 7) +
        "/" +
        event.startDate.toString().substring(11, 15);
      let tempEndDate =
        event.endDate.toString().substring(4, 7) +
        "/" +
        event.endDate.toString().substring(11, 15);

      let data = {
        universityName: event.universityName,
        major: event.major,
        startDate: tempStartDate,
        endDate: tempEndDate
      };

      this.cvData.education.push(data);
    },
    saveJobForm(event) {
      let data = {
        position: event.position,
        companyName: event.companyName
      };
      this.cvData.work.push(data);
    },
    saveLanguageData(event) {
      let data = {
        language: event.language,
        level: event.level
      };
      this.cvData.languages.push(data);
    }
  },
  data() {
    return {
      cvData: {
        personalData: {},
        languages: [],
        education: [],
        work: []
      }
    };
  }
};
</script>

<style scoped>
#jumbotron {
  margin: 0%;
}

#Brand {
  font-family: "Fira Code", mono;
}
</style>
