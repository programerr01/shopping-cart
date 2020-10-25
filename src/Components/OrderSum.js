import React from "react";
import { TextField,makeStyles, Card ,CardContent, CardActionArea, CardActions, Typography} from "@material-ui/core";
import { Button } from "@material-ui/core";
const useStyles = makeStyles({
    root: {
        minWidth:280,
        maxWidth: 455,
        padding: "10px",
        margin: "20px  auto auto 20px",
        textAlign:"left",
      },
});

function OrderSum(props) {
    console.log(props);
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                    Summary
            </Typography>
            <Typography  variant="h6" component="p">
                    Total Items:{props[0]}
            </Typography>
            <Typography  variant="h6" component="p">
                    Total Price: &#x20B9; {props[1]} 
            </Typography>
            </CardContent>
            <CardActionArea>
                <CardActions>
                    <Button color="secondary" fullWidth >Buy</Button>
                </CardActions>
                </CardActionArea>
          
          
        
  </Card>

    )

}
export default OrderSum;