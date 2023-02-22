
import './App.css';
import Navbar from "./compoents/Navbar";
import Home from "./screens/Home";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login"
import OrderScreen from "./screens/OrderScreen"
import AdminScreen from "./screens/AdminScreen";

import { BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar  />
           <BrowserRouter>
             <Route path="/"  exact component={Home} />
             <Route path="/admin"   component={AdminScreen} />
             <Route path="/cart"  exact component={CartScreen} />
             <Route path="/register"  exact component={Register} />
             <Route path="/login"  exact component={Login} />
             <Route path="/order"  exact component={OrderScreen} />
         
           </BrowserRouter>
      
    </div>
  );
}

export default App;
