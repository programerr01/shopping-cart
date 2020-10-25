import React, {  useState}from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {addToCart} from "../actions/index.js";
import { useDispatch } from "react-redux";
import store from "../store/index";
import { Redirect } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const useStyles = makeStyles({
  root: {
      minWidth:320,
      maxWidth: 455,
      padding: "10px",
      margin: "10px auto",
      textAlign:"center",
    },
});



export const Product = (props) => {


  const [onCart, cartchange] = useState(false);
  let state = store.getState();
  const in_cl = state.addCart.onCart[props.data.id];
  let cl =( in_cl)? "action" : "secondary";
  const [color_val, changeColor] = useState(cl);
  const dispatch = useDispatch();
  const prop = props;
  props = props.data;
  const classes = useStyles();


  function changeButton(id) {
    dispatch(addToCart(id));
    cartchange(true);
    console.log("chenaged");
    const state = store.getState();
    if (state.addCart) {
      const onCart = state.addCart.onCart[props.id]
      let color = (onCart) ? "action" : "secondary";
      changeColor(color)
    } 
  }

  function plusMinus(plsmns,id) {
    if (plsmns) {
      return (
        <CardActions>
          <Button color="primary" fullWidth onClick={() => remove(id)}><RemoveIcon fontSize="large" /></Button>
          </CardActions>
      )
    }
  
    function remove(id) {
      dispatch(addToCart(id));
      
  }
  
  }
  

    return (
       
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
            component="img"
            alt="shoes"
            height="180"
            image={props.image}
            title={props.brand}
        />
        <CardContent>.
          <Typography gutterBottom variant="h5" component="h2">
            {props.brand}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.detail}
          </Typography  >
          <Typography gutterBottom variant="h5">
            &#x20B9;{props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
        {prop.home && <CardActions>
          <Button color="primary" onClick={() => changeButton(props.id)} fullWidth><AddShoppingCartIcon color={color_val}  fontSize="large"/></Button>
        </CardActions>}
        {plusMinus(prop.pm,props.id)}
    </Card>
  );
}
