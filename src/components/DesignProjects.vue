<template>
  <section class="design projects">
    <h3>Projects - Design</h3>
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
          imgSrc: require('@/assets/images/ek-rakht.png'),
          title: 'Ek Rakht',
          desc: 'An application design for a blood donation app',
          link: 'https://www.behance.net/gallery/157046333/Ek-Rakht-Blood-Donation-App',
          pageType: 'behance',
        },
        {
          index: 2,
          // eslint-disable-next-line global-require
          imgSrc: require('@/assets/images/code-script.png'),
          title: 'Code Script',
          desc: 'A case study on code to image converter apps.',
          link: 'https://www.behance.net/gallery/146008979/Code-Script-A-UXUI-Case-Study',
          pageType: 'behance',
        },
        {
          index: 3,
          // eslint-disable-next-line global-require
          imgSrc: require('@/assets/images/alcsplash.png'),
          title: 'AlcSplash',
          desc: 'A marketplace mobile design for alcohols.',
          link: 'https://www.behance.net/gallery/128924549/AlcSplash',
          pageType: 'behance',
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
  height: 10px;
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
