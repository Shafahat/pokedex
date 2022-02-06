import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react';
import { Link } from 'react-router-dom';
import Pokedox from '../Containers/Pokedox';

const useStyles = makeStyles({
    appBar: {
        backgroundColor: 'black !important',
    },
    link: {
        textDecoration: 'none',
    },
    title: {
        cursor: 'pointer',
        color: 'white'
    }
});

const AppNavigator = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position='fixed' variant='h6'>
            <Toolbar>
                <Link to="/" className={classes.link}>
                    <Typography className={classes.title}><Pokedox /></Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
};

export default AppNavigator;
