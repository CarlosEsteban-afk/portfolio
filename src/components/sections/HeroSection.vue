<script setup lang="ts"></script>
<template>
  <section class="hero slide-in-left">
    <div class="hero-section">
      <div class="hero-content slide-in-left">
        <h1 class="gradient-text">
          <span class="highlight">Carlos Peña</span> <br />
          Desarrollador Full Stack y Estudiante de Ingeniería Informática
          <p>Con un profundo interes por el desarrollo de videojuegos y la ciberseguridad.</p>
        </h1>
        <div class="hero-buttons">
          <button class="primary-btn"><a href="#projects">Mis proyectos</a></button>
          <button class="secondary-btn">Ver mi CV</button>
        </div>
      </div>
      <div class="hero-image">
        <img src="/carl.jpeg" alt="Developer portrait" class="profile-picture" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, #ff6f61, #ffcc00);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
button a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  font-weight: bold;
}
.hero {
  color: white;
  text-align: center;
}

.hero-section {
  height: 75vh;
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
h1 {
  text-align: center;
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
  h1 {
    text-align: left;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: left;
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
