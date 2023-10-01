<template>
  <footer class="footer">
    <section>
      <h2>Let's collaborate and</h2>
      <h3>build something great together.</h3>
      <a href="mailto:gaganchordia@proton.me" target="_blank"><button>Get in touch</button></a>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.footer {
  padding: 20px 0;
  text-align: center;
}

.footer > section {
  margin: 10px auto;
}

.footer h2 {
    font-size: 32px;
    margin: 10px 0;
}

.footer h3 {
    font-size: 28px;
    margin: 10px 0;
}

.footer button {
  outline: none;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 10px;
  font-family: 'Gotham', sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  -o-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  min-width: 150px;
}

.footer button:hover {
  transform: scale(1.04);
}

@media only screen and (max-width:1023px) {
  .footer button {
    margin-bottom: 15px;
  }

  .footer button:hover {
    transform: none;
  }

  .footer h2 {
    font-size: 28px;
  }

  .footer h3 {
    font-size: 24px;
  }
}
</style>
