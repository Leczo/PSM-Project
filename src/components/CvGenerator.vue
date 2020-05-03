<template>
  <div>
    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 text-center">
            <h1 class="font-weight-light">Curriculum Vitae</h1>
            <h1 class="uname">{{ data.personalData.name}} {{ data.personalData.surname}}</h1>
            <section>
              <h2>Adres email: {{ data.personalData.email }}</h2>
              <h2>Numer telefonu: {{ data.personalData.phoneNumber }}</h2>
            </section>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="container">
        <h3>Umiejętności</h3>
        <div class="skills">
          <ul>
            <li v-for="skill in data.skillset" :key="skill">{{skill}}</li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="container">
        <h3>Znajomość językow obcych</h3>
        <div class="skills">
          <ul>
            <li v-for="lang in data.languages" :key="lang.language">{{lang.language}} {{lang.level}}</li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="container">
        <h3>Edukacja</h3>
        <div v-for="edu in data.education" :key="edu.major" class="education">
          <span>{{ edu.startDate }} - {{ edu.endDate }}</span>
          <strong>{{ edu.universityName }}</strong>
          <div class="description">{{edu.major }}</div>
        </div>
      </div>
      <hr />
      <div class="container">
        <h3>Doświadczenie</h3>
        <div v-for="job in data.work" :key="job.companyName">
          <div class="job-title">
            <strong>Firma:</strong>
            {{job.companyName }}
            <br />
          </div>
          <div class="description">
            <strong>Stanowisko:</strong>
            {{ job.position }}
          </div>
        </div>
      </div>
    </main>
    <b-button variant="outline-primary" @click="savePDF()">Wygeneruj CV do pliku pdf</b-button>
  </div>
</template>

<script>
import jsPDF from "jspdf";
export default {
  name: "FirstTemplate",

  props: ["data"],
  methods: {
    savePDF() {
      var doc = new jsPDF();
      var fullName =
        this.data.personalData.name.toUpperCase() +
        " " +
        this.data.personalData.surname.toUpperCase();
      //CV
      doc.setFontSize(22);
      doc.setFontStyle("bold");
      doc.text("CURRICULUM VITAE", 105, 20, null, null, "center");
      //
      doc.setFontSize(16);
      doc.setFontStyle("normal");
      doc.text(fullName, 105, 30, "center");
      //
      doc.setFontSize(18);
      doc.setFontStyle("bold");
      doc.text("Adres email: ", 105, 40, "center");
      doc.setFontStyle("normal");
      doc.setFontSize(16);
      doc.text(this.data.personalData.email, 105, 50, "center");
      //
      doc.setFontSize(18);
      doc.setFontStyle("bold");
      doc.text("Numer telefonu:", 105, 60, "center");

      doc.setFontSize(16);
      doc.setFontStyle("normal");
      doc.text(this.data.personalData.phoneNumber, 105, 70, "center");
      ////

      doc.setFont("helvetica");
      doc.setFontSize(18);
      doc.setFontStyle("bold");
      doc.text("UMIEJETNOSCI", 20, 100);
      doc.setFontSize(14);
      doc.setFontStyle("normal");

      let yAxisPosition = 110;
      for (var i = 0; i < this.data.skillset.length; i++) {
        doc.text(this.data.skillset[i], 20, yAxisPosition);
        yAxisPosition += 10;
      }

      doc.line(1, 120, 303, yAxisPosition); // horizontal line

      yAxisPosition += 10;
      doc.setFont("helvetica");
      doc.setFontStyle("bold");
      doc.setFontSize(18);
      doc.text("ZNAJOMOSC JEZYKOW OBCYCH", 20, yAxisPosition);
      yAxisPosition += 10;
      doc.setFontStyle("normal");
      doc.setFontSize(14);
      for (var j = 0; j < this.data.languages.length; j++) {
        var temp1 =
          this.data.languages[j].language + " " + this.data.languages[j].level;
        doc.text(temp1, 20, yAxisPosition);
        yAxisPosition += 10;
      }

      doc.line(1, 150, 303, yAxisPosition); // horizontal line
      yAxisPosition += 10;
      doc.setFont("helvetica");
      doc.setFontStyle("bold");
      doc.setFontSize(18);
      doc.text("EDUKACJA", 20, yAxisPosition);
      yAxisPosition += 10;
      doc.setFontStyle("normal");
      doc.setFontSize(14);
      for (var k = 0; k < this.data.education.length; k++) {
        var temp2 =
          this.data.education[k].startDate +
          "-" +
          this.data.education[k].endDate +
          ", " +
          this.data.education[k].universityName +
          " - " +
          this.data.education[k].major;
        doc.text(temp2, 20, yAxisPosition);
        yAxisPosition += 10;
      }

      doc.line(1, 180, 303, yAxisPosition); // horizontal line
      yAxisPosition += 10;
      doc.setFont("helvetica");
      doc.setFontSize(18);
      doc.setFontStyle("bold");
      doc.text("DOSWIADCZENIE", 20, yAxisPosition);
      yAxisPosition += 10;
      doc.setFontSize(14);
      doc.setFontStyle("normal");
      for (var l = 0; l < this.data.work.length; l++) {
        var temp3 =
          this.data.work[l].companyName +
          ", stanowisko: " +
          this.data.work[l].position;
        doc.text(temp3, 20, yAxisPosition);
        yAxisPosition += 10;
      }
      doc.save("CV.pdf");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway");

.container {
  padding: 15px;
}
h1 {
  text-transform: uppercase;
  margin: 1em 0;
}

h3 {
  text-transform: uppercase;
  font-weight: bold;
}

.description {
  padding: 0 1em;
}

.courses,
.skills {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.courses .title {
  color: #008080;
}

.course p {
  padding-left: 1em;
}

.skills .column {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

.skills ul {
  list-style-type: none;
}

.skills ul > li:before {
  content: "►";
  padding-right: 1em;
  color: #509e98;
}

.school,
.job-title {
  text-transform: capitalize;
  padding: 0 1em;
}

.education span,
.job-title span {
  color: #889499;
  text-decoration: underline;
  padding: 0 1em;
}
/* too bootstrap */
.masthead {
  min-height: 350px;
  background-size: cover;
  background-position: fixed;
  background-repeat: no-repeat;
}
</style>