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
          <p>SIREN : 930 755 848</p>
        </div>
        <div class="footer-section">
          <h4>Suivez-nous</h4>
          <a target="_blank" href="https://www.facebook.com/greenwild">
            <!-- <img src="@/assets/facebook-icon.png" alt="Facebook" class="social-icon" /> -->
          </a>
          <a target="_blank" href="https://www.instagram.com/greenwild.france/">
            <!-- <img src="@/assets/instagram-icon.png" alt="Instagram" class="social-icon" /> -->
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/greenwild">
            <!-- <img src="@/assets/linkedin-icon.png" alt="LinkedIn" class="social-icon" /> -->
          </a>
        </div>
      </div>
      <div class="footer-copyright">
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
  align-items: center;
  flex-wrap: wrap;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
}

.footer-section {
  margin: 10px;
  width: 30%;
}

.footer-section h4 {
  margin-bottom: 10px;
}

.footer a {
  color: #0af;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.footer-copyright {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}

.social-icon {
  width: 24px;
  height: 24px;
  margin: 0 5px;
}
</style>