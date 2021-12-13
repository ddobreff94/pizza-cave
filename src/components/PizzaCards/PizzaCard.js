import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import * as pizzaService from '../../services/pizzaService';
import { AuthContext } from "../../contexts/AuthContext";

const PizzaCard = ({
    pizza
}) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const deleteHandler = (event) => {
        event.preventDefault();

        pizzaService.destroy(pizza._id, user.accessToken)
            .then(() => {
                navigate('/');
                navigate('/menu');
            });    
    }

    const deleteButton = (
        <a href="#" className="card__delete" onClick={deleteHandler}>
            Delete
        </a>
    );

    return (
        <div className="cards__item">
            <div className="card-pizza">
                <figure>
                    <img src={pizza.imageUrl} alt="Pizza" />
                </figure>

                <div className="card__content">
                    <h4>
                        {pizza.name}
                    </h4>

                    <div className="card__actions">
                        <Link className="card__button" to={`/details/${pizza._id}`}>
                            See more
                        </Link>

                        { user._id && (user._id === pizza._ownerId)
                            ? deleteButton 
                            : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaCard;
