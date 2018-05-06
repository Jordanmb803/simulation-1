import React, { Component } from 'react';
import axios from 'axios';

export default class Product extends Component {
    constructor() {
        super()
        this.state = {
            editable: false
        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(product_id) {
        axios.delete(`/api/product/${product_id}`).then(res => {
            this.props.comDidMountFn()
        })
    }


    render() {
        const { name, price, imgurl, product_id, comDidMountFn } = this.props
        return (
            <div className='product'>
                <img className='proImg' src={imgurl} width="100px;" height='100px;' />
                {
                    console.log(imgurl)
                }

                <div className='proInfo'>
                    <div>
                        <p>{name}</p>
                        <p>{price}</p>
                    </div>
                    <div className='buttons'>
                        <button id='greenBs' onClick={() => this.deleteProduct(product_id)}>Delete</button>
                        <button id='greenBs' onClick={() => this.props.editProduct(imgurl, name, price, product_id)}>Edit</button>
                    </div>
                </div>
            </div>

        )
    }
}