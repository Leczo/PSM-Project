<template>
  <div>
    <b-navbar
      toggleable
      fixed="bottom"
      sticky="true"
      type="dark"
      variant="dark"
    >
      <b-navbar-brand id="Brand">
        <strong>Cv Generator</strong>
      </b-navbar-brand>

      <b-dropdown right text="Right align" variant="secondary">
        <template v-slot:button-content>
          <b-icon icon="power" aria-hidden="true"></b-icon>
        </template>
        <b-dropdown-item @click="logout()">Wyloguj</b-dropdown-item>
      </b-dropdown>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped></style>
