import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import usePizzaState from "../../hooks/usePizzaState.js";

import { useNotificationContext, types } from '../../contexts/NotificationContext';
import * as likeService from '../../services/likeService';

import './Details.scss'

const Details = () => {
    const { user } = useAuthContext();
    const { pizzaId } = useParams();
    const { addNotification } = useNotificationContext();
    const [pizza, setPizza] = usePizzaState(pizzaId);

    useEffect(() => {
        likeService.getPizzaLikes(pizzaId)
            .then(likes => {
                setPizza(state => ({...state, likes}))
            })
    }, []);

    const likeButtonClickHandler = () => {
        if (user._id === pizza._ownerId) {
            return;
        }

        if (pizza.likes.includes(user._id)) {
            addNotification('You cannot like again', types.error)
            return;
        }

        likeService.like(user._id, pizzaId)
            .then(() => {
                setPizza(state => ({...state, likes: [...state.likes, user._id]}));

                addNotification('Successfuly liked a cat :)', types.success);
            });
    };

    const editButton = (
        <Link to={`/edit/${pizza._id}`} className="section__edit">
            Edit
        </Link> 
    );

    const likeButton = (
        <button className="section__like btn btn--blue" onClick={likeButtonClickHandler}>
            Like
        </button>
    );

    return (
        <section className="section-details">
            <div className="shell">
                <div className="section__inner">
                    <h2>
                        {pizza.name}
                    </h2>

                    <figure>
                        <img src={pizza.imageUrl} alt="Pizza" />
                    </figure>

                    <div className="section__content">
                        <div className="section__entry">
                            <p>{pizza.description}</p>
                        </div>

                        <div className="section__list">
                            <ul>
                                {pizza.ingredients?.map(x => <li key={x}>{x}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className="section__actions">
                        <div className="section__likes">
                            {likeButton}

                            <p>
                                Likes: {pizza.likes?.length || 0}
                            </p>
                        </div>

                        { user._id && (user._id === pizza._ownerId)
                            ? editButton
                            : ''
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;