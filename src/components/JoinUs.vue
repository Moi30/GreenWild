<template>
  <div class="join-us container my-5">
    <h1 class="text-center mb-4">Devenir Membre</h1>
    <p class="lead text-center">Rejoignez-nous pour contribuer à la préservation de notre environnement. Ensemble, nous pouvons faire une différence.</p>
    <form @submit.prevent="submitForm" class="mx-auto" style="max-width: 600px;">
      <div class="form-group mb-3">
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="name" class="form-control" required />
      </div>
      <div class="form-group mb-3">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" class="form-control" required />
      </div>
      <div class="form-group mb-3">
        <label for="reason">Pourquoi voulez-vous nous rejoindre?</label>
        <textarea id="reason" v-model="reason" class="form-control" required></textarea>
      </div>
      <button type="submit" class="btn btn-success btn-lg">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'JoinUs',
  data() {
    return {
      name: '',
      email: '',
      reason: ''
    };
  },
  methods: {
    submitForm() {
      // Logic to handle form submission
      console.log('Form submitted:', this.name, this.email, this.reason);
      alert('Merci pour votre inscription ! Nous vous contacterons bientôt.');
      // Reset form fields
      this.name = '';
      this.email = '';
      this.reason = '';
    }
  }
}
</script>

<style scoped>
.form-group label {
  font-weight: bold;
}

button {
  width: 100%;
}
</style>
