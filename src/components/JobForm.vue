<template>
  <footer>
    <form role="form">
      <div>
        <div class="form-group">
          <label>Stanowisko</label>
          <input v-model="jobData.position" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>Nazwa firmy</label>
          <input v-model="jobData.companyName" type="text" class="form-control" />
        </div>
        <button type="button" class="btn btn-primary" @click="saveData(); clearForm()">Dodaj</button>
        <button type="reset" class="btn btn-default">Resetuj</button>
        <br />
        <br />
        <b-alert v-if="saved" show variant="success">Dane zostały pomyślnie dodane.</b-alert>
      </div>
    </form>
  </footer>
</template>

<script>
export default {
  name: "JobForm",
  data() {
    return {
      jobData: {
        position: "",
        companyName: ""
      },
      saved: false
    };
  },
  methods: {
    saveData: function() {
      this.saved = true;
      this.$emit("saveData", this.jobData);
      setTimeout(() => (this.saved = false), 1000);
    },
    clearForm() {
      this.jobData.position = "";
      this.jobData.companyName = "";
    }
  }
};
</script>

<style lang="css" scoped></style>
