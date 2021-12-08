import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext'

import Header from './components/Header/Header'
import Login from './components/Login'
import Welcome from './components/Welcome/Welcome'
import PizzaCards from './components/PizzaCards/PizzaCards';
import CreatePizza from './components/CreatePizza/CreatePizza';

function App() {
    const [user, setUser] = useState({
        _id: '',
        email: '',
        accessToken: ''
    });

    const login = (authData) => {
        setUser(authData);
    };

    return (
        <AuthContext.Provider value={ { user, login } }>
            <div className="App">
                <div className="wrapper">
                    <Header />

                    <Routes>
                        <Route path="/" element={<Welcome />}/>
                        <Route path="/menu" element={<PizzaCards />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/create" element={<CreatePizza />}/>
                    </Routes>
                </div>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
