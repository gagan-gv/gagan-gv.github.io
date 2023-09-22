<template>
  <nav class="navbar">
    <ul>
      <li>
        <button class="resume-btn" @click="downloadResume">
          <i class="fas fa-circle-down"></i><span>Download Resume</span>
        </button>
      </li>
      <li>
        <img class="logo" src="@/assets/images/logo.png" alt="Logo">
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    downloadResume() {
      const link = document.createElement('a');
      link.href = '@/assets/resume/Gagan Chordia - Resume.pdf';
      link.download = 'Gagan Chordia - Resume.pdf';

      link.click();
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  height: 60px;
}

.navbar > ul {
  list-style: none;
}

.navbar > ul > li {
  display: inline-block;
}

.navbar .logo {
  width: 30px;
  transform: translateY(10px);
}

.navbar .resume-btn {
  position: relative;
  outline: none;
  background-color: #090807;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px;
  font-family: 'Gotham', sans-serif;
  font-weight: 500;
  margin: 10px;
  cursor: pointer;
  -o-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.navbar .resume-btn:hover {
  transform: scale(1.04);
}

.navbar .resume-btn i {
  margin: 0 5px;
}

@media only screen and (max-width: 1023px) {
  .navbar .resume-btn {
    font-size: 16px;
  }
}
</style>
