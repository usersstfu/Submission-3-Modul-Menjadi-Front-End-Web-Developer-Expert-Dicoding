/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createHeroTemplate = (resto) => `
	<section class="hero">
	 <h1 class="hero__title"> ${resto.restaurant.name} </h1>
	 <img class="hero__image lazyload" data-src="${
  CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId
}" alt="${resto.name}">
	</section>
`;

const createRestoCardOverview = (resto) => `
	<div class="container__image">
	    <img data-src="${
  CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId
}" class="container__image_overview lazyload" alt="${resto.name}">
	</div>
	<div class="container__info">
	    <h2 class="container__info_header"> ${resto.restaurant.name} </h2>
	    <h4 class="container__info_subheader"> ${resto.restaurant.address} di ${
  resto.restaurant.city
} </h4>
	    <p class="container__info_rating"> <i class="fa fa-star"></i> ${
  resto.restaurant.rating
} </p>
	    <p class="container__info_resto_categories" id="container__info_categories">
			</p>
	    <p class="container__info_description"> ${resto.restaurant.description} </p>
	</div>
`;

const createSpanCategories = (category) => `
	<span> ${category.name} </span>
`;

const createAvailableFoodsMenu = (food, dummy) => `
		<div class="resto__foodies">
			<div class="resto__food_icon">
			</div>
			<div class="resto__food_image">
				<img class="lazyload" data-src="${dummy.food}" alt="${food.name}" srcset="">
			</div>
			<div class="resto__food_info">
				<div class="resto__food_name">
					${food.name} 
				</div>
				<div class="resto__food_price">
					${dummy.foodPrice} 
				</div>
			</div>
		</div>
`;

const createAvailableDrinksMenu = (drink, dummy) => `
		<div class="resto__drinkies">
			<div class="resto__drink_icon">
			</div>
			<div class="resto__drink_image">
				<img class="lazyload" data-src="${dummy.drink}" alt="${drink.name}" srcset="">
			</div>
			<div class="resto__drink_info">
				<div class="resto__drink_name">
					${drink.name} 
				</div>
				<div class="resto__drink_price">
					${dummy.drinkPrice} 
				</div>
			</div>
		</div>
`;

const createCustomerReview = (review) => `
		<div class="reviewer">
		  <img class="lazyload" data-src="https://raw.githubusercontent.com/medival/dummy-data/master/images/avatar/user-profile.webp" alt="avatar">
		  <div class="reviewer__name">
		    <p> ${review.name} </p>
		  </div>
		  <div class="reviewer__date">
		    <p> ${review.date} </p>
		  </div>
		  <div class="reviewer__comentar">
		      <textarea name="" id="" cols="18" rows="6" readonly>
${review.review}
		      </textarea>
		  </div>
		</div>
`;

const createRestoItemTemplate = (resto) => `
	<a href="#/detail/${resto.id}" class="resto__selector">
		<figure>
				<img class="lazyload" data-src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}" alt="${resto.name}">
				<div class="resto__info_container">
					<h4 class="resto__info"> ${resto.rating} </h4>
				</div>
				<h3 class="resto__title" href="#/detail/${resto.id}"> ${resto.name} at ${
  resto.city
} </h3>
				<p class="resto__description"> ${resto.description.substring(0, 150)} </p>
		</figure>
	</a>
`;

const createCategoriesRestoTemplate = (category) => `
<div class="resto__category">
    <div class="resto__categroy_icon">
         <i class="fa fa-large fa-check category__icon_check"></i>
    </div>
    <div class="resto__category_image">
        <img src="#" alt="" srcset="">
    </div>
    <div class="resto__category_name">
        ${category.name}
    </div>
</div>
`;

const createLikeButtonTemplate = () => `
	<button aria-label="like this resto" id="likeButton" class="like">
		<i class="fa fa-heart-o" aria-hidden="true"></i>
	</button>
`;

const createLikedButtonTemplate = () => `
	<button aria-label="unlike this resto" id="likeButton" class="like">
		<i class="fa fa-heart" aria-hidden="true"></i>
	</button>
`;

export {
  createHeroTemplate,
  createCategoriesRestoTemplate,
  createRestoItemTemplate,
  createRestoCardOverview,
  createAvailableFoodsMenu,
  createAvailableDrinksMenu,
  createCustomerReview,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSpanCategories,
};
