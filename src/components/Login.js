import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../services/authService';

const Login = ({
    onLogin
}) => {
    const navigate = useNavigate();
    
    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                onLogin(authData);

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