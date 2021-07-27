import './App.css'
import Navbar from './components/Navbar';
import ProductsContextProvider from './Global/ProductCotext';
import Products from './components/Products';
import Cart from './components/Cart';
import CartContextProvider from "./Global/CartContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Products} />
            <Route path='/cart' exact component={Cart} />
            <Route component={NotFound}/>
          </Switch>
        </Router>
        </CartContextProvider>
      </ProductsContextProvider>

    </div>
  );
}

export default App;
