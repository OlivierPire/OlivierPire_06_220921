import MediaFactory from "./MediaFactory.js";
import Profile from "./Profile.js";

const url = new URL(window.location.href);
const idPhotographe = parseInt(url.searchParams.get("id"));
const media = [];
const profileContainer = document.getElementById("profile_container");
const btnContact = document.getElementById("contact");
const form = document.querySelector(".form_contact");
const close = document.querySelector(".close_form");

fetch("json/data.json")
  .then((res) => res.json())
  .then((data) => {
    data.media.forEach((element) => {
      if (element.photographerId === idPhotographe) {
        media.push(
          new MediaFactory(
            "video" in element ? "video" : "image",
            element.id,
            element.photographerId,
            element.title,
            element.tags,
            element.likes,
            element.date,
            element.price,
            element.image,
            element.video
          )
        );
      }
    });
    return data.photographers;
  })
  .then((data) => {
    data.forEach((element) => {
      if (element.id === idPhotographe) {
        const profile = new Profile(
          element.name,
          element.city,
          element.country,
          element.tagline,
          element.portrait,
          element.id,
          element.photographerId,
          element.title,
          element.image,
          element.tags,
          element.likes,
          element.date,
          element.price,
        );
        profile.generateProfile(profileContainer);
      }
    });
  });

  const launchForm = () => {
    form.style.display = "inline-block"
  }

  btnContact.addEventListener("click", launchForm);

  const closeForm = () => {
    form.style.display = "none";
  }

  close.addEventListener("click", closeForm)
  

  

/* const profile = new Profile(
    element.id,
    element.photographerId,
    element.title,
    element.image,
    element.tags,
    element.date,
    element.likes,
    element.price
  )*/
