<template>
  <div>
    <h2>Twoje Dane:</h2>
    <div>
      <b-form-group label="Individual radios">
        <b-form-radio v-model="selected" name="some-radios" value="1"
          >Szablon 1</b-form-radio
        >
        <b-form-radio v-model="selected" name="some-radios" value="2"
          >Szablon 2</b-form-radio
        >
      </b-form-group>

      <div class="mt-3">
        Selected: <strong>{{ selected }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CvData",
  data() {
    return {
      selected: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
