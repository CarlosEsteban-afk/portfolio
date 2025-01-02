<script setup lang="ts">
import ContactIcon from '../ContactIcon.vue'

const icons = [
  { icon: './icons/email.svg', name: 'Email', link: 'c.pena17@ufromail.cl' },
  {
    icon: './icons/linkedin.svg',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/carlos-pe%C3%B1a-trecaman-696b442a4/',
  },
  { icon: './icons/git.svg', name: 'GitHub', link: 'https://github.com/CarlosEsteban-afk' },
]
</script>

<template>
  <footer class="footer">
    <div class="contact-links">
      <div v-for="icon in icons" :key="icon.name">
        <ContactIcon :icon="icon.icon" :name="icon.name" :link="icon.link" />
      </div>
    </div>
    <p>2025 | Carlos Peña</p>
  </footer>
</template>
<style scoped>
.footer {
  align-items: center;
  text-align: center;
}
.contact-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
}
.contact-icon {
  width: 24px;
  height: 24px;
  filter: invert(1);
}
</style>
