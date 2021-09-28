export default class User {
  constructor(name, id, city, country, tags, tagline, price, portrait) {
    this.name = name;
    this.id = id;
    this.tags = tags;
    this.tagline = tagline;
    this.price = price;
    this.country = country;
    this.city = city;
    this.portrait = portrait;
  }

  createCard() {
    const main = document.querySelector("main");
    const container = document.createElement("div");
    container.classList.add("profile");
    main.appendChild(container);
    container.innerHTML = `
    <a href="#">
        <img src="images/photographers/${this.portrait}" alt="" class="img_profile">
        <h2 class="name">${this.name}</h2>
    </a>
    <p class="location">${this.city}, ${this.country}</p>
    <p class="citation">${this.tagline}</p>
    <p class="price">${this.price}€/jour</p>
    <div class="hashtag_container">
        <a href="" class="hashtag">${this.tags}</a>
    </div>
    `;
  }
}

//Mettre des class partout en css // refaire le Css ?
