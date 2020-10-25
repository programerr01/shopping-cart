import React, { useState}from "react";
import { Toolbar, Typography, Button, IconButton, MenuIcon, AppBar, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100vw",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textShadow:"1px 2px 6px  #fff23240",
        
    },
}));

function Icon(icon) {
    if(icon.icon != undefined){
        return (
            <HomeIcon fontSize="large" />
        )
    }
    else {
        return (
            <ShoppingCartIcon fontSize="large" />
        )
    }
}
function Navbar(icon = null) {
    console.log(icon);
    const [where, whereChange] = useState(false);
    function goTo() {
        whereChange(true);
    }
    const classes = useStyles();
    if(where){
        if(icon.icon != undefined){
            return <Redirect to="/ProductPage" />
        }
        return <Redirect to="/Cart" />
    }
    
    return (
    <div className={ classes.root } >
          
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4" className={classes.title}>
                        CartShop
                </Typography>
                {icon.icon &&<Typography variant="h6" className={classes.title} >
                    Total:{icon.total}
                </Typography>}
                     <IconButton edge="end" onClick={() => {goTo()} } className={classes.menuButton} color="inherit" arial-label="menu">
                         {Icon(icon)}
                </IconButton>
            </Toolbar>
        </AppBar>
            </div >
                
    )
}
export default Navbar;