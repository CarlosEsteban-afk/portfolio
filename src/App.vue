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

.primary-btn,
.secondary-btn {
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.primary-btn {
  background-color: var(--accent-color);
  color: black;
  border: none;
}

.primary-btn:hover {
  background-color: #e5b800;
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.secondary-btn {
  background-color: #444;
  color: white;
  border: none;
}

.secondary-btn:hover {
  background-color: #555;
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
.slide-in-left {
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
