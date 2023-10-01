<template>
  <section class="card-container" v-on="getClickEvent">
    <section>
      <img :src="imgSrc" :alt="title" draggable="false" oncontextmenu="return false" />
      <i v-if="pageType !== null" :class="linkIcon(pageType)"></i>
    </section>
    <h4>{{ title }}</h4>
    <p v-if="desc !== null">{{ desc }}</p>
  </section>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    imgSrc: String,
    title: String,
    desc: String,
    link: String,
    pageType: String,
  },
  methods: {
    openLink(link) {
      window.open(link, '_blank');
    },
    linkIcon(pageType) {
      if (pageType === null) {
        return '';
      }
      if (pageType === 'github') {
        return 'fa-brands fa-github';
      }

      if (pageType === 'behance') {
        return 'fa-brands fa-behance';
      }

      return 'fa-solid fa-globe';
    },
  },
  computed: {
    getClickEvent() {
      return (this.link ? { click: () => this.openLink(this.link) } : {});
    },
  },
};
</script>

<style scoped>
.card-container {
  width: 200px;
  padding: 12px;
  background-color: #1d1a1f;
  border-radius: 5px;
  margin: 20px 20px 20px 0;
  transition: all 0.5s;
  -o-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  cursor: pointer;
}

.card-container img {
  width: 175px;
  border-radius: 2px;
  background-color: #fff;
  padding: 15px;
}

.card-container > section {
  position: relative;
}

.card-container i {
  position: absolute;
  bottom: 0;
  right: 5px;
  background: #1DA954;
  padding: 10px;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.5s;
  -o-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
}

.card-container h4,
.card-container p {
  margin: 10px 0;
}

.card-container p {
  font-size: 14px;
  color: #e5e5e5;
  height: 20px;
}

.card-container:hover {
  background-color: #2d2a2f;
}

.card-container:hover i {
  opacity: 1;
  bottom: 10px;
}

@media only screen and (max-width: 1023px) {
  .card-container {
    padding: 0;
    background-color: #090807;
    width: 150px;
  }

  .card-container img {
    width: 150px;
    padding: 10px;
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

  .card-container:hover i {
    opacity: 0;
  }
}
</style>
