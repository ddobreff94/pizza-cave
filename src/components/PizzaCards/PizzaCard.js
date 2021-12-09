import { Link } from "react-router-dom";

const PizzaCard = ({
    pizza
}) => {
    return (
        <div className="cards__item">
            <div className="card-pizza">
                <figure>
                    <img src={pizza.imageUrl} alt="Pizza image" />
                </figure>

                <div className="card__content">
                    <h4>
                        {pizza.name}
                    </h4>

                    {/* <div className="card__list">
                        <h5>
                            Ingredients
                        </h5>

                        <ul>    
                            {pizza.ingredients.map(x => <li key={x}>{x}</li>)}
                        </ul>
                    </div> */}

                    {/* <div className="card__entry">
                        <p>
                            {pizza.description}
                        </p>
                    </div> */}

                    <div className="card__actions">
                        <Link className="card__button" to={`/details/${pizza._id}`}>
                            See more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaCard;
