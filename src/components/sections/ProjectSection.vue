<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue'
const projects = [
  {
    title: 'Pokedex',
    description:
      'POC Aplicación movil que muestra una lista de Pokémon utilizando la API de PokeAPI.',
    tags: ['Figma', 'React-native', 'JavaScript', 'PhaserJS'],
    image: 'pokeapp.png',
    link: 'https://example2.com',
  },
  {
    title: 'Malware analysis lab',
    description:
      'Laboratorio de análisis de malware, diseñado para identificar y mitigar amenazas cibernéticas.',
    tags: ['Python', 'Cuckoo Sandbox', 'YARA', 'Wireshark'],
    image: 'malware.png',
    link: 'https://example2.com',
  },
  {
    title: 'City Scope Dashboard',
    description:
      'Dashboard para la plataforma ReplicaCity Temuco, permite visualizar datos de movilidad urbana en tiempo real.',
    tags: ['Vue3.JS', 'JavaScript', 'MapBox', 'Tailwind'],
    image: 'city-dashboard.png',
    link: 'https://example.com',
  },
  {
    title: 'Bunny Hunt',
    description: 'Una prueba de concepto de video juego creado utilizando PhaserJS.',
    tags: ['Figma', 'JavaScript', 'SpringBoot', 'Vue3.JS', 'PhaserJS'],
    image: 'bunny-hunt.png',
    link: 'https://example2.com',
  },
]
</script>
<template>
  <section class="projects slide-in-left" id="projects">
    <h1 class="mb-5">Proyectos</h1>
    <div class="project-container">
      <div v-for="project in projects" :key="project.title" class="project-card">
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
          :image="project.image"
          :link="project.link"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  margin-bottom: 10vh;
}
.project-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem;
}
.project-card {
  display: flex;
  flex-direction: row;
  background: var(--primary-color);
  border-radius: 10px;
  overflow: hidden;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  min-height: 300px;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 1px 10px 15px var(--accent-color);
}

@media (max-width: 768px) {
  .project-container {
    grid-template-columns: 1fr;
  }

  .project-card {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .project-text {
    width: 100%;
    padding: 1rem;
  }
}
</style>
