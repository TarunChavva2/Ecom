import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    model: {
        color: 'gray',
        padding: 5,
        fontWeight: 600,
        fontSize: 13
    },
    root: {
        margin: 15,
        width: 250,
    },
    title: {
        fontStyle: 'italic',
        color: 'black',
        padding: 1,
        fontSize: 12,
    },
    pos: {
        marginBottom: 12,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    media: {
        height: 150,
        width: 100,
    },
    btnstyles1: {
        width: 100,
        fontSize: 10,
        fontWeight: 500
    },
    btnstyles2: {
        width: 100,
        fontSize: 10,
        fontWeight: 700,
    },
    price: {
        color: 'gray',
        fontSize: 13
    }
});

export default useStyles;