import User from "./User.js";

const photographers = [];

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    data.photographers.forEach((element) => {
      const user = new User(
        element.name,
        element.id,
        element.city,
        element.country,
        element.tags,
        element.tagline,
        element.price,
        element.portrait,
      );
      user.createCard();
      photographers.push(user);
    });
  });


