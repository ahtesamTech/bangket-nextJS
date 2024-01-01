import Link from 'next/link';
import React from 'react';
import ReactStars from 'react-rating-stars-component';

const ProductCard = async ({product}) => {
    console.log(product?.id);

    const {title} = await product;
    console.log(title);

    return (
        <div>
            
<div className="max-w-2xl mx-auto ">


	<div className="bg-white min-w-56 hover:bg-slate-400 shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
		<Link href={`/detail/${product.id}`}>
			<img className="rounded-t-lg max-h-96 min-h-72 p-8 object-cover" src={product?.thumbnail} alt="product image" />
        </Link>
			<div className="px-5 pb-5">
				
					<h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{title}</h3>
				
				<div className="flex items-center mt-2.5 mb-5">
					
                
					<span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Rating: {product.rating}</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
					<Link href="#"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
						to cart</Link>
				</div>
			</div>
	</div>
</div>
        </div>
    );
};

export default ProductCard;