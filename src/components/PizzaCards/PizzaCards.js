import { useState, useEffect } from 'react';

import './PizzaCards.scss'

import * as pizzaService from '../../services/pizzaService.js'

import PizzaList from '../PizzaList/PizzaList';

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
                    <h2>
                        All Pizzas!
                    </h2>

                    <div className="cards__items">
                        {/* { pizzas.map(x => <PizzaCard key={x._id} pizza={x} />) } */}

                        <PizzaList pizzas={pizzas} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PizzaCards;