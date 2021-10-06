export default class Video {
    constructor(id,photographerId,title,tags,likes,date,price, source, video) {
        this.id = id,
        this.photographerId = photographerId,
        this.title = title,
        this.tags = tags,
        this.likes = likes,
        this.date = date,
        this.price = price,
        this.source = source,
        this.video = video
    }    
    
    generateVideo() {
        const picturesContainer = document.getElementById("all_pictures_container");
        const picContainer = document.createElement("div");
        picContainer.classList.add("picture_container");
        picturesContainer.appendChild(picContainer);
        const linkMedia = document.createElement("a");
        picContainer.appendChild(linkMedia);
        const video = document.createElement("video");
        video.setAttribute("controls", 0);
        video.src = `images/${this.photographerId}/${this.video}`;
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
    }
}
        
        /*;*/