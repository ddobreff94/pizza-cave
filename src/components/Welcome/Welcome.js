import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Welcome = () => {
    const { user } = useContext(AuthContext);

    return (
        <section className="section-welcome">
            <div className="shell">
                <div className="section__inner">
                    <h1>Welcome,  
                        {user.email.length > 0
                            ? user.email
                            : 'Guest'
                        }
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default Welcome;