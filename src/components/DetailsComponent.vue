<template>
  <section class="content">
    <NavBar />
    <AboutComponent />
    <EducationComponent />
    <ExperienceComponent />
  </section>
</template>

<script>
import AboutComponent from './About.vue';
import NavBar from './NavBar.vue';
import EducationComponent from './Education.vue';
import ExperienceComponent from './Experience.vue';

export default {
  name: 'DetailsComponent',
  components: {
    AboutComponent,
    NavBar,
    EducationComponent,
    ExperienceComponent,
  },
};
</script>

<style scoped>
.content {
  background-color: #171519;
  padding: 20px 30px;
  border-radius: 10px;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  background: transparent;
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #272529;
  border-radius: 2px;
  padding: 10px;
}

@media only screen and (max-width: 1023px) {
  .content {
    background-color: #090807;
    padding: 20px;
  }
}
</style>
