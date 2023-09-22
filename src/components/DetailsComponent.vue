<template>
  <section class="content">
    <AboutComponent />
  </section>
</template>

<script>
import AboutComponent from './About.vue';

export default {
  name: 'DetailsComponent',
  components: {
    AboutComponent,
  },
};
</script>

<style scoped>
.content {
  background-color: #171519;
  padding: 20px 30px;
  border-radius: 20px;
}

@media only screen and (max-width: 1023px) {
  .content {
    background-color: #090807;
    padding: 20px;
  }
}
</style>
