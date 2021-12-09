import { useNavigate, useParams } from "react-router";
import { useEffect, useState, useContext } from "react";
import * as pizzaService from '../../services/pizzaService.js'

const Details = () => {
    const [pizza, setPizza] = useState({});
    const { pizzaId } = useParams();

    useEffect(() => {
        pizzaService.getOnePizza(pizzaId)
            .then(pizzaResult => {
                setPizza(pizzaResult);
            })
    }, [pizzaId])

    return(
        <section className="section-details">
            <div className="shell">
                <div className="section__inner">
                    <h2>
                        {pizza.name}
                    </h2>

                    <figure>
                        <img src={pizza.imageUrl} alt="Pizza image" />
                    </figure>

                    <div className="section__content">
                        <div className="section__entry">
                            <p>{pizza.description}</p>
                        </div>

                        <div className="section__list">
                            <ul>
                                {/* {pizza.ingredients.map(x => <li key={x}>{x}</li>)} */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Details;