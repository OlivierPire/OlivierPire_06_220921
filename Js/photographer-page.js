import MediaFactory from "./MediaFactory.js";
import Profile from "./Profile.js";


const url = new URL(window.location.href);
const idPhotographe = parseInt(url.searchParams.get("id"));
const media = [];
const main = document.querySelector("main");

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
            element.price
          )
        ); //function
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
          element.date,
          element.likes,
          element.price,
        );
        profile.generateProfile(main);
      }
    });
  })
  
  
  

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
