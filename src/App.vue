<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="mx-4 my-3">
    <RouterView />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
:root {
  --background-color: #161b22;
  --primary-color: #001f54;
  --secondary-color: #034078;
  --text-color: #a9d6e5;
  --accent-color: #f4d06f;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: 'Arial', sans-serif;
}

a {
  color: var(--accent-color);
}

.about,
.skills,
.projects,
.contact {
  background-color: var(--secondary-color);
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 8px;
}

button {
  background-color: var(--accent-color);
  color: var(--background-color);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: var(--text-color);
  color: var(--primary-color);
}
</style>
