import React, {FC} from 'react';
import {IPproductModels} from "../../models/IPproductModels";
import './prodect.css'

type TypeProps = { item: IPproductModels }

const Product:FC<TypeProps> = ({item}) => {
    return (
        <div className="product">
            <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p>{item.discountPercentage}</p>
            <p>{item.rating}</p>
            <p>{item.stock}</p>
            <p>{item.tags}</p>
            <p>{item.brand}</p>
            <p>{item.sku}</p>
            <p>{item.weight}</p>
            <p>{item.warrantyInformation}</p>
            <p>{item.shippingInformation}</p>
            <p>{item.availabilityStatus}</p>
            <p>{item.returnPolicy}</p>
            <p>{item.minimumOrderQuantity}</p>
            </div>
                <div>
            <img src={item.thumbnail} alt={item.title}/>
            </div>
        </div>
    );
};

export default Product;