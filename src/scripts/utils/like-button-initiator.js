/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
import FavoriteRestoIdb from '../data/favorite-resto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    // console.log(this._resto);
    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putRestos(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
