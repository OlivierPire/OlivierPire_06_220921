export default class Sort {

    constructor(media) {
        this.media = media
    }
    
    resetHtml() {
        const picturesContainer = document.getElementById("all_pictures_container");
        picturesContainer.innerHTML = "";
    }
    
    sortByLikes() {
        this.resetHtml()
        this.media.sort((a, b) => a.likes - b.likes);
        this.media.forEach((media) => media.generateHtml());
    }

    sortByDates() {
        this.resetHtml()
        this.media.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.media.forEach((media) => media.generateHtml())
    }

    sortByTitles() {
        this.resetHtml()
        this.media.sort((a, b) => {
            if(a.title < b.title) {
                return -1
            } else if (a.title > b.title) {
                return 1
            } else {
                return 0
            }
        });
        this.media.forEach((media) => media.generateHtml())
    }

    sortBy() {
        this.sortByTitles();
        const select = document.getElementById("select");
        select.addEventListener("change", (e) => {
            if(e.target.value == "popular") {
                this.sortByLikes()
            } else if (e.target.value == "date") {
                this.sortByDates()
            } else if (e.target.value == "title") {
                this.sortByTitles()
            }
        })
    }
}