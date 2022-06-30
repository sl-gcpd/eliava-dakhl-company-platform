import { BiCartAlt } from "react-icons/bi";
import CartItem from "../components/CartItem";

const CartPage = ({id}) => {
    return(
        <div>
            <h1 className="page-icon"><BiCartAlt /></h1>
            <CartItem />
        </div>
    );
}

export default CartPage;