/* eslint-disable linebreak-style */
class appBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="header">
      <div class="header__inner">
        <a href="/" id="logo"><img src="./images/logo.png" alt="logoresto" srcset=""></a>
      </div>
      <button id="hamburgerButton" class="hamburger">☰</button>
    </header>
    <nav id="navigationDrawer" class="nav">
      <ul class="nav__list">
        <li class="nav__item"><a href="/">Home</a></li>
        <li class="nav__item"><a href="#/favorite">Favorite</a></li>
        <li class="nav__item"><a href="https://github.com/usersstfu">About Us</a></li>
      </ul>
    </nav>`;
  }
}

customElements.define('app-bar', appBar);
