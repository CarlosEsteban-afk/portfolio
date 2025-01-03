<script setup lang="ts"></script>
<template>
  <section class="contact" id="contact">
    <div class="contact-container">
      <div class="contact-card">
        <h1>{{ $t('contact.title') }}</h1>
        <p class="contact-description">
          {{ $t('contact.content') }} <br />
          {{ $t('contact.plataforms') }}
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
