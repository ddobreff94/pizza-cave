import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const onLoginHandler = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email');
        const password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);
                navigate('/');
            })
            .catch(err => {
                // TODO: show notification
                console.log(err);
            });
    }

    return (
        <form onSubmit={onLoginHandler} method="POST">
            <div className="form__body">
                <div className="form__row">
                    <label htmlFor="loginUsername" className="form__label"></label>

                    <div className="form__controls">
                        <input type="text" id="loginUsername" name="email" className="field" placeholder="Username" required />
                    </div>
                </div>

                <div className="form__row">
                    <label htmlFor="loginPassword" className="form__label"></label>

                    <div className="form__controls">
                        <input type="password" name="password" id="loginPassword" className="field" placeholder="Password" required />
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