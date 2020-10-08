import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Home from './Pages/Home';
import Products from './Pages/Products'
import Header from './Header';
import './index.css';
import Product from './Pages/Product'



function App() {
    return(
      <BrowserRouter>
      <div className="App">
        <Header/>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/stuff">
            <Products/>
          </Route>
          <Route exact path="/product/:name">
            <Product/>
          </Route>
      </div>
      </BrowserRouter>
    )
    
  }
  
  export default App;
  