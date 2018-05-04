import React, { Component } from 'react';
import axios from 'axios';


export default class Form extends Component{
    constructor(){
        super()
        this.state={
            imgurl: '',
            name: '',
            price: 0,
            product_id: 0,
            addingProduct: true
        }
        this.addProduct = this.addProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
        this.saveChanges = this.saveChanges.bind(this)
    }
    
    addProduct(){
        const {imgurl, name, price} = this.state
        axios.post('/api/product', {imgurl, name, price}).then(res => {
            this.props.comDidMountFn()
            this.setState({imgurl: '', name: '', price: 0})
        })
    }

    editProduct(imgurl, name, price, product_id ){
        this.setState({
            addingProduct: !this.state.addingProduct,
            imgurl: imgurl,
            name: name,
            price: price, 
            product_id: product_id
        })
    }
    
    saveChanges(product_id, imgurl, name, price){
        axios.put(`/api/product/${product_id}`, {imgurl, name, price}).then(res=>{
            this.props.comDidMountFn()
            this.setState({
                imgurl: '', name: '', price: 0
            })
        })
    }

    render(){
        

        return (
            <div>
                <input value={this.state.imgurl} onChange={(e)=>this.setState({imgurl: e.target.value})}/>
                <input value={this.state.productName} onChange={(e)=>this.setState({name: e.target.value})}/>
                <input value={this.state.price} onChange={(e)=>this.setState({price: Number(e.target.value)})}/>
                <button onClick={()=>this.setState({
                    imgurl: '',
                    name: '',
                    price: 0
                })}>Cancel</button>
                { (this.state.addingProduct === true) ?
                <button onClick={()=>this.addProduct()}>Add to Inventory</button>
                : <button onClick={()=>this.saveChanges(this.state.product_id, this.state.imgurl, this.state.name, this.state.price)}> Save Changes </button>
                }

               
            </div>
        )
    }
}