import { useState, useEffect } from "react";
import * as pizzaService from '../services/pizzaService.js'

const usePizzaState = (pizzaId) => {
    const [pizza, setPizza] = useState({});

    useEffect(() => {
        pizzaService.getOnePizza(pizzaId)
            .then(pizzaResult => {
                setPizza(pizzaResult);
            })
    }, [pizzaId]);

    return [
        pizza,
        setPizza
    ]
}

export default usePizzaState;