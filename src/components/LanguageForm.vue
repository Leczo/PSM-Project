<template>
  <div>
    <form role="form">
      <div>
        <div class="form-group">
          <label>Język</label>
          <input class="form-control" placeholder="Kaszubski" />
        </div>
        <div>
          <b-form-group label="Poziom Języka">
            <b-form-radio v-model="selected" name="some-radios" value="A">
              A1</b-form-radio
            >
            <b-form-radio v-model="selected" name="some-radios" value="B">
              A2</b-form-radio
            >
            <b-form-radio v-model="selected" name="some-radios" value="B">
              B1</b-form-radio
            >
            <b-form-radio v-model="selected" name="some-radios" value="A">
              B2</b-form-radio
            >
            <b-form-radio v-model="selected" name="some-radios" value="B">
              C1</b-form-radio
            >
            <b-form-radio v-model="selected" name="some-radios" value="B">
              C2</b-form-radio
            >
            <b-form-radio v-model="selected" name="some-radios" value="B">
              Native</b-form-radio
            >
          </b-form-group>
        </div>
        <button type="submit" class="btn btn-primary">Dodaj</button>
        <button type="reset" class="btn btn-default">Resetuj</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
};
</script>
