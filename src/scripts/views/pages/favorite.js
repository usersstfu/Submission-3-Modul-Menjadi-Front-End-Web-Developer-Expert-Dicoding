/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-console */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
              <section class="resto">
                  <div class="resto__container">
                      <h2 class="resto__label"> Your Favorite Restaurant </h2>
                      <h3 class="resto__empty_label" id="empty"> You dont have any favorite restaurant </h3>
                      <div id="resto" class="card-list">
                      </div>
                  </div>
              </section>
          `;
  },
  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#resto');
    const emptyLabel = document.querySelector('#empty');

    if (restos.length !== 0) {
      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestoItemTemplate(resto);
      });
      emptyLabel.style.display = 'none';
    }
    /* restos.forEach((resto) => {
      console.log(resto);
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    }); */
  },
};

export default Favorite;
