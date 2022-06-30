import '../styles/Header.css'
import {BiHomeAlt, BiCartAlt, BiLogInCircle, BiUser} from 'react-icons/bi'
import {useCookies} from "react-cookie";

const Header = () => {
    const [cookie, setCookie, removeCookie] = useCookies(["user_id"], ["access_token"])
    return (
        <header>
            <nav className="nav-collapse">
                <ul>
                    <li className="menu-item active"><a href="/"><BiHomeAlt/></a></li>
                    <li className="menu-item active"><a href="/cart"><BiCartAlt/></a></li>
                    <li className="menu-item active"><a href="/profile"><BiUser/></a></li>
                    <li className="menu-item active"><a href="/auth" hidden={cookie["user_id"] === null}><BiLogInCircle/></a></li>
                    <li className="menu-item active"><a onClick={
                        removeCookie("user_id", "access_token")
                    } hidden={cookie["user_id"] !== null}><BiLogInCircle/></a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
