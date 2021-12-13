import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';
import logo from '../../images/svgs/logo.svg';
import './Header.scss'

const Header = () => {
    const { user } = useAuthContext();

    const guestNavigation = (
        <nav className="nav header__nav">
            <ul>    
                <li><Link to="/login">Log in</Link></li>

                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );

    const userNavigation = (
        <nav className="nav header__nav">
            <ul>
                <li><Link to="/">Home</Link></li>

                <li><Link to="/menu">Menu</Link></li>

                <li><Link to="/create">Create a pizza</Link></li>

                <li><Link to="/logout">Log out</Link></li>
            </ul>
        </nav>
    )

    return(
        <header id="home" className="header">
            <div className="shell">
                <div className="header__inner">
                    <Link to="/" className="logo header__logo">
                        <img src= { logo } alt="Logo" />
                    </Link>
                    
                    {user.email.length > 0
                        ? userNavigation
                        : guestNavigation
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;