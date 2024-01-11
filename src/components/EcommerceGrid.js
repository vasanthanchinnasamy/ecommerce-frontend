import { React } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import { blue, common } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import _ from "lodash";
import { useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  searchInput: {
    backgroundColor: common.white,
    border: "1px solid #CAC2C8",
    borderRadius: "24px",
    height: "48px",
  },
  countInput: {
    width: "80px",
  },
}));

export const EcommerceGrid = ({ products1 }) => {
  const products = useSelector((state) => state.productsReducer);
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  console.log("productsReducer");
  console.log(products);
  const classes = useStyles();
  const history = useHistory();

  const handleGridClick = (event,product) => {
    // Navigate to the desired URL when the grid is clicked
    history.push("/product/"+product.product.productId);
  };

  const handleAdd = (event, product) => {
    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.push({ ...product, count: 1 });

      //remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);

      // save to local storage

      localStorage.setItem("cart", JSON.stringify(unique));

      dispatch(addToCart(unique));
      event.stopPropagation();
    }
  };

  const handleCountChange = (event, product) => {
    console.log(event.target.value);
    const value = event.target.value;

    if (value > 0) {
      const updatedData = cart.map((currentProduct) =>
        currentProduct.product.productId === product.product.productId
          ? { ...currentProduct, count: value }
          : currentProduct
      );

      localStorage.setItem("cart", JSON.stringify(updatedData));

      dispatch(addToCart(updatedData));
    } else {
      const updatedData = cart.filter(
        (currentProduct) => currentProduct.product.productId !== product.product.productId
      );

      localStorage.setItem("cart", JSON.stringify(updatedData));

      dispatch(addToCart(updatedData));
    }
    event.stopPropagation();
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} key={product.product.productId}>
            <Card product={product}>
              <CardActionArea onClick={(event) =>handleGridClick(event,product)}>
              {/* <div onClick={handleGridClick}> */}
              <CardContent align="left" >
                <Grid container spacing={2} wrap="nowrap">
                  <Grid item>
                    <Avatar
                      className={classes.blue}
                      variant="square"
                      style={{ height: "200px", width: "200px" }}
                    >
                      {product.product.productName.charAt(0)}
                    </Avatar>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.product.productName}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {product.product.productName}
                    </Typography>
                  </Grid>
                  <Grid container direction="column" alignItems="flex-end">
                    <Grid item xs={6}>
                      <Typography gutterBottom variant="h5" component="h2">
                      {product.numberOfSkus>1?'starts from':''} ₹{product.minPrice}
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      direction="column"
                      alignItems="flex-end"
                      justifyContent="flex-end"
                      xs={6}
                    >
                      <Grid>
                        {!cart.some(
                          (cartProduct) =>
                            cartProduct.product.productId === product.product.productId
                        ) && (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={(event) => handleAdd(event, product)}
                            onMouseDown={(event) => { event.stopPropagation() }}
                          >
                            Add
                          </Button>
                        )}
                      </Grid>
                      <Grid>
                        {/* <Button href="#text-buttons" color="primary">
                            -
                          </Button>
                          <Button href="#text-buttons" color="primary">
                            +
                          </Button> */}

                        {cart.some(
                          (cartProduct) =>
                            cartProduct.product.productId === product.product.productId
                        ) && (
                          <TextField
                            id="outlined-number"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            variant="outlined"
                            size="small"
                            className={classes.countInput}
                            InputProps={{ inputProps: { min: 0 } }}
                            onChange={(event) =>
                              handleCountChange(event, product)
                            }
                            onMouseDown={(event) => { event.stopPropagation() }}
                            value={cart
                              .filter(
                                (cartProduct) =>
                                  cartProduct.product.productId === product.product.productId
                              )
                              .map((cartProduct) => cartProduct.count)}
                          />
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              {/* </div> */}
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
