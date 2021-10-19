export default class Lightbox {
    
    constructor() {
        this.media = [];
        this.index = 0;
    }

    addMedia(media) {
        this.media = media;
    }
    
    static displayLightbox(photographerId, media, title) {
        console.log(this.index);
        const lightboxContainer = document.getElementById("lightbox");
        lightboxContainer.style.display = "block";
        const imgContainer = document.getElementById("lightbox_container");
        lightboxContainer.appendChild(imgContainer);
        const lightboxMedia = document.createElement("img");
        lightboxMedia.classList.add("lightbox_picture");
        lightboxMedia.style.display = "block";
        lightboxMedia.src = "images/" + photographerId + "/" + media;
        imgContainer.appendChild(lightboxMedia);       
        const lightboxTitle = document.createElement("span");
        lightboxTitle.classList.add("lightbox_title");
        lightboxTitle.textContent = title;
        lightboxContainer.appendChild(lightboxTitle)
        const closeLightbox = document.querySelector(".lightbox_close");

        closeLightbox.addEventListener("click", () => {
            lightboxContainer.style.display = "none";
            lightboxMedia.style.display = "none";
            lightboxTitle.style.display = "none"
        })

        const next = document.querySelector(".arrow-right");
        const prev = document.querySelector(".arrow-left");

        next.addEventListener('click', () => {
            console.log(media);
        })

        
        
        // ÉTAPE 1, RÉCUPÉRER LE MEDIA CORRESPOND A L'ID DANS MON TABLEAU MEDIA. UN truc du style for(i = 0; i < Lightbox.media.length; i++) if(Lightbox.media[i].id === source)=>this.index = i;break;})
       
        /*for(let i=0; i < Lightbox.length; i++) 
        if(Lightbox.media[i].id === source) {
            this.index = i;
            break
        }*/

        // etape 2 : lancer la modal et afficher Lightbox.media[Lightbox.index];
        
        //arrowLeft.addEventListener("click")
        
    
    }



    goLeft() {
        console.log(this.media);
        // this.index--;
        // afficher les données de this.media[this.index];
    }
    
    
}

