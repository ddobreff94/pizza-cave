const baseUrl = "http://localhost:3030/";

export function getAllPizzas() {
    return fetch(`${baseUrl}data/pizzas`)
        .then(res => res.json())
};

export const create = async (pizzaData, token) => {
    let response = await fetch(`${baseUrl}data/pizzas`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(pizzaData)
    });

    let result = await response.json();

    return result
}

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