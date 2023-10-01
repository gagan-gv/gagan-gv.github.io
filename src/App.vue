<template>
  <main class="container">
    <aside class="aside">
      <ContactComponent />
      <ImageComponent />
    </aside>
    <DetailsComponent class="content" />
  </main>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import ContactComponent from '@/components/Contact.vue';
import ImageComponent from '@/components/Image.vue';
import DetailsComponent from './components/DetailsComponent.vue';

export default {
  name: 'App',
  components: {
    ContactComponent,
    ImageComponent,
    DetailsComponent,
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

.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  max-height: 100vh;
  grid-template-areas: "Aside Content";
}

.aside {
  grid-area: Aside;
  position: fixed;
  z-index: 1;
  margin: 20px 0;
  top: 0;
}

.content {
  grid-area: Content;
  max-height: calc(100vh - 40px);
}

@media only screen and (max-width: 1023px) {
  #app {
    padding: 0;
  }

  .container {
    display: block;
  }
}
</style>
