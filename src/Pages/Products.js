import React, { useEffect, useState } from 'react';
import '../index.css';
import databaseRef from '../Database/Firebase';
import { Link }from "react-router-dom";



function Products(props){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const prod = databaseRef.child("Products").once('value').then(snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            let key = Object.keys(snapshot.val());        
            let array = [];
             const j = items.map((i, id) => {
             array.push( <div><Product name={key[id]} items={i}/></div>);
            });
            setProducts(array);
        });
        }
    )

    return(
        <div className="grid">
            {products}
        </div>
    )

}

function Product(props){
    return(
        <Link to={`/product/${props.name}`}>
        <div className="grid-item flex-centre"><div className="product-header">{props.name}</div></div>
        </Link>
    )
}

export default Products;