<template>
  <section class="about">
    <h1>Hey there, I'm Gagan Chordia.</h1>
    <p>
      A budding creator, eager to explore the vast world of code and design,
      ready to embark on a journey of endless possibilities.
    </p>
  </section>
</template>

<script>
export default {
  name: 'AboutComponent',
};
</script>

<style scoped>
.about {
  background: linear-gradient(90deg, #1DB954 0%, rgba(29, 185, 84, 0.50) 65.42%);
  color: #fff;
  max-width: 3fr;
  height: max-content;
  padding: 20px;
  border-radius: 10px;
}

.about h1 {
  font-size: 56px;
  font-weight: 600;
  margin: 10px 0;
}

.about p {
  font-size: 28px;
  margin: 10px 0;
}

@media only screen and (max-width: 1023px) {
  .about h1 {
    font-size: 36px;
  }

  .about p {
    font-size: 24px;
  }
}
</style>
