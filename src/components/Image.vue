<template>
  <section class="img-container"></section>
</template>

<script>
export default {
  name: 'ImageComponent',
};
</script>

<style scoped>
.img-container {
  min-height: 545px;
  width: 350px;
  position: relative;
  background-image: url("@/assets/images/gagan.jpg");
  background-size: 450px;
  background-color: #171519;
  border-radius: 10px;
  background-position: -40px 0;
  transition: all 0.5s;
  margin-top: 20px;
}

.img-container:hover {
  background-size: 500px;
  background-position: -65px 0;
}

@media only screen and (max-width: 1023px) {
    .img-container {
      display: none;
    }
}
</style>
