import Image from "./Image.js"
import Video from "./Video.js"
export default class MediaFactory {
    constructor(type,id,photographerId,title,tags,likes,date,price,source,video) {
        this.type = type;
        if(this.type === "video") {
            return new Video(id,photographerId,title,tags,likes,date,price,source,video).generateVideo()
        } else if (this.type === "image") {
            return new Image(id,photographerId,title,tags,likes,date,price,source).generateImage();
        } else {
            throw "Le type de média n'est pas bon"
        }
    } 
}







