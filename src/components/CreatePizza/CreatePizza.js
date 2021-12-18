import { useNavigate } from 'react-router';
import * as pizzaService from '../../services/pizzaService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import './CreatePizza.scss'

const CreatePizza = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const { addNotification } = useNotificationContext();

    const onPizzaCreate = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const name = formData.get('name');
        const description = formData.get('description');
        const imageUrl = formData.get('image');
        const ingredients = formData.get('ingredients').split(',');

        pizzaService.create({
            name,
            imageUrl,
            description,
            ingredients
        }, user.accessToken)
            .then(result => {
                navigate('/menu');
                addNotification('You successfully created a pizza!', types.success);
            })
    }

    return (
        <section className='section-create'>
            <div className="shell">
                <div className="section__inner">
                    <form action="POST" onSubmit={onPizzaCreate} className='form-create'>
                        <div className="form__body">
                            <div className="form__row">
                                <label htmlFor="pizzaName" className="form__label">
                                    Pizza Name
                                </label>
                                
                                <div className="form__controls">
                                    <input type="text" name="name" id="pizzaName" className="field" />
                                </div>
                            </div>

                            <div className="form__row">
                                <label htmlFor="pizzaImage" className="form__label">
                                    Pizza Image
                                </label>
                                
                                <div className="form__controls">
                                    <input type="url" name="image" id="pizzaImage" className="field" placeholder="Enter image URL" />
                                </div>
                            </div>

                            <div className="form__row">
                                <label htmlFor="pizzaDescription" className="form__label">
                                    Pizza Description
                                </label>
                                
                                <div className="form__controls">
                                    <textarea name="description" id="pizzaDescription" className="field field--textarea"></textarea>
                                </div>
                            </div>

                            <div className="form__row">
                                <label htmlFor="pizzaIngredients" className="form__label">
                                    Ingredients <small>(please separate the products with comma)</small>  
                                </label>
                                
                                <div className="form__controls">
                                    <textarea name="ingredients" id="pizzaIngredients" className="field field--textarea" placeholder='e.g. cheese, oregano, basil'></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="form__actions">
                            <button className='form__btn btn btn--green'>Create pizza!</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default CreatePizza;