"use client"

import { useRouter } from 'next/navigation'

const Collection = () => {
    const router = useRouter();

    // sample product data
    const products = [
        { id: 1, name: 'Product 1', price: '100', image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: '200', image: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: '300', image: 'product3.jpg' },
        // add more products as needed...
    ];

    return (
        <div className="collection">
            {products.map(product => (
                <div key={product.id} className="product-card" onClick={() => router.push(`/product/${product.id}`)}>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Collection;