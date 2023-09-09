<template>
  <main>
    <ContactComponent />
  </main>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import ContactComponent from '@/components/ContactComponent.vue';

export default {
  name: 'App',
  components: {
    ContactComponent,
  },
};
</script>

<style>
@font-face {
  font-family: "Gotham";
  src: url("@/assets/fonts/GothamBold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
  text-transform: lowercase;
}

@font-face {
  font-family: "Gotham";
  src: url("@/assets/fonts/GothamBook.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  text-transform: lowercase;
}

@font-face {
  font-family: "Gotham";
  src: url("@/assets/fonts/GothamLight.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
  text-transform: lowercase;
}

@font-face {
  font-family: "Gotham";
  src: url("@/assets/fonts/GothamMedium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
  text-transform: lowercase;
}

#app {
  font-family: "Gotham", sans-serif;
  color: #f1f8f9;
  min-height: 100vh;
  background-color: #090807;
  padding: 20px;
}

@media (max-width: 767px) {
  #app {
    padding: 0;
  }
}
</style>
