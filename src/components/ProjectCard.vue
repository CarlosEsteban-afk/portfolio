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
  <!-- Left Section -->
  <div class="project-text">
    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
    <div class="tags">
      <span v-for="tag in props.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>

  <!-- Right Section -->
  <div class="project-image">
    <img :src="props.image" :alt="props.title" />
  </div>
</template>

<style scoped>
.project-text {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%; /* Take up half of the card width */
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 50%; /* Take up the other half of the card */
}

.project-image img {
  width: 100%; /* Make the image fill the container */
  object-fit: cover;
  border-radius: 10px;
}
/* Responsive Design for smaller screens */
@media (max-width: 768px) {
  .project-image {
    width: 100%; /* Allow image to take full width */
    padding: 1rem; /* Adjust padding */
  }
  .project-text {
    width: 100%; /* Allow text to take full width on smaller screens */
    padding: 1rem; /* Adjust padding */
  }
  .project-image img {
    max-height: 300px; /* Optional: limit the height of the image on small screens */
    object-fit: cover; /* Ensure the image covers the available space */
  }
}
</style>
