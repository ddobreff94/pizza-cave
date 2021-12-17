import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

import './Login.scss'

const Login = () => {
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();
    
    const onLoginHandler = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email');
        const password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);
                addNotification('You logged in successfully', types.success);
                navigate('/');
            })
            .catch(err => {
                addNotification('Wrong password/email, please try again', types.error);
                console.log(err);
            });
    }

    return (
        <section className='section-login'>
            <div className="shell">
                <div className="section__inner">
                    <form onSubmit={onLoginHandler} method="POST">
                        <div className='form__head'>
                            <h3>
                                Please fill in the details bellow
                            </h3>
                        </div>

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
                            <input type="submit" className='form__btn btn' value="Log in" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
        
    );
}

export default Login;