import { Navbar } from "react-bulma-components";
import { MdOutlineShoppingCart } from "react-icons/md";

function CartWidget(){
    return (
        <div>
            <Navbar.Item href="#"><MdOutlineShoppingCart /> 1 Item</Navbar.Item>
        </div>
    )
}

export default CartWidget;