import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import * as authService from '../../services/authService';
import { useAuthContext } from "../../contexts/AuthContext";
 
const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    
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