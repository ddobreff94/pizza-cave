import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Edit from './components/Edit/Edit';
import Welcome from './components/Welcome/Welcome'
import PizzaCards from './components/PizzaCards/PizzaCards';
import CreatePizza from './components/CreatePizza/CreatePizza';
import Details from './components/Details/Details';
import Register from './components/Register/Register';

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <div className="wrapper">
                    <Header />

                    <Routes>
                        <Route path="/" element={<Welcome />}/>
                        <Route path="/menu" element={<PizzaCards />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/logout" element={<Logout />}/>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/edit/:pizzaId" element={<Edit />}/>
                        <Route path="/create" element={<CreatePizza />}/>
                        <Route path="/details/:pizzaId" element={<Details />}/>
                    </Routes>

                    <Footer />
                </div>
            </div>
        </AuthProvider>
    );
}

export default App;
