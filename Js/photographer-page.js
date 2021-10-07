import MediaFactory from "./MediaFactory.js";
import Profile from "./Profile.js";
import { modalDisplay } from "./modal.js";

const url = new URL(window.location.href);
const idPhotographe = parseInt(url.searchParams.get("id"));
const media = [];
const profileContainer = document.getElementById("profile_container");

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
            "video" in element ? element.video : element.image            
          )
        );
      }
    });
    return data.photographers;
  })
  .then((data) => {
    data.forEach((element) => {
      if (element.id === idPhotographe) {
        console.log(media);
        const profile = new Profile(
          element.name,
          element.city,
          element.country,
          element.tagline,
          element.portrait,
          element.id,
          element.tags,
          element.price,
          media
        );
        profile.generateProfile(profileContainer);
      }
    });
  });

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
