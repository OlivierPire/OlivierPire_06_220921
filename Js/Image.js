export default class Image {
    constructor(id,photographerId,title,tags,likes,date,price,source) {
        this.id = id,
        this.photographerId = photographerId,
        this.title = title,
        this.tags = tags,
        this.likes = likes,
        this.date = date,
        this.price = price,
        this.source = source
    }    

    generateImage() {
        const picturesContainer = document.getElementById("all_pictures_container");
        const picContainer = document.createElement("div");
        picContainer.classList.add("picture_container");
        picturesContainer.appendChild(picContainer);
        const linkMedia = document.createElement("a");
        picContainer.appendChild(linkMedia);
        const img = document.createElement("img");
        img.src = `images/${this.photographerId}/${this.source}`;
        linkMedia.appendChild(img);
        img.classList.add("picture");
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