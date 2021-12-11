import { Routes, Route, useNavigate } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext'
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Welcome from './components/Welcome/Welcome'
import PizzaCards from './components/PizzaCards/PizzaCards';
import CreatePizza from './components/CreatePizza/CreatePizza';
import Details from './components/Details/Details';
import Register from './components/Register/Register';

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: ''
}

function App() {
    // Persistance, if not needed use usestate
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const login = (authData) => {
        setUser(authData);
    };

    const logout = () => {
        setUser(initialAuthState);
    };

    return (
        <AuthContext.Provider value={ { user, login, logout } }>
            <div className="App">
                <div className="wrapper">
                    <Header />

                    <Routes>
                        <Route path="/" element={<Welcome />}/>
                        <Route path="/menu" element={<PizzaCards />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/logout" element={<Logout />}/>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/create" element={<CreatePizza />}/>
                        <Route path="/details/:pizzaId" element={<Details />}/>
                    </Routes>
                </div>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
