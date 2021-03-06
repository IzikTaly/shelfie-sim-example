import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

//Components
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Header from './component/header/Header';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventoryList: []
    }
  };

  //Component Lifecycle Methods
  componentDidMount(){
    this.getProducts();
  };

  //Methods
  getProducts = () => {
    axios.get('/api/inventory').then(response => {
      this.setState({
        inventoryList: response.data
      })
    })
  };

  render() {
    return (
      <div className="App">
        <Dashboard inventoryList={this.state.inventoryList}/>
        <Form getProducts={this.getProducts}/>
        <Header />
      </div>
    );
  }
}

export default App;