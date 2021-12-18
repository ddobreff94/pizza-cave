import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as pizzaService from '../../services/pizzaService';
import usePizzaState from '../../hooks/usePizzaState';

import './Edit.scss';

const Edit = () => {
    const navigate = useNavigate();
    const { pizzaId } = useParams();
    const [pizza, setPizza] = usePizzaState(pizzaId);
    const [errors, setErrors] = useState({
        name: false,
        image: false
    })

    const nameError = 'Your pizza name sould at least contain 3 characters!';
    const urlError = 'This field should contain URL address';

    const pizzaEditHandler  = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const description = formData.get('description');
        const imageUrl = formData.get('image');
        const ingredients = formData.get('ingredients').split(',');

        let pizzaDataUpdated = {
            description: description,
            imageUrl: imageUrl,
            ingredients: ingredients,
            name: name,
        }

        pizzaService.update(pizza._id, pizzaDataUpdated);
        navigate('/');
        navigate('/menu');
    };

    const nameChangeHandler = (e) => {
        let currentValue = e.target.value;

        if (currentValue.length < 3) {
            setErrors(state => ({...state, name: true}))
        } else {
            setErrors(state => ({...state, name: false}))
        }

        console.log(Object.values(errors).every(Boolean))
    }

    return(
        <section className='section-edit'>
            <div className="shell">
                <div className="section__inner">
                    <form action="POST" onSubmit={pizzaEditHandler} className='form-edit'>
                        <div className="form__body">
                            <div className={errors.name ? 'form__row error' : 'form__row'}>
                                <label htmlFor="pizzaName" className="form__label">
                                    Pizza Name
                                </label>
                                
                                <div className="form__controls">
                                    <input type="text" name="name" id="pizzaName" className="field" onChange={nameChangeHandler} defaultValue={pizza.name} />
                                </div>

                                <span className='form__error'>{ errors.name ? nameError : ''}</span>
                            </div>

                            <div className="form__row">
                                <label htmlFor="pizzaImage" className="form__label">
                                    Pizza Image
                                </label>
                                
                                <div className="form__controls">
                                    <input type="url" name="image" id="pizzaImage" className="field" placeholder="Enter image URL" defaultValue={pizza.imageUrl} />
                                </div>
                            </div>

                            <div className="form__row">
                                <label htmlFor="pizzaDescription" className="form__label">
                                    Pizza Description
                                </label>
                                
                                <div className="form__controls">
                                    <textarea name="description" id="pizzaDescription" className="field field--textarea" defaultValue={pizza.description}></textarea>
                                </div>
                            </div>

                            <div className="form__row">
                                <label htmlFor="pizzaIngredients" className="form__label">
                                    Ingredients
                                </label>
                                
                                <div className="form__controls">
                                    <textarea name="ingredients" id="pizzaIngredients" className="field field--textarea" defaultValue={pizza.ingredients}></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="form__actions">
                            <button className={!errors ? 'btn btn--yellow disabled' : 'btn btn--yellow'}>Edit pizza!</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        
    );
}

export default Edit;