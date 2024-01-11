import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreListPage } from "./pages/StoreListPage";
import { ProductListPage } from "./pages/ProductListPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { HomePage } from "./pages/HomePage";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/stores">
            <StoreListPage />
          </Route>
          <Route path="/:storeId/products">
            <ProductListPage />
          </Route>
          <Route path="/product/:productId">
            <ProductDetailPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
