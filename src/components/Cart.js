import React, { useContext } from 'react';
import { CartContext } from '../Global/CartContext';
// import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
    // const data = useContext(CartContext);
    // console.log(data);
    const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
    return (
        <div>
            <div className="cart_container">
                <div className="cart_details" style={{ marginTop: '100px' }}>
                    {
                        shoppingCart.length > 0 ?
                            shoppingCart.map(cart => (
                                <div className="cart" key={cart.id}>
                                    <span className="cart_image"><img src={cart.img} alt="error" /></span>
                                    <span className="cart_product_name">{cart.name}</span>
                                    <span className="cart_product_price">$ {cart.price}</span>
                                    <span className="inc" onClick={() => dispatch({ type: 'INC', id: cart.id, cart})}><i className="fas fa-plus"></i></span>
                                    <span className="product_quantity">{cart.qty}</span>
                                    <span className="dec" onClick={() => dispatch({ type: 'DEC', id: cart.id, cart })}><i className="fas fa-minus"></i></span>
                                    <span className="product_total_price">$ {cart.price * cart.qty}</span>
                                    <span className="delete_product" onClick={() => dispatch({ type: 'DELETE', id: cart.id, cart })}><i className="fas fa-trash-alt"></i></span>
                                </div>
                            )) : 'sorry no products in cart'}
                </div>
                {shoppingCart.length > 0 ?
                    <div className="cart_summary">
                        <div className="summary">
                            <h3>cart summary</h3>
                            <div className="total_items">
                                <div className="items">Total Items</div>
                                <div className="items_count">{qty}</div>
                            </div>
                            <div className="total_price_section">
                                <div className="just_title">Total Price</div>
                                <div className="items_price">$ {totalPrice} </div>
                            </div>
                        </div>
                    </div> : ''}
            </div>
        </div>
    );
};

export default Cart;