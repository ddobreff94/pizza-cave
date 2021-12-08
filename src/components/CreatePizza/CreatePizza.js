const CreatePizza = () => {
    const onPizzaSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData);
    }

    return(
        <form action="POST" onSubmit={onPizzaSubmit}>
            <div className="form__body">
                <div className="form__row">
                    <label htmlFor="pizzaName" className="form__label">
                        Pizza Name
                    </label>
                    
                    <div className="form__controls">
                        <input type="text" name="pizzaName" id="pizzaName" className="field" />
                    </div>
                </div>|

                <div className="form__row">
                    <label htmlFor="pizzaImage" className="form__label">
                        Pizza Image
                    </label>
                    
                    <div className="form__controls">
                        <input type="url" name="pizzaImage" id="pizzaImage" className="field" placeholder="Enter image URL" />
                    </div>
                </div>|

                <div className="form__row">
                    <label htmlFor="pizzaDescription" className="form__label">
                        Pizza Description
                    </label>
                    
                    <div className="form__controls">
                        <textarea name="pizzaDescription" id="pizzaDescription" className="field field--textarea"></textarea>
                    </div>
                </div>|

                <div className="form__row">
                    <label htmlFor="pizzaIngredients" className="form__label">
                        Ingredients
                    </label>
                    
                    <div className="form__controls">
                        <textarea name="pizzaIngredients" id="pizzaIngredients" className="field field--textarea"></textarea>
                    </div>
                </div>|
            </div>
        </form>
    )
};

export default CreatePizza;