import './PizzaList.scss'
import PizzaCard from '../PizzaCards/PizzaCard';

const PizzaList = ({
    pizzas
}) => { 
    const pizzaList = (
        <>
            {pizzas.map(x => <PizzaCard key={x._id} pizza={x} />) }
        </>
    );

    return (
        <>
            {pizzas.length > 0
                ? pizzaList
                : <p>No pizzas in the database!</p>
            }
        </>
    );
}

export default PizzaList;