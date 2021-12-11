import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import * as authService from '../../services/authService';
import { AuthContext } from "../../contexts/AuthContext";
 
const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                console.log('test')
                logout();
                navigate('/');
            })
    }, [])

    // Before logout window
    return null
}

export default Logout;