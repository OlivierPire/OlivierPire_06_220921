export default class Lightbox {
    
    static media = [];
    static index = 0;

    addMedia(media) {
        Lightbox.media = media;
    }
    
    static displayLightbox(id) {

        for(let i=0; i < Lightbox.media.length; i++)  {
            if(Lightbox.media[i].id === id) {
                Lightbox.index = i;
                break
            }
        }

        Lightbox.displaySlide();
        
        const next = document.querySelector(".arrow-next");
        const prev = document.querySelector(".arrow-prev");

        next.addEventListener('click', () => {
            Lightbox.slide(1);
        })

        prev.addEventListener('click', () => {
            Lightbox.slide(-1)
        })  
    }

    static slide(operation) {
        Lightbox.index = (((Lightbox.index + operation)%Lightbox.media.length)+Lightbox.media.length)%Lightbox.media.length;
        Lightbox.displaySlide();
    }

    static displaySlide() {
        const lightboxContainer = document.getElementById("lightbox");
        lightboxContainer.style.display = "block";
        Lightbox.media[Lightbox.index].generateHtmlForLightbox(lightboxContainer);      
        const closeLightbox = document.querySelector(".lightbox_close");
        closeLightbox.addEventListener("click", () => {
            lightboxContainer.style.display = "none";
            
        })

        window.addEventListener("keydown", e => {
            if (e.key === "+") {
                Lightbox.slide(1)
            } else if (e.key === "-") {
                Lightbox.slide(-1)
            }
        })
        
        window.addEventListener("keydown", e => {
            if (e.key === "Escape") {
                lightboxContainer.style.display = "none";
            } 
        })

        console.log(Lightbox.index);
    } 
}

