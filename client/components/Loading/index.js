import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gridArea: 'main'
    },
    progress: {
        margin: theme.spacing(2),
    },
}));

export default function Loading(){
    const classes = useStyles();
    return (
        <div className={classes.loading}>
            <CircularProgress className={classes.progress} />
            Loading ...
        </div>
    )
};