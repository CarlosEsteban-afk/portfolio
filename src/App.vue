<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
html {
  scroll-padding-top: 60px;
  scroll-behavior: smooth;
}
:root {
  --background-color: #000000;
  --primary-color: #1c1c1c;
  --secondary-color: #b22222;
  --text-color: #faebd7;
  --accent-color: #ecab60;
  --light-color: #ff0000;
}
section {
}
body {
  background: linear-gradient(180deg, var(--primary-color) 0%, var(--background-color) 100%);
  color: var(--text-color);
  font-family: 'Arial', sans-serif;
}
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
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
  background-color: var(--accent-color);
  transform: translateY(-5px);
  box-shadow: 0 5px 15px var(--accent-color);
}

.secondary-btn {
  background-color: #333444;
  color: white;
  border: none;
}

.secondary-btn:hover {
  background-color: #555;
  transform: translateY(-5px);
  box-shadow: 0 5px 15px var(--accent-color);
}
.slide-in-top {
  -webkit-animation: slide-in-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.slide-in-left {
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.slide-in-right {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
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
