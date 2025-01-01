<script setup lang="ts"></script>
<template>
  <section class="contact">
    <div class="contact-container">
      <div class="contact-card">
        <h2>Contactame</h2>
        <p class="contact-description">
          I'm open to collaborations, opportunities, or just a friendly chat. Feel free to connect
          with me on any of the platforms below!
        </p>
        <div class="contact-links">
          <a href="mailto:your-email@example.com" class="contact-link">
            <img src="/public/icons/email.svg" alt="Email Icon" class="contact-icon" />
            <span>Email</span>
          </a>
          <a href="https://linkedin.com/in/your-profile" class="contact-link">
            <img src="/public/icons/linkedin.svg" alt="LinkedIn Icon" class="contact-icon" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/your-profile" class="contact-link">
            <img src="/public/icons/git.svg" alt="GitHub Icon" class="contact-icon" />
            <span>GitHub</span>
          </a>
        </div>
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
  align-items: center; /* Center all elements horizontally */
  justify-content: center;
  padding: 2rem; /* Add padding for spacing */
  background: #252835; /* Ensure proper card background */
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); /* Add shadow for visual interest */
}

/* Title and Description */
.contact-card h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.contact-description {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

/* Contact Links Container */
.contact-links {
  display: flex;
  flex-direction: row;
  justify-content: center; /* Center the links horizontally */
  align-items: center; /* Vertically align icons and text */
  gap: 1rem; /* Space between the links */
  width: 100%; /* Make the container take up full width */
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
