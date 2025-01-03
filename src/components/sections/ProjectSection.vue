<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Define projects
const projects = [
  {
    key: 'pokedex',
    tags: ['Figma', 'React-native', 'JavaScript', 'PhaserJS'],
    image: 'pokeapp.png',
    link: 'https://example2.com',
  },
  {
    key: 'malwareLab',
    tags: ['Python', 'Cuckoo Sandbox', 'YARA', 'Wireshark'],
    image: 'malware.png',
    link: 'https://example2.com',
  },
  {
    key: 'cityDashboard',
    tags: ['Vue3.JS', 'JavaScript', 'MapBox', 'Tailwind'],
    image: 'city-dashboard.png',
    link: 'https://example.com',
  },
  {
    key: 'bunnyHunt',
    tags: ['Figma', 'JavaScript', 'SpringBoot', 'Vue3.JS', 'PhaserJS'],
    image: 'bunny-hunt.png',
    link: 'https://example2.com',
  },
]

const localizedProjects = computed(() =>
  projects.map((project) => ({
    title: t(`projects.${project.key}.title`),
    description: t(`projects.${project.key}.description`),
    tags: project.tags,
    image: project.image,
    link: project.link,
  })),
)
</script>

<template>
  <section class="projects slide-in-left" id="projects">
    <h1 class="mb-5">{{ t('projects.title') }}</h1>
    <div class="project-container">
      <div v-for="(project, index) in localizedProjects" :key="index" class="project-card">
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
