import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
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
import MyPizzas from './components/MyPizzas/MyPizzas';
import Notification from './components/Common/Notification/Notification';

function App() {
    return (
        <AuthProvider>
            <NotificationProvider>
                <div className="App">
                    <div className="wrapper">
                        <Header />

                        <Notification />

                        <Routes>
                            <Route path="/" element={<Welcome />}/>
                            <Route path="/menu" element={<PizzaCards />}/>
                            <Route path="/my-pizzas" element={<MyPizzas />}/>
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
            </NotificationProvider>
        </AuthProvider>
    );
}

export default App;
