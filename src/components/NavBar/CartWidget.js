import cart from"../NavBar/cart.png";
import "../NavBar/cart.css";

const CartWidget= () => {
    return(
        <div className="cart">
            <img src={cart} alt="carrito" />           
        </div>
    )
    }
export default CartWidget;

