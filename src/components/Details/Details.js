import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import usePizzaState from "../../hooks/usePizzaState.js";

const Details = () => {
    const { user } = useAuthContext();
    const { pizzaId } = useParams();
    const [pizza, setPizza] = usePizzaState(pizzaId);
    
    const editButton = (
        <Link to={`/edit/${pizza._id}`} className="section__edit">
            Edit
        </Link> 
    );

    // const likeButtonClick = () => {
    //     pizzaService.like();
    // };

    const likeButton = (
        <button className="section__like">
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

                        <span className="section__likes">
                            Likes: { pizza.likes }
                        </span>
                    </div>

                    <div className="section__actions">
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