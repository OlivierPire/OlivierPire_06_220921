
export default class Profile {
  constructor(
    name,
    city,
    country,
    tagline,
    portrait,
    id,
    photographerId,
    title,
    image,
    tags,
    date,
    likes,
    price
  ) {
    this.city = city;
    this.country = country;
    this.tagline = tagline;
    this.portrait = portrait;
    this.name = name;
    this.id = id;
    this.photographerId = photographerId;
    this.title = title;
    this.image = image;
    this.tags = tags;
    this.date = date;
    this.likes = likes;
    this.price = price;
  }

  generateProfile(main) {
    main.innerHTML = `
    <div class="photographer_info">
      <div class="name_container">
        <h1>${this.name}</h1>
      </div>
      <p class="location">${this.city}, ${this.country}</p>
      <p class="citation">${this.tagline}</p>
      <div class="hashtag_container">
        <a class="hashtag">${this.tags}</a>
      </div>
    </div>

        <img src="images/Photographers/${this.portrait}" class="profil_picture">

        <div id="price_banner">
            <span id="like_number"><i class="fas fa-heart"></i></span>
            <span id="price">${this.price}€/jour</span>
        </div>
    ` ;
  } 
}


/*<div class="photographer_info">
            <div class="name_container">
                
            </div>
            <p class="location">ville</p>
            <p class="citation">citation</p>
            <div class="hashtag_container">
                <a href="" class="hashtag"></a>
            </div>
        </div>

        <img src="images/" class="profil_picture">

        <div id="price_banner">
            <span id="like_number"><i class="fas fa-heart"></i></span>
            <span id="price">€/jour</span>
        </div>*/
