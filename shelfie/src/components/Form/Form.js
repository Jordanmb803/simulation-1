import React, { Component } from 'react';
import axios from 'axios';


export default class Form extends Component{
    constructor(){
        super()
        this.state={
            
        }
        this.saveChanges = this.saveChanges.bind(this)
    }
    
   

    saveChanges(product_id, imgurl, name, price){
        console.log(product_id, imgurl, name, price)
        axios.put(`/api/product/${product_id}`, {imgurl, name, price}).then(res=>{
            this.props.comDidMountFn()
            this.props.cancelButton()
            this.props.handleAddProduct()
        })
    }

    render(){
        
        const {product_id, imgurl, name, price} = this.props
       
        return (
            <div className='Form'>
                <img className='defaultImg' src='http://cs.pes.edu/wp-content/uploads/2016/06/default-2.jpg' alt='default image' width='90%;' height='150px;'/>
                <h3>Image Url:</h3>
                <input value={this.props.imgurl} onChange={(e)=>this.props.handleUrlInput(e.target.value)}/>
                <h3>Product Name: </h3>
                <input value={this.props.name} onChange={(e)=>this.props.handleNameInput(e.target.value)}/>
                <h3>Price: </h3>
                <input value={this.props.price} onChange={(e)=>this.props.handlePriceInput(e.target.value)}/>
                <div className='buttons'>
                <button id='redBs' onClick={()=>this.props.cancelButton()}>Cancel</button>
                { (this.props.addingProduct === true) ?
                <button id='redBs' onClick={()=>this.props.addProductFn()}>Add to Inventory</button>
                : <button onClick={()=>this.saveChanges(product_id, imgurl, name, price)}> Save Changes </button>
                }
                </div>

               
            </div>
        )
    }
}