<template>
  <section class="dev projects">
    <h3>Projects - Development</h3>
    <section>
      <CardComponent
        class="card-container"
        v-for="proj in projects"
        :key="proj.index"
        :imgSrc="proj.imgSrc"
        :title="proj.title"
        :desc="proj.desc"
        :link="proj.link"
        :pageType="proj.pageType"
      />
    </section>
  </section>
</template>

<script>
import CardComponent from './Card.vue';

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      projects: [
        {
          index: 1,
          // eslint-disable-next-line global-require
          imgSrc: require('@/assets/images/mail-flock.png'),
          title: 'Mail Flock',
          desc: 'Cold mailing app built with spring boot & vue.js',
          link: 'https://github.com/gagan-gv/mail-flock',
          pageType: 'github',
        },
        {
          index: 2,
          // eslint-disable-next-line global-require
          imgSrc: require('@/assets/images/codon.png'),
          title: 'Codon',
          desc: 'A basic code editor built with python.',
          link: 'https://github.com/gagan-gv/Code-Editor',
          pageType: 'github',
        },
        {
          index: 3,
          // eslint-disable-next-line global-require
          imgSrc: require('@/assets/images/covid-daily.jpg'),
          title: 'COVID Daily',
          desc: 'An app which shows the statistics of Covid cases.',
          link: 'https://dumblabs-co.github.io/coviddaily/',
          pageType: 'web',
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects > section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
}

.projects h3 {
  font-size: 24px;
  margin-top: 15px;
}

::-webkit-scrollbar {
  background: transparent;
  height: 5px;
}

::-webkit-scrollbar-thumb {
  background-color: #272529;
  border-radius: 2px;
  padding: 10px;
}

@media only screen and (max-width: 1023px) {
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
