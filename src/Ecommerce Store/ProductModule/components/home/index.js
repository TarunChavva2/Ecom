import Header from '../header';
import ProductCard from '../products/productCard';
import Grid from '@material-ui/core/Grid';
import useStyles from './homeStyles';
import productData from '../../fixtures/productData.json';

export default function HomePage() {
    const classes = useStyles();

    return (
        <>
            <Header />
            <Grid container className={classes.root}>
                <Grid item lg={12} >
                    <Grid container justify='center'>
                        {productData.map((eachProduct) =>
                            <Grid item>
                                <ProductCard eachProduct={eachProduct} key={eachProduct.productId} />
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

