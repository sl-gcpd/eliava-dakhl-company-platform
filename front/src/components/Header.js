import '../styles/Header.css'
import {BiHomeAlt, BiCartAlt, BiLogInCircle, BiUser} from 'react-icons/bi'

const Header = () => {
    return (
        <header>
            <nav className="nav-collapse">
                <ul>
                    <li className="menu-item active"><a href="#"><BiHomeAlt/></a></li>
                    <li className="menu-item active"><a href="#"><BiCartAlt/></a></li>
                    <li className="menu-item active"><a href="#"><BiUser/></a></li>
                    <li className="menu-item active"><a href="#"><BiLogInCircle/></a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
