import { elements } from './base';

export const toggleLikeBtn = isLiked => {
    const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
    document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${iconString}`);
};

export const toggleLikeMenu = numLikes => {
    elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
};

export const renderLike = like => {
    const markup = `
            <li>
                <a class="results__link results__link--active" href="#${like.id}">
                    <figure class="results__fig">
                        <img src="${like.img}" alt="${like.title}">
                    </figure>
                    <div class="results__data">
                        <h4 class="results__name">${like.title}</h4>
                        <p class="results__author">${like.author}</p>
                    </div>
                </a>
            </li>
    `;
    elements.likesList.insertAdjacentHTML('beforeend', markup);
};