<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const changeLanguage = () => {
  isToggled.value = !isToggled.value
  const lang = locale.value === 'en' ? 'es' : 'en'
  locale.value = lang
}

const sections = [
  { id: 'home' },
  { id: 'about' },
  { id: 'skills' },
  { id: 'projects' },
  { id: 'contact' },
]

const localizedSections = computed(() =>
  sections.map((section) => ({
    id: section.id,
    label: t(`navbar.${section.id}`),
  })),
)

const activeSection = ref('home')
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  const offsets = sections.map((section) => {
    const el = document.getElementById(section.id)
    return { id: section.id, offset: el?.offsetTop || 0 }
  })

  const scrollPosition = window.scrollY + 200
  const scrollHeight = document.documentElement.scrollHeight
  const windowHeight = window.innerHeight

  const currentSection = offsets.reverse().find((section) => scrollPosition >= section.offset)

  activeSection.value = currentSection?.id || 'home'

  const bottomReached = scrollPosition + windowHeight >= scrollHeight - 1
  if (bottomReached) {
    activeSection.value = 'contact'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const isToggled = ref(false)
</script>

<template>
  <header class="header slide-in-top">
    <nav class="navbar">
      <div class="hamburger" @click="toggleMobileMenu">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>

      <ul :class="['nav-list ', { open: isMobileMenuOpen }]">
        <li
          v-for="section in localizedSections"
          :key="section.id"
          :class="{ active: activeSection === section.id }"
        >
          <a :href="'#' + section.id" @click="toggleMobileMenu">{{ section.label }}</a>
        </li>
      </ul>
      <button @click="changeLanguage" :aria-pressed="isToggled" class="toggle-btn">
        <span v-if="isToggled" class="toggle-label">EN</span>
        <span v-else class="toggle-label">ES</span>
        <div class="toggle-switch"></div>
      </button>
    </nav>
  </header>
</template>

<style scoped>
.toggle-btn {
  background-color: transparent;
  border: 0;
  border-radius: 30px;
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.toggle-btn:hover {
  background-color: var(--primary-color);
  border-color: var(--accent-color);
}

.toggle-btn:focus {
  outline: none;
  box-shadow: 0 0 5px var(--accent-color);
}

.toggle-label {
  font-size: 1rem;
  color: var(--text-color);
}

.toggle-switch {
  width: 30px;
  height: 16px;
  background-color: #ffd3a1;
  border-radius: 30px;
  margin-left: 10px;
  position: relative;
  transition: background-color 0.3s ease;
}

.toggle-switch:before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 50%;
  transition: left 0.3s ease;
}

.toggle-btn[aria-pressed='true'] .toggle-switch {
  background-color: var(--accent-color);
}

.toggle-btn[aria-pressed='true'] .toggle-switch:before {
  left: 16px;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--primary-color);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  z-index: 1000;
}

.navbar {
  width: 95%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
}
.hamburger {
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
}

.hamburger .line {
  width: 30px;
  height: 4px;
  background-color: var(--text-color);
  transition: all 0.3s ease;
}

.nav-list {
  list-style: none;
  font-weight: bolder;
  display: flex;
  margin: 0;
  gap: 1.5rem;
}

.nav-list a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s;
}

.nav-list li.active a {
  color: var(--accent-color);
  font-weight: bold;
  border-bottom: 2px solid var(--accent-color);
}

.nav-list a:hover {
  color: var(--accent-color);
}

.nav-list.open {
  display: flex;
}

.nav-list a {
  font-size: 1.2rem;
  padding: 0.5rem;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
}

@media (max-width: 480px) {
  .nav-list a {
    font-size: 1rem;
  }

  .nav-list {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    background-color: var(--primary-color);
    width: 85%;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    align-items: flex-end;
  }
}
</style>
