import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

import './Register.scss';

const Register = () => {
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();

    const registerSubmitHandler = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email');
        const password = formData.get('password');
        
        console.log(email, password)

        authService.register(email, password)
            .then(authData => {
                login(authData);
                navigate('/');
                addNotification('You successfully created an account!', types.success);
            })
    }

    return (
        <section className="section-register">
            <div className="shell">
                <div className="section__inner">
                    <h2>
                        Create a new account
                    </h2>

                    <form id="registerForm" onSubmit={registerSubmitHandler} method="POST">
                        <div className="form__body">
                            <div className="form__row">
                                <label htmlFor="formEmail" className="form__label">
                                    Email
                                </label>

                                <div className="form__controls">
                                    <input type="email" name="email" id="formEmail" className="field" />
                                </div>
                            </div>

                            <div className="form__row">
                                <label htmlFor="formPassword" className="form__label">
                                    Password
                                </label>

                                <div className="form__controls">
                                    <input type="password" name="password" id="formPassword" className="field" />
                                </div>
                            </div>
                        </div>

                        <div className="form__actions">
                            <button className='btn btn--blue'>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Register;