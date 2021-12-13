import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import * as pizzaService from '../../services/pizzaService';
import { useAuthContext } from "../../contexts/AuthContext";
import ConfirmPopup from '../Common/ConfirmPopup/ConfirmPopup'

const PizzaCard = ({
    pizza
}) => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const [showDeletePopup, setShowDeletePopup] = useState(false);

    const deleteHandler = (event) => {
        event.preventDefault();

        pizzaService.destroy(pizza._id, user.accessToken)
            .then(() => {
                navigate('/');
                navigate('/menu');
            });
    }

    const deleteClickHandler = (event) => {
        event.preventDefault();

        if (!showDeletePopup) {
            setShowDeletePopup(true);
        } else {
            setShowDeletePopup(false);
        }
    }

    const deleteButton = (
        <a href="#" className="card__delete" onClick={deleteClickHandler}>
            Delete
        </a>
    );

    return (
        <>
            {showDeletePopup
                ? <ConfirmPopup deleteClickHandler={deleteClickHandler} deleteHandler={deleteHandler}/>
                : ''
            }

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
        </>
    )
}

export default PizzaCard;
