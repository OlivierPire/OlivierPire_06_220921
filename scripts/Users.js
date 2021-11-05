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
    linkProfile.setAttribute("role", "Link(h2) + image")
    container.appendChild(linkProfile);
    const profilePicture = document.createElement("img");
    profilePicture.src = `./images/Photographers/${this.portrait}`;
    profilePicture.alt = this.name;
    profilePicture.classList.add("img_profile");
    linkProfile.appendChild(profilePicture);
    const name = document.createElement("h2");
    name.textContent = this.name;
    linkProfile.appendChild(name);
    const location = document.createElement("p");
    location.textContent = `${this.city}, ${this.country}`;
    location.classList.add("location");
    container.appendChild(location);
    const tagline = document.createElement("p");
    tagline.setAttribute("role", "Text paragraph")
    tagline.textContent = this.tagline;
    tagline.classList.add("tagline");
    container.appendChild(tagline);
    const price = document.createElement("p");
    price.textContent = `${this.price}€/jour`;
    price.classList.add("price");
    container.appendChild(price);
    const tagsContainer = document.createElement("div");
    container.appendChild(tagsContainer);
    tagsContainer.classList.add("tagsContainer");

    for (let tag in this.tags) {
      const tags = document.createElement("a");
      tags.setAttribute("role", "link");
      tags.setAttribute("aria-label", "Tag")
      tagsContainer.appendChild(tags);
      tags.classList.add("tag");
      tags.textContent = `#${this.tags[tag]}`;
    }

    // Tags Filter
    
    const tagsFilter = document.querySelectorAll(".tagNav");
      tagsFilter.forEach((tagNav) => {
      tagNav.addEventListener("click", () => {
        for(let i=0; i<tagsFilter.length; i++) {
          if(tagNav.innerText == "#" + this.tags[i]) {
            console.log(this.tags[i]);
            return container.style.display = "block"
          } else {
            container.style.display = "none"
          }
        }
      })
    })    
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