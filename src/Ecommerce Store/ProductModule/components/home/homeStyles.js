import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        padding: 30,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default useStyles;