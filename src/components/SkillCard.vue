<script setup lang="ts">
const props = defineProps({
  name: String,
  path: String,
  color: String,
})
</script>

<template>
  <div
    class="skill-card"
    :style="{
      '--hover-shadow-color': props.color || 'var(--accent-color)',
    }"
  >
    <img :src="path" :alt="name" class="skill-icon" />
    <p class="skill-name">{{ name }}</p>
  </div>
</template>

<style scoped>
.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px var(--hover-shadow-color);
}

.skill-icon {
  width: 50px;
  height: 50px;
  margin-top: 0.6rem;
  filter: invert(1);
}

.skill-name {
  font-size: 0.9rem;
  font-weight: bold;
  color: #ffffff;
}
</style>
