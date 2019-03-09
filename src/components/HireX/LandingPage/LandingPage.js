import React from 'react';
import classes from './LandingPage.css';
import LandingPageBG from './landingBackground.png';
import HireXLogo from '../../../staticAssets/hirexlogo_white.png';
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import NavigationIcon from '@material-ui/icons/Navigation';
import Risk from './risk.png';
import FistBump from './fistbump.png';
import Time from './time.png';

const LandingPage = ()=> {
    return (
        <div className={classes.Container}>
            {/* Nav Area */}
            <div className={classes.TopArea}>
                <div>
                    <img src={HireXLogo} alt="LOGO"/>
                </div>
            </div>

            {/* Banner */}
            <div className={classes.BannerTitle}>
            Hire World-class Freelance<br/>
            Developers for Your Team
            </div>

            {/* Get Started */}
            <div className={classes.GetStarted}>
                <a style={{textDecoration: 'none'}} href="#action">
                    <Fab variant="extended" style={{backgroundColor: "#137ded", color: '#fff', fontFamily: 'Raleway', paddingRight: 20}}>
                        <NavigationIcon className={classes.extendedIcon} />
                        Get started
                    </Fab>
                </a>
            </div>
            {/* Background Image */}
            <div className={classes.ImgContainer}>
                <img className={classes.BgImage} src={LandingPageBG} 
                alt="Sorry! cannot download resources over slow internet."/>
            </div>
            <div className={classes.ImageBottom}>
                <div className={classes.BottomHeadingStyle}>HireX: A Thriving Developer Community</div>
                <div className={classes.BottomTextStyle}>Our developers are peer-approved mentors, thought leaders, and influencers. They’re handpicked from the world’s largest community for mentorship, Codementor, with 400,000+ developers and 12,000+ vetted experts.</div>
            </div>

            {/* I want work / I want to hire */}
            <div id="action" className={classes.ButtonContainerTop}>
                <div className={classes.ButtonContainer}>
                    <div>
                    <a style={{textDecoration: 'none'}} href="/auth">
                        <Button variant="text" style={{backgroundColor: "#f77d0e", color: '#fff', fontFamily: 'Raleway', paddingRight: 30, paddingLeft: 30, paddingBottom: 13, paddingTop: 13}}> I want To Hire</Button>
                    </a>
                    </div>
                    <div>
                        <Button variant="text" style={{backgroundColor: "#fff", border: '3px solid #f77d0e', color: '#f77d0e', fontFamily: 'Raleway', paddingRight: 22, paddingLeft: 22, paddingBottom: 10, paddingTop: 10}}>I want to Work</Button>
                    </div>
                </div>
            </div>

            {/* Assurances  */}
            <div className={classes.AssuranceContainer}>
                <div className={classes.AssuranceCards}>
                    <img className={classes.AssuranceImg} src={Time} alt="TIME"/>
                    <div className={classes.AssuranceTxt}>Our hiring consultants will help you find the developer you need within 72 hrs</div>
                </div>
                <div className={classes.AssuranceCards}>
                    <img className={classes.AssuranceImg} src={FistBump} alt="100% FIT"/>
                    <div className={classes.AssuranceTxt}>
                        Our AI-powered vetting and matching process ensures he/she is a perfect fit.</div>
                    </div>
                <div className={classes.AssuranceCards}>
                    <img className={classes.AssuranceImg} src={Risk} alt="No RISK"/>
                    <div className={classes.AssuranceTxt}>
                    Start your engagement with a risk-free trial for any top developer hired.
                    </div>
                </div>
            </div>
            <div className={classes.TopArea}>
            </div>
        </div>
    );
}

export default LandingPage;