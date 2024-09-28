import React from "react";
import { PRODUCTS } from "../../data/productsList";
import ProductCard from "./ProductCard/ProductCard";
import classes from './ProductList.module.css';

const ProductList = () => {

    //rendering the nav list
    const PRODUCTS_LIST = PRODUCTS.map((product, index) => (
        <ProductCard key={product.id} data={product} />
    ));

    return (
        <div className={classes.list}>
            <ul>{PRODUCTS_LIST}</ul>
        </div>
    );
}

export default ProductList;