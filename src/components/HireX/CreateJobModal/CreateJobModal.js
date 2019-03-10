import React, {Component} from 'react';
import Modal from '../../UI/Modal/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from './CreateJobModal.css';
import CheckIcon from '@material-ui/icons/AddCircleOutline';
import ENUMS from '../../../utils/enums';
import SelectFilter from '../../UI/SelectFilter/SelecteFilter';

class CreateJobModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            jobType: '',
            description: '',
            technologies: '',
            deadline: '',
            price: ''
      };
    }
    render() {
        return (
            <Modal show={this.props.show} dismissModal={this.props.dismissModal}>
                <div className={classes.Title}>POST A BID</div>
                <form className={classes.Form}>
                        <TextField
                            required
                            onChange={(e)=>this.setState({title: e.currentTarget.value})}   
                            id="title"
                            label="Title"
                            className={classes.TextField}
                            margin="normal"
                            variant="outlined"
                        />

                        <SelectFilter style={{height: '50px', width: '100%'}} filterLabel={ENUMS[0].filterName} filterItems={ENUMS[0].items}/>

                        <TextField
                            required
                            onChange={(e)=>this.setState({description: e.currentTarget.value})}
                            id="description"
                            label="Description"
                            className={classes.TextField}
                            name="description"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            required
                            onChange={(e)=>this.setState({technologies: e.currentTarget.value})}
                            id="technologies"
                            label="Technologies"
                            className={classes.TextField}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="datetime-local"
                            label="Next appointment"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            onChange={(e)=> this.setState({deadline: e.currentTarget.value})}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <TextField
                            required
                            onChange={(e)=>this.setState({price: e.currentTarget.value})}
                            id="price"
                            label="Price"
                            className={classes.TextField}
                            margin="normal"
                            variant="outlined"
                        />
                        <Button onClick={this.props.createPost.bind(this, this.state)} variant="text" style={{width: '50%',backgroundColor: "#137ded", color: '#fff', fontFamily: 'Raleway', paddingRight: 40, paddingLeft: 40, paddingBottom: 8, paddingTop: 8, marginTop: 15, marginBottom: 5}}>
                            <CheckIcon style={{paddingRight: 5}}/>
                            Create Job 
                        </Button>
                    </form>
            </Modal>
        )
    }
}

export default CreateJobModal;