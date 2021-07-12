import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import { StoreListPage } from "./pages/StoreListPage";
import { ProductListPage } from "./pages/ProductListPage";
import { HomePage } from "./pages/HomePage";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/stores">
            <StoreListPage />
          </Route>
          <Route path="/products/:storeId">
            <ProductListPage />
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
