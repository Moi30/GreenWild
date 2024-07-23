<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>GreenWild</h3>
          <p>Protégeons notre planète ensemble. Rejoignez-nous dans notre mission de conservation et de sensibilisation à l'environnement.</p>
        </div>
        <div class="footer-section">
          <h4>Contactez-nous</h4>
          <p><a href="mailto:contact@greenwild.fr">contact@greenwild.fr</a></p>
        </div>
        <div class="footer-section">
          <h4>Suivez-nous</h4>
          <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="https://www.instagram.com/greenwild.france/">Instagram</a> | <a href="https://www.linkedin.com/company/greenwild">Linkedin</a>
        </div>
        © 2024 GreenWild. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
}
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}

.footer .container {
  display: flex;
  justify-content: space-between;
}

.footer-section {
  margin: 10px;
}

.footer a {
  color: #0af;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>