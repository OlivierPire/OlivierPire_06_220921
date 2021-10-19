import Image from "./Image.js"
import Video from "./Video.js"
export default class MediaFactory {
    constructor(type,id,photographerId,title,tags,likes,date,price,source,media) {
        this.type = type;
        if(this.type === "video") {
            return new Video(id,photographerId,title,tags,likes,date,price,source)
        } else if (this.type === "image") {
            return new Image(id,photographerId,title,tags,likes,date,price,source,media)
        } else {
            throw "Le type de média n'est pas bon"
        }
    } 
} 







