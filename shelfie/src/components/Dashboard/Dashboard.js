import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
    render() {
        const { inventoryList, comDidMountFn } = this.props
        
        return (
            <div className='DashBoard'>

                {
                    inventoryList.map((i, index) => {
                        return (
                            <Product key={i.name + index}
                                name={i.name}
                                imgurl={i.imgurl}
                                price={i.price}
                                product_id={i.product_id}
                                comDidMountFn={comDidMountFn}
                                editProduct={this.props.editProduct}
                                handleProduct_Id={this.props.handleProduct_Id}
                            />
                        )
                    })
                }



            </div>
        )
    }
}