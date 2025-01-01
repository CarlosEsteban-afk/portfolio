<script setup lang="ts"></script>
<template>
  <section class="contact">
    <div class="contact-container">
      <div class="contact-card">
        <h1>Acerca de mi</h1>
        <p class="contact-description">
          Soy estudiante de Ingeniería Informática de la Universidad de La Frontera, con una gran
          pasión por aprender y resolver problemas a través de la tecnología. Actualmente me destaco
          como desarrollador Full Stack y, aunque no poseo experiencia práctica en desarrollo de
          videojuegos o ciberseguridad, me dedico de forma independiente a aprender sobre estas
          áreas a través de cursos, proyectos personales y la lectura de documentación técnica. Soy
          una persona curiosa y comprometida con el aprendizaje. Disfruto trabajar en equipo,
          compartir ideas y enfrentar desafíos técnicos que me permitan crecer como profesional.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Contact Card Design */
.contact-card {
  background: var(--secondary-color); /* Card background */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
}

/* Title and Description */
.contact-card h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.contact-description {
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

/* Contact Links Container */
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Individual Contact Link */
.contact-link {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333444; /* Darker button-like background */
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

/* Contact Icon */
.contact-icon {
  width: 24px;
  height: 24px;
  filter: invert(1); /* White icon */
}
</style>
