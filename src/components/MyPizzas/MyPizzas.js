import { useState, useEffect } from 'react';
import * as pizzaService from '../../services/pizzaService.js'

import PizzaList from '../PizzaList/PizzaList';
import { useAuthContext } from '../../contexts/AuthContext';

const MyPizzas = () => {
    const [pizzas, setPizzas] = useState([]);

    const { user } = useAuthContext();

    useEffect(() => {
        pizzaService.getMyPizzas(user._id)
            .then(pizzasResult => {
                setPizzas(pizzasResult)
            });
    }, [])

    return (
        <div className="section-my-pizzas">
            <div className="shell">
                <div className="section__inner">
                    <div className="cards-pizza">
                        <h2>
                            My Pizza List!
                        </h2>

                        <div className="cards__items">
                            <PizzaList pizzas={pizzas} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPizzas;