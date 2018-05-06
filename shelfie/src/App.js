import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state={
      inventoryList: [],
      imgurl: '',
      name: '',
      price: 0,
      product_id: 0,
      addingProduct: true
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.handleUrlInput = this.handleUrlInput.bind(this)
    this.handleNameInput = this.handleNameInput.bind(this)
    this.handlePriceInput = this.handlePriceInput.bind(this)
    this.handleProduct_Id = this.handleProduct_Id.bind(this)
    this.editProduct = this.editProduct.bind(this)
    this.cancelButton = this.cancelButton.bind(this)
    this.handleAddProduct = this.handleAddProduct.bind(this)
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res=>{
      this.setState({inventoryList: res.data})
    })
  }

  handleAddProduct(){
    this.setState({addingProduct: !this.state.addingProduct})
  }

  handleUrlInput(value){
    this.setState({imgurl: value})
  }

  handleNameInput(value){
    this.setState({name: value})
  }

  handlePriceInput(value){
    this.setState({price: Number(value)})
  }

  handleProduct_Id(value){
    this.setState({product_id: value})
  }

  addProduct(){
    const {imgurl, name, price} = this.state
    axios.post('/api/product', {imgurl, name, price}).then(res => {
      this.componentDidMount() 
      this.setState({imgurl: '', name: '', price: 0})
    })
}

cancelButton(){
  this.setState({imgurl: '', name: '', price: 0})
}

editProduct(param1, param2, param3, param4){
    this.setState({
      imgurl: param1,
      name: param2,
      price: param3,
      product_id: param4,
      addingProduct: false
    })
}

  render() {
    return (
      <div className="App">
      <Header />
      <div className='dashFormBox'>
        <Dashboard inventoryList={this.state.inventoryList}
                    comDidMountFn={this.componentDidMount}
                    editProduct={this.editProduct}
                    handleProduct_Id={this.handleProduct_Id}
        />
        <Form comDidMountFn={this.componentDidMount}
              addProductFn={this.addProduct}
              handleNameInput={this.handleNameInput}
              handlePriceInput={this.handlePriceInput}
              handleUrlInput={this.handleUrlInput}
              imgurl={this.state.imgurl}
              name={this.state.name}
              price={this.state.price}
              addingProduct={this.state.addingProduct}
              cancelButton={this.cancelButton}
              product_id={this.state.product_id}
              handleAddProduct={this.handleAddProduct}
        />
        </div>
        </div>
      );
      
  }
}

export default App;
