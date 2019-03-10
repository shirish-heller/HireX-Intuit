import React from 'react';
import classes from './Post.css';
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import CheckIcon from '@material-ui/icons/Check';
import Gavel from '@material-ui/icons/Gavel';
import Dollar from '@material-ui/icons/AttachMoney';

const Post = (props)=> {
    const _getJobType = (props)=> (props.data.tags && props.data.tags.length) ? props.data.tags.join(", ") : "";
    const _getTechnologies = (props)=> (props.data.technologies && props.data.technologies.length) ? props.data.technologies.join(", ") : "";

    const _getFormattedDeadline = (props)=> (props.data.deadline) ? (new Date(props.data.deadline)).toDateString() : "";
    return (
        <div className={classes.Card}>
            <div className={classes.CardTop}>
                <div className={classes.JobId}><span className={classes.JobIdLabel}>{"Job Id :"}</span> {props.data._id}</div>
                <div className={classes.JobStatus}>
                    {
                        props.data.status==="Active"? 
                        <Fab variant="extended" size="small" style={{backgroundColor: "#4caf50", color: '#fff', fontSize: 12, fontFamily: 'Raleway', paddingLeft: 8, paddingRight: 9}}>
                            {props.data.status}

                        </Fab>
                        : 
                        <Fab variant="extended" size="small" style={{backgroundColor: "rgb(225, 0, 80)", color: '#fff', fontSize: 12, fontFamily: 'Raleway', paddingLeft: 8, paddingRight: 9}}>
                            {props.data.status}
                            <CheckIcon style={{paddingBottom: 3}}/>
                        </Fab>

                    }
   
                </div>
            </div>
            <div className={classes.CardContent}>
                <div><span className={classes.Label}>Title: </span> <span className={classes.Data} style={{fontWeight: 450}}>{props.data.title}</span></div>
                <div><span className={classes.Label}>Job Types: </span> <span className={classes.Data}>{_getJobType(props)}</span></div>
                <div><span className={classes.Label}>Description: </span> <span className={classes.Data}>{props.data.description}</span></div>
                <div><span className={classes.Label}>Technologies: </span> <span className={classes.Data}>{_getTechnologies(props)}</span></div>
                <div><span className={classes.Label}>Deadline: </span> <span className={classes.Data}>{_getFormattedDeadline(props)}</span></div>
            </div>
            <div className={classes.CardBottom}>
                <Button variant="text" style={{backgroundColor: "#fff", border: '3px solid #f77d0e', color: '#f77d0e', fontSize: 16, fontFamily: 'Raleway', paddingRight: 14, paddingLeft: 10, paddingBottom: 4, paddingTop: 4}}>
                    <Dollar style={{paddingTop: 1}}/>
                    {props.data.price}
                </Button>
                <Button onClick={props.onBid.bind(this, props.data._id)} variant="text" style={{backgroundColor: "#f77d0e", color: '#fff', fontFamily: 'Raleway', paddingRight: 10, paddingLeft: 10, paddingBottom: 4, paddingTop: 4}}>
                    <Gavel style={{paddingRight: 5}}/>
                    BID
                </Button>
            </div>
        </div>
    )
}

export default Post