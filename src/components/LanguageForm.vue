<template>
  <div>
    <form role="form">
      <div>
        <div class="form-group">
          <label>Język</label>
          <input class="form-control" v-model="languageData.language" />
        </div>
        <div>
          <b-form-group label="Poziom Języka">
            <b-form-radio v-model="languageData.level" name="some-radios" value="A1">A1</b-form-radio>
            <b-form-radio v-model="languageData.level" name="some-radios" value="A2">A2</b-form-radio>
            <b-form-radio v-model="languageData.level" name="some-radios" value="B1">B1</b-form-radio>
            <b-form-radio v-model="languageData.level" name="some-radios" value="B2">B2</b-form-radio>
            <b-form-radio v-model="languageData.level" name="some-radios" value="C1">C1</b-form-radio>
            <b-form-radio v-model="languageData.level" name="some-radios" value="C2">C2</b-form-radio>
            <b-form-radio v-model="languageData.level" name="some-radios" value="native">Native</b-form-radio>
          </b-form-group>
        </div>
        <button type="button" class="btn btn-primary" @click="saveData(); clearForm()">Dodaj</button>
        <button type="reset" class="btn btn-default">Resetuj</button>
        <br />
        <br />
        <b-alert v-if="saved" show variant="success">Dane zostały pomyślnie dodane.</b-alert>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languageData: {
        language: "",
        level: ""
      },
      saved: false
    };
  },
  methods: {
    saveData: function() {
      this.saved = true;
      this.$emit("saveData", this.languageData);
      setTimeout(() => (this.saved = false), 1000);
    },
    clearForm() {
      this.languageData.language = "";
      this.languageData.level = "";
    }
  }
};
</script>
