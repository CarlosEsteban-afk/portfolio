<script setup lang="ts">
const props = defineProps<{
  icon?: string
  name?: string
  link?: string
}>()
</script>
<template>
  <div class="contact-links">
    <a :href="props.link" class="contact-link">
      <img :src="props.icon" alt="LinkedIn Icon" class="contact-icon" />
      {{ props.name }}
    </a>
  </div>
</template>
<style scoped>
.contact-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.contact-link {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333444;
  color: #ffffff;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  font-size: 1rem;
  font-weight: bold;
  gap: 0.8rem;
}

.contact-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  background: #444556;
}

.contact-icon {
  width: 24px;
  height: 24px;
  filter: invert(1);
}

@media (max-width: 768px) {
  .contact-link {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .contact-links {
    gap: 0.5rem;
  }
  .contact-link {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}
</style>
