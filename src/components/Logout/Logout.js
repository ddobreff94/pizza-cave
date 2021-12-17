import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import * as authService from '../../services/authService';
import { useAuthContext } from "../../contexts/AuthContext";
import { useNotificationContext, types } from '../../contexts/NotificationContext';
 
const Logout = () => {
    const navigate = useNavigate();
    const { addNotification } = useNotificationContext();
    const { user, logout } = useAuthContext();
    
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                console.log('test')
                logout();
                navigate('/');
                addNotification('You logged out', types.warn);
            })
    }, [])

    // Before logout window
    return null
}

export default Logout;