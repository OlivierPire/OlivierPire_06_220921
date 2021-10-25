import Lightbox from "./Lightbox.js";
import Profile from "./Profile.js";

export default class Video {
    constructor(id,photographerId,title,tags,likes,date,price, source) {
        this.id = id,
        this.photographerId = photographerId,
        this.title = title,
        this.tags = tags,
        this.likes = likes,
        this.date = date,
        this.price = price,
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
        linkMedia.appendChild(video);
        video.classList.add("picture");
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
        const heart = document.createElement("i");
        heart.classList.add("fas","fa-heart","picture_heart");
        likes.appendChild(heart);

        heart.addEventListener("click", () => {
            this.likes++;
            likesNumber.textContent = this.likes;
            Profile._totalLikes = 1;
            document.getElementById('totalLikes').textContent = Number(document.getElementById('totalLikes').textContent) + 1;
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
            imgContainer.appendChild(lightboxMedia);  
            lightboxMedia.setAttribute("controls", 0);     
        }
}
        
        /*;*/