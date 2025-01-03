<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillSection from '@/components/sections/SkillSection.vue'
import ProjectSection from '@/components/sections/ProjectSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import Header from '@/components/HeaderComponent.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
</script>

<template>
  <main class="portfolio">
    <Header />
    <HeroSection />
    <AboutSection />
    <SkillSection />
    <ProjectSection />
    <ContactSection />
    <FooterSection />
  </main>
</template>

<style>
.red-border {
  border: 2px solid red;
}
.portfolio {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .about,
  .skills,
  .projects,
  .contact {
    margin: 1rem 0;
    padding: 2rem;
    border-radius: 8px;
  }
}
</style>
