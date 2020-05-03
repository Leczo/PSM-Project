<template>
  <div>
    <h2>Twoje CV:</h2>
    <br />
    <b-container>
      <b-row id="element">
        <b-col>
          <b-button block sm disabled>Twoje cw</b-button>
        </b-col>
        <b-col>
          <b-button-group>
            <b-button sm variant="success">Pobierz</b-button>
            <b-button sm variant="danger">Usuń</b-button>
          </b-button-group>
        </b-col>
      </b-row>
    </b-container>
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
