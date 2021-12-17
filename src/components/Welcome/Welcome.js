import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import './Welcome.scss';

const Welcome = () => {
    const { user } = useContext(AuthContext);
    const userName = user.email.split('@');

    return (
        <section className="section-welcome">
            <div className="shell">
                <div className="section__inner">
                    <h1>Welcome,   
                        {user.email.length > 0
                            ? ' ' + userName[0]
                            : 'Guest'
                        }
                        !
                    </h1>

                    <p>
                        Please continue by selecting an option from the navigation.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Welcome;