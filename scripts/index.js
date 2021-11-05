import User from "./Users.js";

const main = document.querySelector('main');

const photographers = [];

fetch('json/data.json')
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

// Scroll Event
window.addEventListener('scroll', () => {
  const backContent = document.getElementById('backContent');
  if (window.scrollY > 130) {
    backContent.style.display = 'block';
  } else {
    backContent.style.display = 'none';
  }
});

