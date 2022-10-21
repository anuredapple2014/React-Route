import { Route } from "react-router-dom";
import  {MainHeader}  from "./components/MainHeader";
import ProductDetail from "./Pages/ProductDetail";
import Products from "./Pages/Products";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div>
     <MainHeader/>
      <main>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products"> 
        <Products />
      </Route>
      <Route path="/product-detail/:productId">
        <ProductDetail/>
      </Route>
      </main>
    </div>
  );
}

export default App;

// our-demain.com/welcome => Welcome Component
// our-demain.com/products => Products Component
//our-demain.com/product-detail/<any value>