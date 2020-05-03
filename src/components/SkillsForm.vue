<template>
  <footer>
    <form role="form">
      <div>
        <div class="form-group">
          <label>Umiejętność</label>
          <input v-model="skill" type="text" class="form-control" />
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
  name: "SkillsForm",
  data() {
    return {
      skill: "",
      saved: false
    };
  },
  methods: {
    saveData: function() {
      this.saved = true;
      this.$emit("saveData", this.skill);
      setTimeout(() => (this.saved = false), 1000);
    },
    clearForm() {
      this.skill = "";
    }
  }
};
</script>

<style lang="css" scoped></style>
