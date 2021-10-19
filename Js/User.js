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

  createCard(main) {
    const container = document.createElement("div");
    main.appendChild(container);
    container.classList.add("profile");
    const linkProfile = document.createElement("a");
    linkProfile.href = "photographer-page.html?id=" + this.id;
    container.appendChild(linkProfile);
    const profilePicture = document.createElement("img");
    profilePicture.src = `./images/Photographers/${this.portrait}`;
    profilePicture.classList.add("img_profile");
    linkProfile.appendChild(profilePicture);
    const name = document.createElement("h2");
    name.textContent = this.name;
    linkProfile.appendChild(name);
    const location = document.createElement("p");
    location.textContent = `${this.city}, ${this.country}`;
    location.classList.add("location");
    container.appendChild(location);
    const citation = document.createElement("p");
    citation.textContent = this.tagline;
    citation.classList.add("citation");
    container.appendChild(citation);
    const price = document.createElement("p");
    citation.textContent = `${this.price}€/jour`;
    citation.classList.add("price");
    container.appendChild(price);
    const tagsContainer = document.createElement("div");
    container.appendChild(tagsContainer);
    tagsContainer.classList.add("tagsContainer");

    for (let tag in this.tags) {
      const tags = document.createElement("a");
      tagsContainer.appendChild(tags);
      tags.classList.add("tag");
      tags.textContent = `#${this.tags[tag]}`;

      
      const tagsHeader = document.querySelectorAll(".tag");
      for(let i=0; i<tagsHeader.length; i++) {
      tagsHeader[i].addEventListener("click", () => {
      if(tagsHeader[i].outerText === this.tags[tag]) {
        console.log("d");
      }
      })
    }
      
    }

    
  }
}

/* container.innerHTML = `
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
    `; */