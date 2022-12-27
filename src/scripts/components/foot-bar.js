/* eslint-disable linebreak-style */
class footBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer" id="footer">
      <p class="footer__title">Hubungi</p>
      <div class="footer__social">
        <a href="https://www.instagram.com/dpa_12/?hl=id" class="footer__icon"><i class='bx bxl-instagram'></i></a>
        <a href="https://www.facebook.com/dianputra.anugerahnu/" class="footer__icon"><i class='bx bxl-facebook'></i></a>
        <a href="https://www.linkedin.com/in/dian-putra-anugrahnu-85bb491a6/" class="footer__icon"><i
            class='bx bxl-linkedin'></i></a>
        <a href="https://github.com/usersstfu" class="footer__icon"><i class='bx bxl-github'></i></a>
      </div>
      <p class="footer__copy">&#169; Dian Putra Anugrahnu</p>
      </footer>
          `;
  }
}

customElements.define('foot-bar', footBar);
