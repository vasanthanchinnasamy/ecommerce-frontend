import { React, useState, useEffect } from "react";
import ShopAppBar from "../components/ShopAppBar.js";
import ShopCard from "../components/ShopCard.js";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {API_BASE_URL} from '../constants/constants.js'


const useStyles = makeStyles({
  divClass: {
    marginTop: '72px',
  }
});
export const StoreListPage = () => {
  const [data, setData] = useState(null); 
  const classes = useStyles();

  useEffect(()=>{
    fetch(`${API_BASE_URL}/shop/getAll`)
    .then((response) => response.json())
    .then(setData);
  },[]);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  function getUrl(i){
    return "https://source.unsplash.com/random/200x200?sig="+i;
  }

if(!data){
  return <div></div>;
}
  return (
    <div>
      <ShopAppBar title = "ECart"></ShopAppBar>
      <div className = {classes.divClass}>
        <Grid container
  direction="row"
  justifyContent="flex-start"
  alignItems="center">
      {data.map((product,i)=><div 
      onClick={(e)=> {
        openInNewTab("/"+e.target.getAttribute("id")+"/products");
        }} 
        key={product.shopId} ><ShopCard imageUrl={getUrl({i})} title = {product.shopName} id={product.shopId} description = {product.shopDescription}></ShopCard></div>)}
      </Grid>
      </div>
    </div>
  );
};
