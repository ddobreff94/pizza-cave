import { useNavigate } from 'react-router';
import * as pizzaService from '../../services/pizzaService';
import { useAuthContext } from '../../contexts/AuthContext';

const CreatePizza = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const onPizzaCreate = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const name = formData.get('name');
        const description = formData.get('description');
        const imageUrl = formData.get('image');
        const ingredients = formData.get('ingredients').split(',');

        // console.log(name, description, image, ingredients);

        pizzaService.create({
            name,
            imageUrl,
            description,
            ingredients
        }, user.accessToken)
            .then(result => {
                navigate('/menu');
            })
    }

    return (
        <form action="POST" onSubmit={onPizzaCreate}>
            <div className="form__body">
                <div className="form__row">
                    <label htmlFor="pizzaName" className="form__label">
                        Pizza Name
                    </label>
                    
                    <div className="form__controls">
                        <input type="text" name="name" id="pizzaName" className="field" />
                    </div>
                </div>|

                <div className="form__row">
                    <label htmlFor="pizzaImage" className="form__label">
                        Pizza Image
                    </label>
                    
                    <div className="form__controls">
                        <input type="url" name="image" id="pizzaImage" className="field" placeholder="Enter image URL" />
                    </div>
                </div>|

                <div className="form__row">
                    <label htmlFor="pizzaDescription" className="form__label">
                        Pizza Description
                    </label>
                    
                    <div className="form__controls">
                        <textarea name="description" id="pizzaDescription" className="field field--textarea"></textarea>
                    </div>
                </div>|

                <div className="form__row">
                    <label htmlFor="pizzaIngredients" className="form__label">
                        Ingredients
                    </label>
                    
                    <div className="form__controls">
                        <textarea name="ingredients" id="pizzaIngredients" className="field field--textarea"></textarea>
                    </div>
                </div>|
            </div>

            <div className="form__actions">
                <button>Create pizza!</button>
            </div>
        </form>
    )
};

export default CreatePizza;