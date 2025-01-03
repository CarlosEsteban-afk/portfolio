<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ContactIcon from '../ContactIcon.vue'
interface Icon {
  icon: string
  name: string
  link: string
}
const icons: Record<string, Icon> = {
  en: {
    icon: './icons/git.svg',
    name: 'Visit my GitHub',
    link: 'https://github.com/CarlosEsteban-afk',
  },
  es: {
    icon: './icons/git.svg',
    name: 'Visita mi GitHub',
    link: 'https://github.com/CarlosEsteban-afk',
  },
}
const { locale } = useI18n()
const currentIcon = computed(() => icons[locale.value])
</script>
<template>
  <section id="about" class="about">
    <div class="about-container">
      <div class="about-image">
        <img src="/carl2.png" alt="Your Photo" class="profile-photo" />
      </div>
      <div class="about-content">
        <h1>{{ $t('about.title') }}</h1>
        <p>
          {{ $t('about.content') }}
        </p>
        <p class="about-highlight">
          {{ $t('about.high-ligt-content') }}
        </p>
        <ContactIcon :icon="currentIcon.icon" :name="currentIcon.name" :link="currentIcon.link" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  margin-bottom: 20vh;
  margin-top: 20vh;
  text-align: center;
}
.about-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}
.about-image {
  flex: 1;
}
.profile-photo {
  width: 75%;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}
.about-content {
  flex: 2;
  color: #ffffff;
}

.about p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.about-highlight {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffab4c;
  line-height: 1.8;
  border-left: 4px solid #ffab4c;
  padding-left: 1rem;
}

@media (max-width: 768px) {
  .about-container {
    flex-direction: column-reverse;
    padding: 2rem;
  }

  .profile-photo {
    width: 80%;
  }

  .about-content {
    text-align: center;
  }

  .about h1 {
    font-size: 2rem;
  }

  .about p {
    font-size: 1rem;
  }

  .about-highlight {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .about-container {
    padding: 1.5rem;
  }

  .profile-photo {
    width: 70%;
  }

  .about h1 {
    font-size: 1.8rem;
  }

  .about p {
    font-size: 0.9rem;
  }

  .about-highlight {
    font-size: 1rem;
  }
}
</style>
