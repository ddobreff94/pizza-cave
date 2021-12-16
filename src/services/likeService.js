import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, pizzaId) => request.post(`${baseUrl}/likes`, {userId, pizzaId});
export const getPizzaLikes = (pizzaId) => {
    const likeQuerry = encodeURIComponent(`pizzaId="${pizzaId}"`);

    return request.get(`${baseUrl}/likes?select=userId&where=${likeQuerry}`)
        .then(res => res.map(x => x.userId));
};