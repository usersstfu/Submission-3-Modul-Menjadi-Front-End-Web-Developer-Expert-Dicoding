import FavoriteRestoIdb from "../src/scripts/data/favorite-resto-idb";
import * as TestFactories from "./helpers/testFactories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

beforeEach(() => {
  addLikeButtonContainer();
});

describe("Liking a Resto", () => {
  it("should show the like button when the resto has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this resto"]')
    ).toBeTruthy();
  });

  it("should not show the unlike buton when the restaurant has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto"]')
    ).toBeFalsy();
  });

  it("should be able to like the restaurant", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const restaurant = await FavoriteRestoIdb.getResto(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestoIdb.deleteResto(1);
  });

  it("should not add a restaurant again when its already like", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestoIdb.putRestos({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([{ id: 1 }]);

    FavoriteRestoIdb.deleteResto(1);
  });

  xit("should not add a restaurant when it has no id", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestoIdb.getAllRestaurant()).toEqual([]);
  });
});
