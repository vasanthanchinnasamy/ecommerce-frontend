import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import { blue, common } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { CardHeader } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

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
    // marginInline: "16px",
  },
}));

export const EcommerceGrid = ({ products }) => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={4} alignItems="center">
            <Card key={product.productId} product={product}>
              <CardActionArea>
                <CardContent align="center">
                  <Avatar
                    className={classes.blue}
                    variant="square"
                    style={{ height: "104px", width: "167px" }}
                  >
                    {product.productName.charAt(0)}
                  </Avatar>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.productName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {product.productName}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
