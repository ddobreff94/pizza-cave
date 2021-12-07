const Login = () => {
    return (
        <form>
            <div className="form__body">
                <div className="form__row">
                    <label htmlFor="loginUsername" className="form__label"></label>

                    <div className="form__controls">
                        <input type="text" id="loginUsername" className="field" placeholder="Username" required />
                    </div>
                </div>

                <div className="form__row">
                    <label htmlFor="loginPassword" className="form__label"></label>

                    <div className="form__controls">
                        <input type="text" id="loginPassword" className="field" placeholder="Password" required />
                    </div>
                </div>
            </div>

            <div className="form__actions">
                <input type="submit" value="Log in" />
            </div>
        </form>
    );
}

export default Login;