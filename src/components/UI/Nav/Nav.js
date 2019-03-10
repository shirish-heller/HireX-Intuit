import React from 'react';
import classes from './Nav.css';
import Button from "@material-ui/core/Button";
import HireXLogo from '../../../staticAssets/hirexlogo_white.png';
import AddIcon from '@material-ui/icons/AddCircle';
import Avatar from '@material-ui/core/Avatar';

const Nav = (props)=> {
    return (
        <div className={classes.TopArea}>
        <div className={classes.NavLeft}>
            <div className={classes.Logo}>
                <img src={HireXLogo} alt="LOGO"/>
            </div>

        {/* NavItems */}
            <div className={classes.NavContainer}>
                {
                props.navItems.map(item=> {
                    return <div key={item} className={classes.NavItem}>{item}</div>
                })
                }
            </div>
        </div>

        {/* Profile Area */}
        <div className={classes.ProfileContainer}>
            <Button onClick={props.onPostProject} variant="text" style={{height: '70%', backgroundColor: "#f77d0e", color: '#fff', fontFamily: 'Raleway', paddingRight: 15, paddingLeft: 15, marginRight: 80}}>
                <AddIcon style={{paddingBottm: 1, paddingRight: 5}}/> Post a Project
             </Button>
            <div className={classes.Profile}>
             <Avatar className={classes.Avatar}>S</Avatar> Shivansh Rajolia 
            </div>
        </div>
    </div>
    )
}

export default Nav;