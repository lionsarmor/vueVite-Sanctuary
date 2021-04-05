<template>
  <NavbarSanc />
  <FooterSanc />
</template>

<script>
import NavbarSanc from './components/Navbar.vue'
import FooterSanc from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavbarSanc,
    FooterSanc
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>