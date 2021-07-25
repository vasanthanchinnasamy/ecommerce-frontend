import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EcommerceAppBar } from "../components/EcommerceAppBar";
import { EcommerceGrid } from "../components/EcommerceGrid";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../redux/actions";

export const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [shop, setShop] = useState({});
  const { storeId } = useParams();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.productsReducer);

  console.log("productsReducer");
  console.log(counter);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://ecommerce-backend-java.herokuapp.com/product/getByShop/${storeId}`
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
      dispatch(set(data));
    };
    const fetchShop = async () => {
      const response = await fetch(
        `https://ecommerce-backend-java.herokuapp.com/shop/get/${storeId}`
      );
      const data = await response.json();
      console.log(data);
      setShop(data);
    };
    fetchProducts();
    fetchShop();
  }, [storeId, dispatch]);

  return (
    <div>
      <EcommerceAppBar shop={shop} />
      <EcommerceGrid products={products} />
    </div>
  );
};
