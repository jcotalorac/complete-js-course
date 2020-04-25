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

    deleteLike(id) {
        const index = this.likes.findIndex(element => element.id === id);

        this.likes.splice(index, 1);
    }
}