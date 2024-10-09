import React, {FC} from 'react';
import {apiProductsObject} from "../../data";
import {IPproductModels} from "../../models/IPproductModels";
import Product from "../product/product";
import product from "../product/product";

const Products: FC = () => {
    const products: IPproductModels[] = apiProductsObject.products
    return (
        <div>
            {
                products.map((product: IPproductModels) => (<Product item={product}/>))
            }
        </div>
    );
};

export default Products;