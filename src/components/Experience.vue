<template>
  <section class="experience">
    <h3>Experience</h3>
    <section>
      <CardComponent
        class="card-container"
        v-for="exp in experience"
        :key="exp.index"
        :imgSrc="exp.imgSrc"
        :title="exp.title"
        :desc="exp.desc"
        :link="null"
        :pageType="null"
      />
    </section>
  </section>
</template>

<script>
import CardComponent from './Card.vue';

export default {
  name: 'ExperienceComponent',
  components: {
    CardComponent,
  },
  data() {
    return {
      experience: [
        {
          index: 1,
          imgSrc: 'https://i0.wp.com/ceiamag.com/wp-content/uploads/2021/03/afaqs_2020-12_71dc202e-f873-4598-baa8-b9236beacfd2_Swiggy_PNG_Logo.jpg?fit=1200%2C1200&ssl=1',
          title: 'Swiggy',
          desc: 'Associate Software Development Engineer',
        },
        {
          index: 1,
          imgSrc: 'https://s3-symbol-logo.tradingview.com/amazon--600.png',
          title: 'Amazon',
          desc: 'Software Development Engineer Intern',
        },
        {
          index: 2,
          imgSrc: 'https://photos.wellfound.com/startups/i/7691030-3b7944c2101db0a6ae68c24033947cfa-medium_jpg.jpg?buster=1589282986',
          title: 'HumourBaba',
          desc: 'UI/UX Intern',
        },
      ],
    };
  },
};
</script>

<style scoped>
.experience > section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.experience h3 {
  font-size: 24px;
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
