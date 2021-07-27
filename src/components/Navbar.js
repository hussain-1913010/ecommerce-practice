import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../Global/CartContext';

const Navbar = () => {
    const {shoppingCart, qty} = useContext(CartContext);
    console.log(qty);
    return (
        <div>
            <nav>
                <ul className='left'>
                    <li><Link to="/">BD Express</Link></li>
                </ul>
                <ul className="right">
                    <li><Link to="/cart">
                        <span className="shopping_cart">
                            <i className="fas fa-cart-plus"></i>
                            <span className="cart_count">{qty}</span>
                            {/* <span className="cart_count">{shoppingCart.length}</span> */}
                        </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;