<script setup lang="ts">
import SkillCategory from '../SkillCategory.vue'
const programmingLanguages = [
  { name: 'JavaScript', path: './icons/javascript.svg' },
  { name: 'TypeScript', path: './icons/typescript.svg' },
  { name: 'Python', path: './icons/python.svg' },
  { name: 'Java', path: './icons/java.svg' },
]
const frameworks = [
  { name: 'React', path: './icons/react.svg' },
  { name: 'Astro', path: './icons/astro.svg' },
  { name: 'Vue.js', path: './icons/vue.svg' },
  { name: 'Spring', path: './icons/spring.svg' },
  { name: 'Next.js', path: './icons/nextjs.svg' },
]

const tools = [
  { name: 'Git', path: './icons/git.svg' },
  { name: 'Docker', path: './icons/docker.svg' },
  { name: 'Linux', path: './icons/linux.svg' },
  { name: 'Figma', path: './icons/figma.svg' },
]
</script>

<template>
  <section class="skills">
    <h1>Skills</h1>
    <div class="skill-container">
      <SkillCategory title="Lenguajes de Programación" :skills="programmingLanguages" />
      <SkillCategory title="Frameworks y Librerías" :skills="frameworks" />
      <SkillCategory title="Tecnologías y Herramientas" :skills="tools" />
    </div>
  </section>
</template>

<style scoped>
.skill-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem;
}

@media (max-width: 768px) {
  .skill-container {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
}
</style>
