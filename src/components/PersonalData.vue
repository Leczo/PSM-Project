<template>
  <form role="form">
    <div>
      <div class="form-group">
        <label>Imię</label>
        <input class="form-control" placeholder="np. Jan" />
      </div>
      <div class="form-group">
        <label>Nazwisko</label>
        <input type="text" placeholder="np. Kowalski" class="form-control" />
      </div>
      <div class="form-group">
        <label>Numer telefonu</label>
        <input
          type="text"
          placeholder="w formacie 000-000-000"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          type="text"
          placeholder="np jan.kowalski@mail.pl"
          class="form-control"
        />
      </div>

      <button type="submit" class="btn btn-primary">Zapisz</button>
    </div>
  </form>
</template>

<script>
//import db from "firebase";

export default {
  name: "PersonalData",
  data() {
    return null;
  },
  components: {},
  methods: {
    saveEdForm: function() {
      return null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
