<template>
  <section class="education">
    <h3>Education</h3>
    <section v-for="edu in education" :key="edu.index">
      <CardComponent :imgSrc="edu.imgSrc" :title="edu.title" :desc="edu.desc" />
    </section>
  </section>
</template>

<script>
import CardComponent from './Card.vue';

export default {
  name: 'EducationComponent',
  components: {
    CardComponent,
  },
  data() {
    return {
      education: [
        {
          index: 1,
          imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/1200px-Vellore_Institute_of_Technology_seal_2017.svg.png',
          title: 'VIT Vellore',
          desc: 'B.Tech in CSE (2019 - 2023)',
        },
      ],
    };
  },
};
</script>

<style scoped>
.education {
  margin: 30px 0;
}

.education h3 {
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
