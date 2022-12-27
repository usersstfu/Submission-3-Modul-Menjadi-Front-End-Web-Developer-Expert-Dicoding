Feature("Liking restaurant");

const assert = require("assert");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

const firstCondition = "You dont have any favorite restaurant";

// Tampilkan halaman favorite resto
Scenario("Showing empty like restaurant", ({ I }) => {
  I.seeElement("h3");
  I.see(firstCondition, ".resto__empty_label");
});

// Fungsi klik halaman resto
Scenario("Liking one restaurant", async ({ I }) => {
  I.see(firstCondition, ".resto__empty_label");

  I.amOnPage("/");
  I.seeElement(".card-list");
  I.seeElement(".resto__selector");
  I.seeElement("figure");
  I.seeElement(".resto__title");

  const firstResto = locate("figure").first();
  const firstRestoTitle = await I.grabTextFrom(".resto__title");

  I.click(firstResto);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".card-list");
  I.seeElement(".resto__selector");
  I.seeElement("figure");
  I.seeElement(".resto__title");

  const likeRestoTitle = await I.grabTextFrom(".resto__title");

  assert.strictEqual(firstRestoTitle, likeRestoTitle);
});

// Batal sukai restaurant
Scenario("Unliking one restaurant", async ({ I }) => {
  I.see(firstCondition, ".resto__empty_label");

  I.amOnPage("/");

  I.seeElement(".card-list");
  I.seeElement(".resto__selector");
  I.seeElement("figure");
  I.seeElement(".resto__title");

  const firstResto = locate("figure").first();
  const firstRestoTitle = await I.grabTextFrom(".resto__title");

  I.click(firstResto);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".card-list");
  I.seeElement("figure");
  I.seeElement(".resto__title");

  const likeResto = locate("figure").first();
  const likeRestoTitle = await I.grabTextFrom(".resto__title");

  assert.strictEqual(firstRestoTitle, likeRestoTitle);

  I.click(likeResto);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement("h3");
  I.seeElement(".resto__empty_label");

  const noFavResto = await I.grabTextFrom(".resto__empty_label");

  assert.strictEqual(noFavResto, firstCondition);
});
