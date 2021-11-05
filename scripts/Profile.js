export default class Profile {
  constructor(name, city, country, tagline, portrait, id, tags, price, media) {
    this.city = city;
    this.country = country;
    this.tagline = tagline;
    this.portrait = portrait;
    this.name = name;
    this.id = id;
    this.tags = tags;
    this.price = price;
    this.media = media;
    this._totalLikes = 0;
  }

  generateProfile(profileContainer) { // ajout contact
    const btnContact = document.getElementById("contact");
    const photographerInfo = document.createElement("div");
    photographerInfo.classList.add("photographer_info");
    profileContainer.append(photographerInfo); 
    const nameContainer = document.createElement("div");
    nameContainer.classList.add("name_container");
    photographerInfo.appendChild(nameContainer);
    const name = document.createElement("h1");
    name.textContent = this.name;
    nameContainer.appendChild(name);
    nameContainer.appendChild(btnContact);
    const location = document.createElement("h2");
    location.classList.add("location");
    location.textContent = this.city + ", " + this.country;
    photographerInfo.appendChild(location);
    const tagline = document.createElement("p");
    tagline.classList.add("tagline");
    tagline.textContent = this.tagline;
    photographerInfo.appendChild(tagline);
    const tagsContainer = document.createElement("div");
    photographerInfo.appendChild(tagsContainer);
    tagsContainer.classList.add("hashtag_container");

    for (let tag in this.tags) {
      const tags = document.createElement("a");
      tagsContainer.appendChild(tags);
      tags.classList.add("hashtag");
      tags.textContent = `#${this.tags[tag]}`;
    }

    const profilePicture = document.createElement("img");
    profilePicture.src = "images/Photographers/" + this.portrait;
    profilePicture.alt = this.name;
    profilePicture.classList.add("profil_picture");
    profileContainer.appendChild(profilePicture);
    const priceBanner = document.createElement("div");
    priceBanner.classList.add("price_banner");
    profileContainer.appendChild(priceBanner);
    const likesNumber = document.createElement("span");
    likesNumber.id = "totalLikes";
    likesNumber.classList.add("like_number");
    priceBanner.appendChild(likesNumber);
    const heart = document.createElement("i");
    heart.classList.add("fas", "fa-heart");
    priceBanner.appendChild(heart);
    const price = document.createElement("span");
    price.textContent = this.price + "€ /jour"
    price.classList.add("price");
    priceBanner.appendChild(price);

    // Nom du photographe dans le formulaire de contact
    const form = document.querySelector(".formContent"); 
    const formName = document.createElement("span");
    formName.textContent = this.name;
    formName.classList.add("form_name");
    let likes = this.calculateLikes();
    form.insertBefore(formName, document.querySelector("form"));
  }

  set totalLikes(totalLikes) {
    this._totalLikes = totalLikes
    if(document.getElementById('totalLikes')) {
      document.getElementById('totalLikes').textContent = this._totalLikes;
    }
  }

// Calcul du nombre total de likes 

  calculateLikes() {
    let resultat = 0;
    this.media.forEach((media) => {
      resultat = resultat + media.likes;
    })
    this.totalLikes = resultat;
    return resultat;
  }
}
