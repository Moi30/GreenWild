<template>
  <div class="text-center">
    <h1 class="mt-5">Contenu introuvable</h1>
    <section class="d-flex justify-content-center mb-5">
      <p class="lead me-3">Vous allez être redirigé vers l'accueil.</p>
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const route = useRouter();

const msTimer = 5000;
setTimeout(() => route.push({ name: "HomePage" }), msTimer);
</script>