import Lightbox from "./Lightbox.js";
import Profile from "./Profile.js";

export default class Image {
    constructor(id, photographerId, title, tags, likes, date, price, alt, source, media) {
        this.id = id,
        this.photographerId = photographerId,
        this.title = title,
        this.tags = tags,
        this.likes = likes,
        this.date = date,
        this.price = price,
        this.alt = alt,
        this.source = source,
        this.media = media
    }

  generateHtml() {
    // Photo
    const picturesContainer = document.getElementById("all_pictures_container");
    const picContainer = document.createElement("div");
    picContainer.classList.add("picture_container");
    picturesContainer.appendChild(picContainer);
    const linkMedia = document.createElement("a");
    picContainer.appendChild(linkMedia);
    const img = document.createElement("img");
    img.src = `images/${this.photographerId}/${this.source}`;
    img.alt = this.alt;
    img.setAttribute("tabindex", "0");
    linkMedia.appendChild(img);
    img.classList.add("picture");

    // Infos (Titre + Nombres de Likes)
    const description = document.createElement("div");
    description.classList.add("description_container");
    picContainer.appendChild(description);
    const pictureTitle = document.createElement("h2");
    pictureTitle.classList.add("picture_title");
    pictureTitle.textContent = this.title;
    description.appendChild(pictureTitle);
    
    const likes = document.createElement("div");
    likes.classList.add("likes");
    description.appendChild(likes);
    const likesNumber = document.createElement("p");
    likesNumber.textContent = this.likes;
    likesNumber.classList.add("picture_likes");
    likes.appendChild(likesNumber);

    // Coeur 
    const heart = document.createElement("i");      
    heart.setAttribute("aria-label", "likes");
    heart.setAttribute("role", "image");
    heart.classList.add("far", "fa-heart", "picture_heart");
    likes.appendChild(heart);
    const heartFull = document.createElement("i");
    heartFull.classList.add("fas", "fa-heart", "picture_heart");
    likes.appendChild(heartFull);
    heartFull.style.display = "none";

    // Logique d'ajout des likes
    heart.addEventListener("click", () => {
      if ((heartFull.style.display = "none")) {
        heart.style.display = "none";
        heartFull.style.display = "block";
      }
      this.likes++;
      likesNumber.textContent = this.likes;
      Profile._totalLikes = 1;
      document.getElementById("totalLikes").textContent =
        Number(document.getElementById("totalLikes").textContent) + 1;
    });

    heartFull.addEventListener("click", () => {
      if ((heartFull.style.display = "block")) {
        heart.style.display = "block";
        heartFull.style.display = "none";
      }
      this.likes--;
      likesNumber.textContent = this.likes;
      Profile._totalLikes = 1;
      document.getElementById("totalLikes").textContent =
        Number(document.getElementById("totalLikes").textContent) - 1;
    });

    // Lightbox display
    img.addEventListener("click", () => {
      Lightbox.displayLightbox(this.id, this.source, this.title);
    });
  }

  generateHtmlForLightbox(lightboxContainer) {
    const imgContainer = document.getElementById("lightbox_container");
    lightboxContainer.appendChild(imgContainer);
    const lightboxMedia = document.createElement("img");
    lightboxMedia.classList.add("lightbox_picture");
    lightboxMedia.style.display = "block";
    lightboxMedia.src = "images/" + this.photographerId + "/" + this.source;
    lightboxMedia.alt = this.alt;
    imgContainer.appendChild(lightboxMedia);
    const lightboxTitle = document.createElement("span");
    lightboxTitle.classList.add("lightbox_title");
    lightboxTitle.textContent = this.title;
    lightboxContainer.appendChild(lightboxTitle);       
    
  }
}


/*const moreLikes = () => {
      this.likes++;
      likesNumber.textContent = this.likes;
      Profile._totalLikes = 1;
      document.getElementById("totalLikes").textContent =
        Number(document.getElementById("totalLikes").textContent) + 1;
    };

    const lessLikes = () => {
      this.likes--;
      likesNumber.textContent = this.likes;
      Profile._totalLikes = 1;
      document.getElementById("totalLikes").textContent =
        Number(document.getElementById("totalLikes").textContent) - 1;
    };

    heart.addEventListener("click", () => {
      if ((heartFull.style.display = "none")) {
        heart.style.display = "none";
        heartFull.style.display = "block";
      }
      moreLikes();
    });

    heart.addEventListener("keydown", (e) => {
      if ((heartFull.style.display = "none" && e.key === "Enter")) {
        heart.style.display = "none";
        heartFull.style.display = "block";
      }
      moreLikes();
    });

    heartFull.addEventListener("click", () => {
      if ((heartFull.style.display = "block")) {
        heart.style.display = "block";
        heartFull.style.display = "none";
      }
      lessLikes();
    });

    heartFull.addEventListener("keydown", (e) => {
      if ((heartFull.style.display = "block" && e.key === "Enter")) {
        heart.style.display = "block";
        heartFull.style.display = "none";
      }
      lessLikes();
    });*/