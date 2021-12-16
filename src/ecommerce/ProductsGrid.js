import React, { useState , useEffect } from 'react'
import ProductsGridItem from './ProductsGridItem';

const ProductsGrid = ( { category } ) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async() => {
        const url = 'https://fakestoreapi.com/products';
        const resp = await fetch( url );
        const data = await resp.json();
        const _products = data.map( entity => {
            return {
                id: entity.id,
                category: entity.category,
                description: entity.description,
                image: entity.image,
                price: entity.price,
                title: entity.title
            }
        })
        setProducts(_products);
    }

    return (
        <>
            <h3> { category } </h3>
            <div className='row'>
                {
                    products.map( product => (
                        <div className='col-md-3'>
                            <ProductsGridItem
                                key={product.id}
                                product={ product }
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ProductsGrid
