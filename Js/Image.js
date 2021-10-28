import Lightbox from "./Lightbox.js";
import Profile from "./Profile.js";
//import Sort from "./Sort.js";

export default class Image {
    constructor(id,photographerId,title,tags,likes,date,price,source,media) {
        this.id = id,
        this.photographerId = photographerId,
        this.title = title,
        this.tags = tags,
        this.likes = likes,
        this.date = date,
        this.price = price,
        this.source = source,
        this.media = media
    } 
        
    generateHtml() {        
        const picturesContainer = document.getElementById("all_pictures_container");
        const picContainer = document.createElement("div");
        picContainer.classList.add("picture_container");
        picturesContainer.appendChild(picContainer);
        const linkMedia = document.createElement("a");
        picContainer.appendChild(linkMedia);
        const img = document.createElement("img");
        img.src = `images/${this.photographerId}/${this.source}`;
        img.alt = "titre de la photo : " + this.title;
        linkMedia.appendChild(img);
        img.classList.add("picture");

        // Lightbox
        //lightboxMedia.src = `images/${this.photographerId}/${this.source}`;

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

        // Lightbox
        img.addEventListener("click", () => {
            Lightbox.displayLightbox(this.id, this.source, this.title);
        }) 
        
    }
    
    generateHtmlForLightbox(lightboxContainer) {
        const imgContainer = document.getElementById("lightbox_container");
        lightboxContainer.appendChild(imgContainer);
        const lightboxMedia = document.createElement("img");
        lightboxMedia.classList.add("lightbox_picture");
        lightboxMedia.style.display = "block";
        lightboxMedia.src = "images/" + this.photographerId + "/" + this.source;
        imgContainer.appendChild(lightboxMedia);       
    }
    /*totalLikes() {
        let resultat = 0;
    this.media.forEach((media) => {
      resultat = resultat + media.likes;
      
    })
    return resultat
    }*/
}






/*          <div class="picture_container">
                <a href=""><img src="images/Architecture_Cross_Bar.jpg" class="picture" alt=""></a>
                <div class="description_container">
                    <h2 class="picture_title">Photo</h2>
                    <div class="likes">
                        <p class="picture_likes">10</p>
                        <i class="fas fa-heart picture_heart"></i>
                    </div>
                </div>
            </div>*/