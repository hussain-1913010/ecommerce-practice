import React, { createContext, useState } from 'react';

import camera from './../assets/camera.webp';
import m31 from './../assets/m31.jpeg';
import s21 from './../assets/s21.webp';
import n20 from './../assets/20ultra.webp';


export const ProductContext = createContext()


const ProductsContextProvider = (props) => {
    const [products] = useState([
        {id: 1, name: 'DSLR', price: 300, img: camera, status: "hot"},
        {id: 2, name: 'GAlaxy m31', price: 3040, img: m31, status: "hot"},
        {id: 3, name: 'Galaxy s21', price: 320, img: s21, status: "new"},
        {id: 4, name: 'Note 20 Ultra', price: 350, img: n20, status: "hot"},
        {id: 5, name: 'GAlaxy m31', price: 3040, img: m31, status: "new"},
        {id: 6, name: 'Galaxy s21', price: 320, img: s21, status: "hot"},
    ])
    return (
        <div>
            <ProductContext.Provider value={{products: [...products]}}>
                {props.children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductsContextProvider;