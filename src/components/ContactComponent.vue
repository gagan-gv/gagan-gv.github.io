<template>
    <section class="contact-tab">
        <a class="links" href="https://www.linkedin.com/in/gagan-chordia/" target="_blank">
            <i class="fa-brands fa-linkedin"></i><span>/in/gagan-chordia</span>
        </a>
        <a class="links" href="https://github.com/gagan-gv/" target="_blank">
            <i class="fa-brands fa-github"></i><span>/gagan-gv</span>
        </a>
        <a class="links" href="https://www.behance.net/gaganchordia" target="_blank">
            <i class="fa-brands fa-behance"></i><span>@gaganchordia</span>
        </a>
        <a class="links" href="mailto:gaganchordia@proton.me" target="_blank">
            <i class="fa-solid fa-envelope"></i><span>Get in Touch</span>
        </a>
    </section>
</template>

<script>
export default {
  name: 'ContactComponent',
};
</script>

<style scoped>
.contact-tab {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    background-color: #171519;
    padding: 20px 30px;
    max-width: 350px;
    border-radius: 10px;
}

.links {
    display: inline-block;
    font-weight: 600;
    color: #e5e5e5;
    text-decoration: none;
    margin: 10px 0;
    font-size: 20px;
}

.links:hover {
    color: #fff;
}

.links > i {
    margin-right: 10px;
}

@media only screen and (max-width: 767px) {
    .contact-tab {
        margin: 0;
        min-width: 100vw;
        border-radius: 0;
        position: fixed;
        bottom: 0;
        flex-direction: row;
        justify-content: space-around;
    }

    .links > span {
        display: none;
    }

    .links > i {
        font-size: 24px;
    }
}

@media only screen and (max-width: 1023px) {
    .contact-tab {
        width: 280px;
    }
}
</style>
