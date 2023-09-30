<template>
  <section class="skills">
    <h3>Skills</h3>
    <section>
      <CardComponent
        class="card-container"
        v-for="skill in skills"
        :key="skill.index"
        :imgSrc="skill.imgSrc"
        :title="skill.title"
        :desc="null"
      />
    </section>
  </section>
</template>

<script>
import CardComponent from './Card.vue';

export default {
  name: 'SkillsComponent',
  components: {
    CardComponent,
  },
  data() {
    return {
      skills: [
        {
          index: 1,
          imgSrc: 'https://static.vecteezy.com/system/resources/previews/022/101/050/original/java-logo-transparent-free-png.png',
          title: 'Java',
        },
        {
          index: 2,
          imgSrc: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/spring-boot-1_5zDxm9B.jpg',
          title: 'Spring Boot',
        },
        {
          index: 3,
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png',
          title: 'JavaScript',
        },
        {
          index: 4,
          imgSrc: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png',
          title: 'TypeScript',
        },
        {
          index: 5,
          imgSrc: 'https://cdn.changelog.com/uploads/icons/topics/nnG/icon_large.png?v=63694227909',
          title: 'Vue.js',
        },
        {
          index: 6,
          imgSrc: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format',
          title: 'Figma',
        },
        {
          index: 7,
          imgSrc: 'https://logodownload.org/wp-content/uploads/2019/10/adobe-premiere-pro-logo-0-1.png',
          title: 'Premiere Pro',
        },
      ],
    };
  },
};
</script>

<style scoped>
.skills {
  overflow-x: scroll;
}

.skills > section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  -webkit-overflow-scrolling: touch;
}

.skills h3 {
  font-size: 24px;
  margin-top: 15px;
}
</style>
