import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import Login from './components/Login'
import Welcome from './components/Welcome/Welcome'
import PizzaCards from './components/PizzaCards/PizzaCards';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />

                <Routes>
                    <Route path="/" element={<Welcome />}/>
                    <Route path="/menu" element={<PizzaCards />}/>
                    <Route path="/login" element={<Login />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
