<template>
  <form role="form">
    <div>
      <div class="form-group">
        <label>Nazwa placówki</label>
        <input v-model="educationData.universityName" class="form-control" />
      </div>
      <div class="form-group">
        <label>Profil</label>
        <input v-model="educationData.major" type="text" class="form-control" />
      </div>

      <div class="form-group">
        <label>Data rozpoczęcia</label>
        <div class="block">
          <el-date-picker
            v-model="educationData.startDate"
            type="month"
            format="MM/yyyy"
            placeholder="Wybierz miesiąc"
          ></el-date-picker>
        </div>
      </div>
      <div class="form-group">
        <label>Data zakończenia lub przewidywana data zakończenia.</label>
        <div class="block">
          <el-date-picker
            v-model="educationData.endDate"
            type="month"
            placeholder="Wybierz miesiąc"
            format="MM/yyyy"
          ></el-date-picker>
        </div>
      </div>

      <button type="button" class="btn btn-primary" @click="saveData(); clearForm()">Dodaj</button>
      <button type="reset" class="btn btn-default">Resetuj</button>
      <br />
      <br />
      <b-alert v-if="saved" show variant="success">Dane zostały pomyślnie dodane.</b-alert>
    </div>
  </form>
</template>

<script>
//import db from "firebase";
export default {
  name: "EductionForm",
  data() {
    return {
      educationData: {
        universityName: "",
        major: "",
        startDate: null,
        endDate: null
      },
      saved: false
    };
  },
  methods: {
    saveData: function() {
      this.saved = true;
      this.$emit("saveData", this.educationData);
      setTimeout(() => (this.saved = false), 1000);
    },
    clearForm() {
      this.educationData.universityName = "";
      this.educationData.major = "";
      this.educationData.startDate = "";
      this.educationData.endDate = "";
    }
  }
};
</script>

<style lang="css" scoped></style>
