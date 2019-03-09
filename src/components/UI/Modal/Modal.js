import React, { Component } from 'react';
import classes from './Modal.css';
import AuxComp from '../../hoc/AuxComp';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //    return this.props.show!==nextProps.show;
    // }
    _computeStyle() {
            let transform = "";
            let opacity = 0;
            if (this.props.show) {
                transform = "translateY(0)";
                opacity = 1
            } else {
                transform = "translateY(-100vh)";
                opacity = 0;
            }
            let style = {
                transform: transform,
                opacity: opacity
            }
            
        return style;        
    }
render() {
    return (
        <AuxComp>
            <Backdrop show={this.props.show} clicked={this.props.dismissModal} />
            <div className={classes.Modal} style={this._computeStyle()}>
                {this.props.children}
            </div>
        </AuxComp>
    );
}
}

export default Modal;