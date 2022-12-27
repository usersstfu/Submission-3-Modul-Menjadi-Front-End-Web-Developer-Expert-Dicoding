/* eslint-disable linebreak-style */
import RestoDBSource from '../../data/resto.source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Resto = {
  async render() {
    return `
    <section class="hero">
    <div class="hero__inner">
      <img class="hero_image_home" alt="">
      <h1 class="hero__title">Let's Eat Here</h1>
      <p class="hero__tagline">Restaurant Bintang 5 Diakuai Oleh Gordon Ramsay Dimana Rasa dan Kenikmatan
        Bisa Dicoba Langsung</p><br>
      <a href="#mainContent" class="hero__cta"> DISCOVER </a>
    </div>
  </section>

    <div class="restaurant">
      <h1 id="restaurant-label">Explore Restaurant</h1>
      <div id="resto" class="card-list"></div>
    </div>
      `;
  },
  async afterRender() {
    const restaurant = await RestoDBSource.infoResto();
    const restaurantContainer = document.querySelector('#resto');
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Resto;
