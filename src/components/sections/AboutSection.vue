<script setup lang="ts">
import ContactIcon from '../ContactIcon.vue'

const icon = {
  icon: './icons/git.svg',
  name: 'Visita mi GitHub',
  link: 'https://github.com/CarlosEsteban-afk',
}
</script>
<template>
  <section class="about">
    <div class="about-container">
      <div class="about-image">
        <img src="/carl2.png" alt="Your Photo" class="profile-photo" />
      </div>
      <div class="about-content">
        <h1>Acerca de mi</h1>
        <p>
          Estudiante de Ingeniería Informática en la Universidad de La Frontera, con una gran pasión
          por aprender y resolver problemas a través de la tecnología. Actualmente me destaco como
          desarrollador Full Stack y, aunque no poseo experiencia práctica en desarrollo de
          videojuegos o ciberseguridad, me dedico de forma independiente a aprender sobre estas
          áreas a través de cursos, proyectos personales y la lectura de documentación técnica.
        </p>
        <p class="about-highlight">
          Soy una persona curiosa y comprometida con el aprendizaje. Disfruto trabajar en equipo,
          compartir ideas y enfrentar desafíos técnicos que me permitan crecer como profesional.
        </p>
        <ContactIcon :icon="icon.icon" :name="icon.name" :link="icon.link" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  margin-bottom: 15vh;
  margin-top: 10vh;
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
