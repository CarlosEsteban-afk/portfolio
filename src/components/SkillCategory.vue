<script setup lang="ts">
import SkillCard from '@/components/SkillCard.vue'
import { computed } from 'vue'

const props = defineProps<{
  title?: string
  skills?: Array<{ name: string; path: string; color?: string }>
}>()

const skills = computed(() => props.skills ?? [])
</script>

<template>
  <div class="skills-category">
    <h3 class="skill-title">{{ title }}</h3>
    <div class="skills-grid">
      <SkillCard
        v-for="skill in skills"
        :key="skill.name"
        :name="skill.name"
        :path="skill.path"
        :color="skill.color"
      />
    </div>
  </div>
</template>

<style scoped>
.skills-category {
  padding: 1rem;
}

.skills-category h3 {
  text-align: center;
  background: linear-gradient(45deg, #811a00, #d35b00);
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 0.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}
</style>
