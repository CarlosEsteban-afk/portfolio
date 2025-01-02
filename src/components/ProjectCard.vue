<script setup lang="ts">
const props = defineProps<{
  title?: string
  description?: string
  link?: string
  tags?: string[]
  image?: string
}>()
</script>
<template>
  <div class="project-text">
    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
    <div class="tags">
      <span v-for="tag in props.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
  <img class="project-image" :src="props.image" :alt="props.title" />
</template>

<style scoped>
.project-text {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
}

.project-text h3 {
  font-size: 1.5rem;
  margin: 0;
}

.project-text p {
  font-size: 1rem;
  color: #c9d1d9;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #21262d;
  color: #58a6ff;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.9rem;
}
.project-image {
  width: 50%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .project-image {
    width: 100%;
    padding: 1rem;
  }
  .project-text {
    width: 100%;
    padding: 1rem;
  }
  .project-image img {
    max-height: 300px;
    object-fit: cover;
  }
}
</style>
