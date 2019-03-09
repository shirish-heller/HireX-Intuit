import { Router } from '@reach/router';
import React from 'react';

// Importing Screens for Routes

import Auth from '../components/HireX/Auth/Auth';
import LandingPage from '../components/HireX/LandingPage/LandingPage';


// Setting up Navigator

const BaseNavigation = ()=> {
    return (
        <Router>
            <Auth path='/auth'/>
            <LandingPage path="/"/>
        </Router>
    )
}
export default BaseNavigation;