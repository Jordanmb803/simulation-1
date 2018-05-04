import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios';

import {HashRouter, Route, Switch} from 'react-router-dom';
import About from './About';
import {Link} from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state={
      inventoryList: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res=>{
      this.setState({inventoryList: res.data})
    })
  }


  render() {
    console.log(this.state.inventoryList)
    return (
      <div className="App">
      <Header />
        <Dashboard inventoryList={this.state.inventoryList}
                    comDidMountFn={this.componentDidMount}
        />
        <Form comDidMountFn={this.componentDidMount}/>
      </div>
      );
      <HashRouter>
        <div>
          <Switch>
            <Route path='/' component={App} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </HashRouter>
  }
}

export default App;
