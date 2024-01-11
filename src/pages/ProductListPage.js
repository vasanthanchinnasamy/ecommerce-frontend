import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EcommerceAppBar } from "../components/EcommerceAppBar";
import { EcommerceGrid } from "../components/EcommerceGrid";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../redux/actions";
import { makeStyles } from "@material-ui/core/styles";
import {API_BASE_URL} from '../constants/constants.js'

export const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [store, setStore] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { storeId } = useParams();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.productsReducer);

  console.log("productsReducer");
  console.log(counter);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

      const [productsResponse, shopResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/product/getByShop/${storeId}`).then(response => response.json()),
          fetch(`${API_BASE_URL}/shop/get/${storeId}`).then(response => response.json())
        ]);

        setProducts(productsResponse);
        setStore(shopResponse);
        dispatch(set(productsResponse));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup function (if needed)
    };
  }, [storeId, dispatch]);

  const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
  }));
  const classes = useStyles();

  return (
    <div>
      <EcommerceAppBar shop={store} />
      <div className={classes.appBarSpacer}></div>
{isLoading ? (
        <p>Loading...</p>
      ) : (
      <EcommerceGrid products={products} />
)}
    </div>
  );
};
