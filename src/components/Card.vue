<template>
  <section class="card-container">
    <img :src="imgSrc" :alt="title" />
    <h4>{{ title }}</h4>
    <p>{{ desc }}</p>
  </section>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    imgSrc: String,
    title: String,
    desc: String,
  },
};
</script>

<style scoped>
.card-container {
  width: 200px;
  height: max-content;
  padding: 12px;
  background-color: #1d1a1f;
  border-radius: 5px;
  margin: 20px 0;
  transition: all 0.5s;
  -o-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
}

.card-container img {
  width: 175px;
  border-radius: 2px;
  background-color: #fff;
  padding: 15px;
}

.card-container h4,
.card-container p {
  margin: 10px 0;
}

.card-container p {
  font-size: 14px;
  color: #e5e5e5;
}

.card-container:hover {
  background-color: #2d2a2f;
}

@media only screen and (max-width: 1023px) {
  .card-container {
    padding: 0;
    background-color: #090807;
    display: flex;
    flex-direction: column;
    width: 150px;
  }

  .card-container h4,
  .card-container p {
    margin: 2.5px 0;
  }

  .card-container h4 {
    margin-top: 15px;
  }

  .card-container:hover {
    background-color: #090807;
  }
}
</style>
