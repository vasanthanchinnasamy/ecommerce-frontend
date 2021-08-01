import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '200px',
    minWidth : '200px',
    minHeight : '240px',
    maxHeight : '240px',
    margin : "8px 8px 8px 8px"
  },
  media: {
    height: 140,
  },


});

export default function ShopCard(props) {
  const classes = useStyles();

  return (
    <Card id={props.id} onClick = {props.clickEvent} className={classes.root}>
      <CardActionArea key={props.id}>
        <CardMedia id={props.id}
          className={classes.media}
          image={props.imageUrl}
          title={props.title}
        />
        <CardContent id={props.id}>
          <Typography id={props.id} gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography id={props.id}  variant="body2" color="textSecondary" component="p">
          {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
