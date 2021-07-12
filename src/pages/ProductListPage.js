import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EcommerceAppBar } from "../components/EcommerceAppBar";
import { EcommerceGrid } from "../components/EcommerceGrid";

export const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [shop, setShop] = useState({});
  const { storeId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://ecommerce-backend-java.herokuapp.com/product/getByShop/${storeId}`
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
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
  }, [storeId]);

  return (
    <div>
      <EcommerceAppBar shop={shop} />
      <EcommerceGrid products={products} />
    </div>
  );
};
