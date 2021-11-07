        
const next = document.querySelector(".arrow-next");
const prev = document.querySelector(".arrow-prev");
const lightboxContainer = document.getElementById("lightbox");
const lightbox = document.getElementById("lightbox")
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

        function handlerPlus() {
            Lightbox.slide(1);
        }

        function handlerMoins() {
            Lightbox.slide(-1);
        }
    

        const closeLightbox = document.querySelector(".lightbox_close");
        closeLightbox.addEventListener("click", () => {
            lightbox.style.display = "none";
            lightboxContainer.style.display = "none";
            next.removeEventListener('click', handlerPlus);
            prev.removeEventListener('click', handlerMoins);

        });
        
        window.addEventListener("keydown", function(e) {
            if (e.key === "+") {
                handlerPlus()
            } else if (e.key === "-") {
                handlerMoins()
            }
        })
        
        window.addEventListener("keydown", e => {
            if (e.key === "Escape") {
                lightbox.style.display = "none";
                lightboxContainer.style.display = "none";
            } 
        })

        next.addEventListener('click', handlerPlus)
        prev.addEventListener('click', handlerMoins)  
    }

    static slide(operation) {
        Lightbox.media[Lightbox.index].deleteHtmlForLightbox();
        Lightbox.index = (((Lightbox.index + operation)%Lightbox.media.length)+Lightbox.media.length)%Lightbox.media.length;
        Lightbox.displaySlide();
    }

    static displaySlide() {
        lightboxContainer.style.display = "block";
        Lightbox.media[Lightbox.index].generateHtmlForLightbox(lightboxContainer);      
    } 
}

