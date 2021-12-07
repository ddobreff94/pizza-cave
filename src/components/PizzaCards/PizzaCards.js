import { useState, useEffect } from 'react';

import './PizzaCards.scss'

import * as pizzaService from '../../services/pizzaService.js'
import PizzaCard from './PizzaCard'

const PizzaCards = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        pizzaService.getAllPizzas()
            .then(result => {
                setPizzas(result)
            });
    }, []);

    return (
        <section>
            <div className="shell">
                <div className="cards-pizza">
                    <div className="cards__items">
                        { pizzas.map(x => <PizzaCard key={x._id} pizza={x} />) }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PizzaCards;