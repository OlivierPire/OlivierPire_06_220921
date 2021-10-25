import Profile from "./Profile.js";
import MediaFactory from "./MediaFactory.js";
import { modalDisplay } from "./modal.js";
import Lightbox from "./Lightbox.js";
import Sort from "./Sort.js";

const url = new URL(window.location.href);
const idPhotographe = parseInt(url.searchParams.get("id"));

const media = [];
const date = [];
const profileContainer = document.getElementById("profile_container");
const lightbox = new Lightbox;
const sort = new Sort;


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
            "video" in element ? element.video : element.image,
            media,
          ) 
        ); 
      }
    });     
    lightbox.addMedia(media);
    sort.addMedia(media)
    sort.sortByDate()
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
          element.tags,
          element.price,
          media,         
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
