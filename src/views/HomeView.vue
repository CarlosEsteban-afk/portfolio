<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillSection from '@/components/sections/SkillSection.vue'
import ProjectSection from '@/components/sections/ProjectSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
</script>

<template>
  <main class="portfolio">
    <HeroSection />
    <AboutSection />
    <ProjectSection />
    <SkillSection />
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

.hero {
  text-align: center;
  margin: 2rem 0;
}

.about,
.skills,
.projects,
.contact {
  margin: 2rem 0;
  padding: 1rem;
  border-radius: 8px;
}

.skills ul,
.contact ul {
  list-style: none;
  padding: 0;
}
</style>
