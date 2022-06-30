import '../styles/Header.css'
import {BiHomeAlt, BiCartAlt, BiLogInCircle, BiUser} from 'react-icons/bi'

const Header = () => {
    return (
        <header>
            <nav className="nav-collapse">
                <ul>
                    <li className="menu-item active"><a href="/"><BiHomeAlt/></a></li>
                    <li className="menu-item active"><a href="/cart"><BiCartAlt/></a></li>
                    <li className="menu-item active"><a href="/profile"><BiUser/></a></li>
                    <li className="menu-item active"><a href="/auth"><BiLogInCircle/></a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
