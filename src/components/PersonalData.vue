<template>
  <form role="form">
    <div>
      <div class="form-group">
        <label>Imię</label>
        <input v-model="personData.name" class="form-control" />
      </div>
      <div class="form-group">
        <label>Nazwisko</label>
        <input v-model="personData.surname" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>Numer telefonu</label>
        <input
          v-model="personData.phoneNumber"
          type="text"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input v-model="personData.email" type="text" class="form-control" />
      </div>

      <button
        style="display:block;margin: auto;"
        type="button"
        class="btn btn-primary"
        @click="saveData()"
      >
        Zapisz
      </button>
      <br />
      <br />
      <b-alert v-if="saved" show variant="success"
        >Dane zostały pomyślnie zapisane.</b-alert
      >
    </div>
  </form>
</template>

<script>
export default {
  name: "PersonalData",
  data() {
    return {
      personData: {
        name: "",
        surname: "",
        email: "",
        phoneNumber: "",
      },
      saved: false,
    };
  },
  components: {},
  methods: {
    saveData: function() {
      this.saved = true;
      this.$emit("saveData", this.personData);
      setTimeout(() => (this.saved = false), 1000);
    },
  },
};
</script>

<style lang="css" scoped></style>
