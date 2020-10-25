import React from "react";
import product_data from "../Data/products_data";
import { Product } from "./Product";
import Navbar from "./Navbar";

function ProductPage() {
    return (
        <div className="product-page">          
            <Navbar />
            <div className="container d-flex flex-row flex-wrap">
                {product_data.map((data) => (
                    <Product data={data} home="true" key={data.image} />
                ))}
            </div>
        </div>
    )
    
}
export default ProductPage;