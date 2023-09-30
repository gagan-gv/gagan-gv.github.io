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
        },
        {
          index: 2,
          // eslint-disable-next-line global-require
          imgSrc: require('@/assets/images/codon.png'),
          title: 'Codon',
          desc: 'A basic code editor built with python.',
        },
        {
          index: 3,
          // eslint-disable-next-line global-require
          imgSrc: require('@/assets/images/covid-daily.jpg'),
          title: 'COVID Daily',
          desc: 'An app which shows the statistics of Covid cases.',
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
</style>
