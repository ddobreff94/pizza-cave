import * as request from './requester';

const baseUrl = "http://localhost:3030/";

export const getAllPizzas = () => request.get(`${baseUrl}data/pizzas`);

export const getMyPizzas = (ownerId) => {
    let pizzaQuery = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}data/pizzas?where=${pizzaQuery}`);
};

export const create = async (pizzaData, token) => {
    let response = await fetch(`${baseUrl}data/pizzas`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({...pizzaData, likes: []})
    });

    let result = await response.json();

    return result
}

export const update = (pizzaId, pizzaData) => request.put(`${baseUrl}data/pizzas/${pizzaId}`, pizzaData);

export const getOnePizza = (pizzaId) => {
    return fetch(`${baseUrl}data/pizzas/${pizzaId}`)
        .then(res => res.json())
};

export const destroy = (pizzaId, token) => {
    return fetch(`${baseUrl}data/pizzas/${pizzaId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
}

export const like = (pizzaId, pizza, token) => {
    return fetch(`${baseUrl}data/pizzas/${pizzaId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(pizza)
    }).then(res => res.json());
};