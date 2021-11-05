import Lightbox from "./Lightbox.js";
import Profile from "./Profile.js";

export default class Video {
    constructor(id,photographerId,title,tags,likes,date, price, alt, source) {
        this.id = id,
        this.photographerId = photographerId,
        this.title = title,
        this.tags = tags,
        this.likes = likes,
        this.date = date,
        this.price = price,
        this.alt = alt,
        this.source = source
    }    
    
    generateHtml() {
        const picturesContainer = document.getElementById("all_pictures_container");
        const picContainer = document.createElement("div");
        picContainer.classList.add("picture_container");
        picturesContainer.appendChild(picContainer);
        const linkMedia = document.createElement("a");
        picContainer.appendChild(linkMedia);
        const video = document.createElement("video");
        video.setAttribute("controls", 0);
        video.src = `images/${this.photographerId}/${this.source}`;
        video.title = this.alt;
        linkMedia.appendChild(video);
        video.classList.add("picture");

        const description = document.createElement("div");
        description.classList.add("description_container");
        picContainer.appendChild(description);
        const videoTitle = document.createElement("h2");
        videoTitle.classList.add("picture_title");
        videoTitle.textContent = this.title;
        description.appendChild(videoTitle);
        
        const likes = document.createElement("div");
        likes.classList.add("likes");
        description.appendChild(likes);
        const likesNumber = document.createElement("p");
        likesNumber.textContent = this.likes;
        likesNumber.classList.add("picture_likes");
        likes.appendChild(likesNumber);
        
        const heart = document.createElement("i");
        heart.setAttribute("tabindex", "0")
        
        heart.classList.add("far","fa-heart","picture_heart");
        likes.appendChild(heart);
        const heartFull = document.createElement("i");
        heartFull.classList.add("fas","fa-heart","picture_heart");
        likes.appendChild(heartFull);
        heartFull.style.display = "none";

        heart.addEventListener("click", () => {
            if(heartFull.style.display = "none") {
                heart.style.display = "none"
                heartFull.style.display = "block"
            }
            this.likes++;
            likesNumber.textContent = this.likes;
            Profile._totalLikes = 1;
            document.getElementById('totalLikes').textContent = Number(document.getElementById('totalLikes').textContent) + 1;
        })  

        heartFull.addEventListener("click", () => {
            if(heartFull.style.display = "block") {
                heart.style.display = "block"
                heartFull.style.display = "none"
            }
            this.likes--;
            likesNumber.textContent = this.likes;
            Profile._totalLikes = 1;
            document.getElementById('totalLikes').textContent = Number(document.getElementById('totalLikes').textContent) - 1;
        })  

        video.addEventListener("click", () => {
            Lightbox.displayLightbox(this.id, this.photographerId, this.source);
            video.setAttribute("controls", 0);
        }) 
    }

        generateHtmlForLightbox(lightboxContainer) {
            const imgContainer = document.getElementById("lightbox_container");
            lightboxContainer.appendChild(imgContainer);
            const lightboxMedia = document.createElement("video");
            lightboxMedia.classList.add("lightbox_picture");
            lightboxMedia.style.display = "block";
            lightboxMedia.src = "images/" + this.photographerId + "/" + this.source;
            lightboxMedia.title = this.alt;
            imgContainer.appendChild(lightboxMedia);  
            lightboxMedia.setAttribute("controls", 0);     
        }
}
        
        /*;*/