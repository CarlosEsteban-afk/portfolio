<script setup lang="ts"></script>
<template>
  <section class="contact slide-in-right">
    <div class="contact-container">
      <div class="contact-card">
        <h1>Contactame</h1>
        <p class="contact-description">
          Si deseas contactarme para colaboraciones, oportunidades laborales o simplemente para
          charlar, no dudes en enviarme un mensaje. <br />Puedes encontrarme en las siguientes
          plataformas:
        </p>
      </div>
    </div>
  </section>
</template>

<style>
.contact-container {
  display: flex;
  justify-content: center;
}
.contact-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.contact-description {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 768px) {
  .contact-card {
    padding: 1.5rem;
  }
  .contact-card h2 {
    font-size: 1.8rem;
  }
  .contact-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .contact-card {
    padding: 1rem;
  }
  .contact-card h2 {
    font-size: 1.5rem;
  }
  .contact-description {
    font-size: 0.8rem;
  }
}
</style>
