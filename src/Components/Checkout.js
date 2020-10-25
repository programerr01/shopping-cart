import React, { useEffect}from "react";
import store from "../store/index";
import { AppBar, makeStyles,Typography, Toolbar } from "@material-ui/core";
import CheckoutForm from "./CheckoutForm";
import OrderSum from "./OrderSum";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign:"center",
        width: "100vw",
    },
}));
function Checkout(pro) {
    let items = {}
    let comp = false;
    useEffect(() => {
        console.log(pro)
        items =[pro.location.state.total, pro.location.state.total_items]
        console.log(items);
        comp = true;
   })
    const classes = useStyles();
    const user = store.getState().addUser.users[0];
    return (
        <div className="checkout ">
            <div className="nav">
             <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" className={classes.root} >
                                Checkout Page
                    </Typography>
                </Toolbar >
                </AppBar>
            </div>
            
            <div className="container d-flex flex-row flex-wrap">
                <CheckoutForm props={user} />
                {<OrderSum props={items} />}
                

            </div>

            

          </div>
        


    )

}

export default Checkout;