import React from "react";
import { TextField,makeStyles, Card ,CardContent, CardActionArea, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth:300,
        maxWidth: 355,
        padding: "10px",
        margin: "20px  auto auto 20px",
        textAlign:"left",
      },
});
  

function CheckoutForm({props}) {
    const classes = useStyles();
    console.log(props)
    return (
           
        <Card className={classes.root}>
            <CardContent>
            <TextField
				fullWidth
				type="text"
                label="name"
                className="m-2"
                id="name"
                
                size="small"
                defaultValue={props.Name}
                variant="outlined"
                InputProps={{
                    readOnly:true,
                }}
				name="name" />
			<br />
            <TextField
                fullWidth
                className="m-2"
				type="email"
				label="email"
                id="email"
                size="small"
                defaultValue={props.Email}
                variant="outlined"
                InputProps={{
                    readOnly:true,
                }}
				name="email" />
            <br />
            <TextField
                fullWidth
                className="m-2"
				type="number"
				label="Mobile No"
                id="mob-no"
                size="small"
                defaultValue={props.PhoneNo}
                variant="outlined"
                InputProps={{
                    readOnly:true,
                }}
				name="mobile-no" />
                <br />
            <TextField
                fullWidth
                className="m-2"
				type="text"
                label="Addresss"
                multiline
                id="address"
                required
                size="small"
               
				name="Address" />
			<br />
            </CardContent>
        
  </Card>

    )


}

export default CheckoutForm;