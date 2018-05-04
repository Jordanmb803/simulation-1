import React from 'react';
import axios from 'axios';
import Form from '../Form/Form';

export default function Product(props) {
    const { name, price, imgurl, product_id } = props
    console.log(name, price, imgurl)
    let editable = false;

    let deleteProduct = (product_id) => {
        axios.delete(`/api/product/${product_id}`).then(res => {
            props.comDidMountFn()
        })
    }

    let edit = () => {
       return !editable
    }

    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>{imgurl}</p>
            <p>{product_id}</p>
            <button onClick={() => deleteProduct(product_id)}>Delete</button>
            <button onClick={() => edit()}>Edit</button>
            {(editable === true) ?
                <Form product_id={specproduct_id}
                        price={specprice}
                        imgurl={specimgurl}
                /> : null
            }
        </div>

    )

}