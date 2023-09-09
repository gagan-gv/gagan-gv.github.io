<template>
  <main></main>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
};
</script>

<style>
@font-face {
  font-family: "Gotham";
  src: url("@/assets/fonts/GothamBold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Gotham";
  src: url("@/assets/fonts/GothamBook.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Gotham";
  src: url("@/assets/fonts/GothamLight.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Gotham";
  src: url("@/assets/fonts/GothamMedium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

#app {
  font-family: "Gotham", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f1f8f9;
  min-height: 100vh;
  background-color: #090807;
}
</style>
