export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLikes(id, title, count, img) {
        const like = {
            id,
            title,
            count,
            img
        }
        this.likes.push(like);
        return like;
    }
}