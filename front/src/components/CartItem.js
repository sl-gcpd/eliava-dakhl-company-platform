import Image from '../img/download.jpeg'
import '../styles/CartItem.css'

const CartItem = ({name, img, price, id}) => {
    return (
        <div className="cart-item">
            <img alt="" src={Image}/>

        </div>
    )
}

export default CartItem