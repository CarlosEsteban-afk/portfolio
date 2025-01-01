<script setup lang="ts"></script>
<template>
  <section class="hero-section slide-in-left">
    <div class="hero-content slide-in-left">
      <h1>
        <span class="highlight">Carlos Peña</span> <br />
        Desarrollador Full Stack y Estudiante de Ingeniería Informática
      </h1>
      <p>Con un profundo interes por el desarrollo de videojuegos y la ciberseguridad.</p>
      <div class="hero-buttons">
        <button class="primary-btn">Mis proyectos</button>
        <button class="secondary-btn">Ver mi CV</button>
      </div>
    </div>
    <div class="hero-image">
      <img src="/carl.jpeg" alt="Developer portrait" class="profile-picture" />
    </div>
  </section>
</template>

<style scoped>
.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.about-content {
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
}
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Arial', sans-serif;
  padding: 2rem;
  text-align: center;
  gap: 2rem;
}

.hero-content {
  max-width: 90%;
}

.hero-content h1 {
  font-size: 2rem;
  line-height: 1.3;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.highlight {
  background-color: var(--accent-color);
  padding: 0 0.2rem;
  color: black;
  border-radius: 3px;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.hero-image {
  max-width: 90%;
}

.profile-picture {
  width: 250px;
  height: auto;
  border-radius: 15px;
  object-fit: cover;
}

@media (min-width: 768px) {
  .hero-section {
    flex-direction: row;
    text-align: left;
    padding: 4rem;
    gap: 4rem;
  }

  .hero-content {
    max-width: 45%;
  }

  .hero-content h1 {
    font-size: 3rem;
  }

  .hero-content p {
    font-size: 1.2rem;
  }

  .hero-image {
    max-width: 50%;
  }

  .profile-picture {
    width: 400px;
  }
}
</style>
