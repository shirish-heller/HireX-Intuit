import { Router } from '@reach/router';
import React from 'react';
import Dashboard from '../containers/Dashboard/Dashboard';

// Importing Screens for Routes

import Auth from '../components/HireX/Auth/Auth';
import LandingPage from '../components/HireX/LandingPage/LandingPage';


// Setting up Navigator
const BaseNavigation = ()=> {
    return (
        <Router>
            <Auth path='/auth'/>
            <LandingPage path='/'/>
            <Dashboard path='/dashboard'/>
        </Router>
    )
}
export default BaseNavigation;