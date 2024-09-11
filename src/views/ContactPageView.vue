<template>
  <div class="contact-container">
    <div class="contact-content container my-5">
      <h1 class="text-center mb-4 animate__animated animate__fadeIn">Contactez-nous</h1>
      <p class="lead text-center animate__animated animate__fadeIn">
        Vous avez des questions ou des suggestions ? N'hésitez pas à nous contacter via le formulaire ci-dessous ou par email à
        <a href="mailto:contact@greenwild.fr">contact@greenwild.fr</a>.
      </p>
      <form action="https://formspree.io/f/mpwaqvyw" method="POST" class="mx-auto form-animate" style="max-width: 600px;">
        <div class="form-group mb-3">
          <label for="name">Nom</label>
          <input type="text" id="name" name="name" class="form-control" required />
        </div>
        <div class="form-group mb-3">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" class="form-control" required />
        </div>
        <div class="form-group mb-3">
          <label for="message">Message</label>
          <textarea id="message" name="message" class="form-control" required rows="4"></textarea>
        </div>
        <button type="submit" class="btn btn-success btn-lg">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.name, this.email, this.message);
      alert("Le formulaire n'est pas encore prêt. Vous pouvez nous joindre directement via contact@greenwild.fr");
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}
</script>
