const baseUrl = "http://localhost:3030/data/pizzas";

export function getAllPizzas() {
    return fetch(baseUrl)
        .then(res => res.json())
};