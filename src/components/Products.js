import React, { useContext } from 'react';
import Banner from './Banner';
import { ProductContext } from "../Global/ProductCotext";
import { CartContext } from '../Global/CartContext';

const Products = () => {
    const { products } = useContext(ProductContext);

    const {dispatch} = useContext(CartContext);

    // console.log(products)
    return (
        <div className='container'>
            <Banner />
            <div className="products">
                {
                    products.map((product) => {
                        return (
                            <div className="product" key={product.id}>
                                <div className="product_img">
                                    <img src={product.img} alt="not found" />
                                </div>
                                <div className="product_details">
                                    <div className="product_name">
                                        {product.name}
                                    </div>
                                    <div className="product_price">
                                        $ {product.price}
                                    </div>

                                </div>
                                <div className="add_cart" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, product})}>add to cart</div>
                                {product.status === 'hot' ? <div className="hot">Hot</div> : ''}
                                {product.status === 'new' ? <div className="new">New</div> : ''}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Products;