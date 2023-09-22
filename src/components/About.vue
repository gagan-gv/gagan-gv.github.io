<template>
  <section class="about">
    <h1>Hey there, I'm Gagan Chordia.</h1>
    <p>
      An imaginative creator, blending aesthetics and innovation into digital landscapes,
      poised to shape the future with designs and code that unlock boundless possibilities.
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
  background: #1db954;
  color: #fff;
  max-width: 3fr;
  height: max-content;
  padding: 20px 10px;
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
