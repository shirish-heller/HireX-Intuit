import React, {Component} from 'react';
import Modal from '../../UI/Modal/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from './PostJobModal.css';
import NumberFormat from 'react-number-format';
import GavelIcon from '@material-ui/icons/Gavel';

class PostBidModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bid: 100
      };
    }

    NumberFormatCustom = (props)=> {
        const { inputRef, onChange, ...other } = props;
      
        return (
          <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => this.setState({bid: values.value})}
            thousandSeparator
            prefix="$"
          />
        );
      }
      onChangeBid = ()=> {

      }
    //   setState({bid: e.currentTarget.value})
    render() {
        return (
            <Modal show={this.props.show} dismissModal={this.props.dismissModal}>
                <div className={classes.Title}>POST A BID</div>
                <form className={classes.Form}>
                        <TextField
                            required  
                            id="bid"
                            label="Bid Amount"
                            className={classes.TextField}
                            margin="normal"
                            InputProps={{
                                inputComponent: this.NumberFormatCustom,
                            }}
                            variant="outlined"
                        />
                        <Button onClick={this.props.postBid.bind(this, this.state)} variant="text" style={{width: '50%',backgroundColor: "#f77d0e", color: '#fff', fontFamily: 'Raleway', paddingRight: 40, paddingLeft: 40, paddingBottom: 8, paddingTop: 8, marginTop: 15, marginBottom: 5}}>
                            <GavelIcon style={{paddingRight: 5}}/>
                            Post Bid
                        </Button>
                    </form>
            </Modal>
        )
    }
}

export default PostBidModal;