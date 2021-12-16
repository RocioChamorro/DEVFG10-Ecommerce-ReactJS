import React, { useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const ProductsGridItem = ( product ) => {
    return (
        <>
            <Card className="shadow small text-center mb-5" style={{ width: '13rem' }}>
                <div className=''>
                    <Card.Img variant="top" src= { product.image } className="p-3" style={{ height: '250px', width: '200px'}}/>
                </div>
                <Card.Body className="pb-0">
                    <Card.Title>s/ { product.price }</Card.Title>
                </Card.Body>
                <Card.Body className="d-flex fa-2x justify-content-between pt-0">
                    <Card.Link href={`/products/${product.id}`}><i className="fas fa-info-circle text-danger"></i></Card.Link>
                    <Card.Link href="#"><i className="fas fa-cart-arrow-down text-danger"></i></Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductsGridItem
