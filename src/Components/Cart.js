import React, {useState} from "react";
import Navbar from "./Navbar";
import store from "../store/index";
import { Button } from "@material-ui/core"
import Data from "../Data/products_data";
import { Product } from "./Product";
import { Redirect } from "react-router-dom";
function Cart() {
    let total = 0;
    const [check, onCheck] = useState();
    const values = [2999,6199,4234,6999,7399,2499,2600,4300]
    const onCart = store.getState().addCart.onCart;
    console.log(onCart);
    let total_items = 0;
    onCart.map((val,index) => {
        if (val) {
            console.log(values[index-1]);
            total += values[index-1];
            total_items++;
        }
    })
    function onCheckout(total_items, total) {
        console.log("Redirec");
        onCheck(true);
    }

    function ProductsOnCart() {
        return (
            Data.map((val) => {
                if (onCart[val.id]) {
                    // console.log("S");
                    return <Product data={val} home={false} pm={true} key={val.id} />
            }
            })
        )
    }
    if (check) {
        return <Redirect to={{ pathname:"/Checkout", state:{total, total_items}}} />
    }

    return (
        <div className="cart">
            <Navbar icon="home" total={total}/>
            <div className="w-100 mt-2 row align-items-center">
                <Button size="large"onClick={() => onCheckout(total_items, total) } variant="contained" color="secondary" className="m-auto "
             >CheckOut</Button>
            </div>
            {ProductsOnCart()}
        </div>
    )
}

export default Cart;