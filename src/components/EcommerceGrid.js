import { React } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import { blue, common } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";

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
          <Grid item xs={12} alignItems="center">
            <Card key={product.productId} product={product}>
              <CardActionArea>
                <CardContent align="left">
                  <Grid container spacing={2} wrap="nowrap">
                    <Grid item>
                      <Avatar
                        className={classes.blue}
                        variant="square"
                        style={{ height: "104px", width: "167px" }}
                      >
                        {product.productName.charAt(0)}
                      </Avatar>
                    </Grid>
                    <Grid item>
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
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
