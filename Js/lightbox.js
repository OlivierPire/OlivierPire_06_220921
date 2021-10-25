export default class Lightbox {
    
    static media = [];
    static index = 0;

    addMedia(media) {
        Lightbox.media = media;
    }
    
    static displayLightbox(id, media, title) {

        for(let i=0; i < Lightbox.media.length; i++)  {
            if(Lightbox.media[i].id === id) {
                Lightbox.index = i;
                break
            }
        }

        Lightbox.displaySlide();

        const next = document.querySelector(".arrow-right");
        const prev = document.querySelector(".arrow-left");

        next.addEventListener('click', () => {
            Lightbox.slide(1);
        })

        prev.addEventListener('click', () => {
            Lightbox.slide(-1)
        })

        // ÉTAPE 1, RÉCUPÉRER LE MEDIA CORRESPOND A L'ID DANS MON TABLEAU MEDIA. UN truc du style for(i = 0; i < Lightbox.media.length; i++) if(Lightbox.media[i].id === source)=>this.index = i;break;})
        // etape 2 : lancer la modal et afficher Lightbox.media[Lightbox.index];
        
        //arrowLeft.addEventListener("click")
         
    }

    static slide(operation) {
        Lightbox.index = (((Lightbox.index + operation)%Lightbox.media.length)+Lightbox.media.length)%Lightbox.media.length;
        Lightbox.displaySlide()
    }

    static displaySlide() {
        const lightboxContainer = document.getElementById("lightbox");
        lightboxContainer.style.display = "block";
        Lightbox.media[Lightbox.index].generateHtmlForLightbox(lightboxContainer);      
        const lightboxTitle = document.createElement("span");
        lightboxTitle.classList.add("lightbox_title");
        lightboxTitle.textContent = Lightbox.media[Lightbox.index].title;
        lightboxContainer.appendChild(lightboxTitle)
        const closeLightbox = document.querySelector(".lightbox_close");

        closeLightbox.addEventListener("click", () => {
            lightboxContainer.style.display = "none";
        })
    } 
}

