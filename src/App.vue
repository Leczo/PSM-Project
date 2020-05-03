<template>
  <div class="app">
    <Nav></Nav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";

export default {
  components: { Footer, Nav },
};
</script>
