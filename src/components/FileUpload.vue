<template>
  <div>
    <h2>Twoje CV:</h2>
    <b-row id="element">
      <b-col>
        <p>JAKIEŚ CV --------</p>
      </b-col>
      <b-col> </b-col>
      <b-col>
        <b-button squared variant="success">Pobierz</b-button>
        <b-button squared variant="danger">Usuń</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      file2: null,
    };
  },
};
</script>

<style scoped>
#element {
  margin: 0 auto;

  justify-content: center;
}
</style>
