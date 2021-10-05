import User from "./User.js";

const main = document.querySelector("main");

const photographers = [];

fetch("json/data.json")
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
      user.createCard(main);
      photographers.push(user);
      
    });
  });
  
//id, photographerId, title, image, tags, date, likes, price