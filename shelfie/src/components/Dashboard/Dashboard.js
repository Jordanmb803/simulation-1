import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component{
    render(){
          const { inventoryList, comDidMountFn } = this.props
           
          
          return (
            <div>
            <div>DashBoard</div>

                {
                  inventoryList.map( (i, index)=>{
                     return (<Product key={i.name + index}
                                    name={i.name}
                                    imgurl={i.imgurl}
                                    price={i.price}
                                    product_id={i.product_id}
                                    comDidMountFn={comDidMountFn}
                           />
                        )
                       })
                    }  
            
               
           
            </div>
        )
    }
}