<template>
  <section class="content">
    <NavBar />
    <AboutComponent />
  </section>
</template>

<script>
import AboutComponent from './About.vue';
import NavBar from './NavBar.vue';

export default {
  name: 'DetailsComponent',
  components: {
    AboutComponent,
    NavBar,
  },
};
</script>

<style scoped>
.content {
  background-color: #171519;
  padding: 20px 30px;
  border-radius: 10px;
}

@media only screen and (max-width: 1023px) {
  .content {
    background-color: #090807;
    padding: 20px;
  }
}
</style>
