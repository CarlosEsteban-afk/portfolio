<script setup lang="ts">
import SkillCategory from '../SkillCategory.vue'
const programmingLanguages = [
  { name: 'JavaScript', path: './icons/javascript.svg', color: '#F0DB4F' },
  { name: 'TypeScript', path: './icons/typescript.svg', color: '#007ACC' },
  { name: 'Python', path: './icons/python.svg', color: '#3572A5' },
  { name: 'Java', path: './icons/java.svg', color: '#B07219' },
]
const frameworks = [
  { name: 'React', path: './icons/react.svg', color: '#61DAFB' },
  { name: 'Astro', path: './icons/astro.svg', color: '#FFA94D' },
  { name: 'Vue.js', path: './icons/vue.svg', color: '#42B983' },
  { name: 'Spring', path: './icons/spring.svg', color: '#6DB33F' },
  { name: 'Next.js', path: './icons/nextjs.svg', color: '#0070FB' },
]

const tools = [
  { name: 'Git', path: './icons/git.svg', color: '#F05032' },
  { name: 'Docker', path: './icons/docker.svg', color: '#2496ED' },
  { name: 'Linux', path: './icons/linux.svg', color: '#FFFFFF' },
  { name: 'Figma', path: './icons/figma.svg', color: '#F24E1E' },
]
const bases = [
  { name: 'MongoDB', path: './icons/mongodb.svg', color: '#4DB33D' },
  { name: 'PostgreSQL', path: './icons/postgresql.svg', color: '#336791' },
  { name: 'MySQL', path: './icons/mysql.svg', color: '#4479A1' },
]
</script>

<template>
  <section class="skills slide-in-right">
    <h1 class="title-metal">Mis Habilidades</h1>
    <div class="skill-container">
      <SkillCategory title="Lenguajes de Programación" :skills="programmingLanguages" />
      <SkillCategory title="Frameworks y Librerías" :skills="frameworks" />
      <SkillCategory title="Tecnologías y Herramientas" :skills="tools" />
      <SkillCategory title="Bases de Datos" :skills="bases" />
    </div>
  </section>
</template>

<style scoped>
.skills {
  margin-bottom: 10vh;
}
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
