import React from 'react'
import classes from './ProductCard.module.css';

const ProductCard = ({ data }) => {

	//name category price 
	return (
		<div className={classes.product}>

			<p className={classes.discount}>{data.discountPercentage}</p>

			<img src={data.thumbnail} alt="product's thumbnail" />

			<p className={classes.name}>{data.name}</p>
			<p className={classes.rating}>{data.rating}</p>
			<div>
				<p className={classes.category}>{data.category}</p>
				<p className={classes.brand}>{data.brand}</p>
			</div>
			<p className={classes.description}>{data.description}</p>

			<div className={classes.bottproductDataom}>
				<p className={classes.price}>${data.price}</p>
				<button>Add to cart</button>
			</div>
		</div>
	);
}

/*
 {
--------"id": 2,
-------	"name": "iPhone X",
--------"description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
---------"price": 899,
--------"discountPercentage": 17.94,
---------"rating": 4.44,
		"stock": 34,
--------"brand": "Apple",
--------"category": "smartphones",
--------"thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
		"images": [
			"https://i.dummyjson.com/data/products/2/1.jpg",
			"https://i.dummyjson.com/data/products/2/2.jpg",
			"https://i.dummyjson.com/data/products/2/3.jpg",
			"https://i.dummyjson.com/data/products/2/thumbnail.jpg"
		]
	},
*/

export default ProductCard;