import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext'

import Header from './components/Header/Header'
import Login from './components/Login'
import Welcome from './components/Welcome/Welcome'
import PizzaCards from './components/PizzaCards/PizzaCards';
import { useState } from 'react';

function App() {
    const [user, setUser] = useState({
        _id: '',
        email: '',
        accessToken: ''
    });

    const onLogin = (authData) => {
        setUser(authData);
    };

    return (
        <AuthContext.Provider value={true}>
            <div className="App">
                <div className="wrapper">
                    <Header email={user.email} />

                    <Routes>
                        <Route path="/" element={<Welcome />}/>
                        <Route path="/menu" element={<PizzaCards />}/>
                        <Route path="/login" element={<Login onLogin={onLogin} />}/>
                    </Routes>
                </div>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
