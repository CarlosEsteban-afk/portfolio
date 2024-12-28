<script setup lang="ts"></script>
<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1>Estudiante con muchas ganas de <span class="highlight">portafolio</span> <br /></h1>
      <p>
        Desarrollador con enfoque en la creación de experiencias visuales y soluciones escalables e
        innovadoras
      </p>
      <div class="hero-buttons">
        <button class="primary-btn">Mis proyectos</button>
        <button class="secondary-btn">Ver mi CV</button>
      </div>
    </div>
    <div class="hero-image">
      <img src="/src/assets/carl.jpeg" alt="Developer portrait" class="profile-picture" />
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem;
  background-color: var(--secondary-color);
  color: white;
  font-family: 'Arial', sans-serif;
  background-size: cover;
}

.hero-content {
  padding: 10rem; /* Reduce margin to bring text closer to the image */
  max-width: 45%; /* Restrict width of the text content */
}
.hero-content h1 {
  font-size: 3.5rem;
  line-height: 1.2;
  font-weight: bold;
}

.hero-content p {
  font-size: 1.2rem;
  margin: 1.5rem 0;
}

.highlight {
  background-color: var(--secondary-color);
  padding: 0 0.2rem;
  color: #000;
  border-radius: 3px;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-image {
  max-width: 45%; /* Restrict width of the image container */
  text-align: center;
}
.primary-btn {
  background-color: var(--accent-color);
  color: #000;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}

.primary-btn:hover {
  background-color: #e5b800;

  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}

.secondary-btn {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}

.secondary-btn:hover {
  background-color: #444;

  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}

.hero-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-picture {
  width: 500px; /* Reduce image size for better balance */
  height: auto;
  object-fit: cover;
  border-radius: 15px;
}
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column; /* Stack text and image vertically */
    text-align: center;
    gap: 2rem; /* Add spacing between text and image */
  }

  .hero-content,
  .hero-image {
    max-width: 100%;
    margin: 0;
  }

  .profile-picture {
    width: 250px; /* Adjust image size for smaller screens */
  }
}
</style>
