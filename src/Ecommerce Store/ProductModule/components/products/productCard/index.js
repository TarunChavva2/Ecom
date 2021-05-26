import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './productCardStyles';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from "@material-ui/icons/Share";
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';

export default function ProductCard(props) {
    const classes = useStyles();
    const { availableSizes, currencyFormat, currencyId, description, installments, isFreeShipping, price, sku, style, title, image } = props.eachProduct;
    console.log(image);
    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
            />
            <CardContent className={classes.content}>
                <CardMedia
                    className={classes.media}
                    image={image}
                />
                <Typography>
                    {title}

                </Typography>
                <Typography className={classes.price}>
                    {currencyFormat}{price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.btnstyles1} color='primary' variant='contained' size="small">Buy Now</Button>
                <Button className={classes.btnstyles2} color='primary' size='small'>More Offers</Button>
            </CardActions>
        </Card>
    );
}