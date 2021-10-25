import Image from "./Image.js";
export default class Sort {
    
    static media = [];
    static index = 0;
    static dateArray = [];
    static likeArray = [];
    static titleArray = [];

    addMedia(media) {
        Sort.media = media;
    }

    sortByDate() {
        const select = document.querySelector("select")
        select.addEventListener("click", () => {
            Sort.dateArray.sort() 
            console.log("ok");
            generateHtml()
        })
        Sort.media.forEach((media) => Sort.dateArray.push(media.date))
        Sort.media.forEach((media) => Sort.likeArray.push(media.likes))  
        Sort.media.forEach((media) => Sort.titleArray.push(media.title))     
         
        Sort.likeArray.sort()
        Sort.titleArray.sort()
        console.log(Sort.likeArray); 
    }
    
     
}

