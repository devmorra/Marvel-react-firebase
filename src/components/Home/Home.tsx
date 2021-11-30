import React from 'react';
import {makeStyles} from '@mui/styles';
import {Button} from '@mui/material';
import logo from '../../assets/images/The_Marvel_Universe.png';
// import drone_image from '../../assets/images/sample_drone_image.jpg'

interface Props{
    title: string;
}

const useStyles = makeStyles({
    main_text:{
        textAlign: 'center',
        top: '50%',
        left: '50%',
        color: 'white'
    }
})

export const Home = ( props: Props ) => {
    const classes = useStyles();
    return(
            <main>
                <div className={classes.main_text}>
                    <h1>HEROES SITE WOW</h1>
                    <div><img src={logo} alt="" /></div>
                </div>
            </main>
    )
}