import { Link, useNavigate } from 'react-router-dom'
import './Header.scss'
import logo from '../../images/svgs/logo.svg';

const Header = ({
    email
}) => {
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

                <li><a href="#">Create a pizza</a></li>

                <li><a href="#">Log out</a></li>
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
                    
                    {email
                        ? userNavigation
                        : guestNavigation
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;