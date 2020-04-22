import React from 'react';
import classes from './Layout.module.css'; 
import Toolbar from '../Navigation/NavigationItems/Toolbar/Toolbar';


const layout = (props) => {
    return (
        <>
            <Toolbar />
            <main className={classes.content}>
                {props.children}
            </main>
        </>
    )
};

export default layout; 