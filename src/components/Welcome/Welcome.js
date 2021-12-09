import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Welcome = () => {
    const { user } = useContext(AuthContext);

    return (
        <h1>Welcome,  
            {user.email.length > 0
                ? user.email
                : 'Guest'
            }
        </h1>
    );
}

export default Welcome;