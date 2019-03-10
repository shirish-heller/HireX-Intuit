import React, { Component } from 'react';
import NavBar from '../../components/UI/Nav/Nav';
import FilterBar from '../../components/UI/Filter/Filter';
import classes from './Dashboard.css';
import PostsContainer from '../../components/HireX/PostsContainer/PostsContainer';
import CreateJobModal from '../../components/HireX/CreateJobModal/CreateJobModal';
import Pagination from "material-ui-flat-pagination";
import PostBidModal from '../../components/HireX/PosBidModal/PostBidModal';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            showCreateJobModal: false,
            showPostBidModal: false,
            numberOfPages: 0,
            offset: 0,
            currentPostId: null      
        }
    }
    componentDidMount() {
        console.log('Component Did Mount');
        this._getAllJobs();
    }

    handleClick(offset) {
        this.setState({ offset }, ()=> this._getAllJobs());
    }

    _getAllJobs = ()=> {
        let getAllJobsURL = new URL('http://localhost:5000/job/getAllJobs'),
                            params= {index: this.state.offset}
        Object.keys(params).forEach(key => getAllJobsURL.searchParams.append(key, params[key]))
        fetch(getAllJobsURL, {
            method: 'get',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(res=> res.json())
        .then(res=> {
            console.log('Get all Jobs Call Success', res);
            if(res.success) {
                this.setState({posts: res.data, numberOfPages: res.numberOfPages})
            }
        })
        .catch(error=> console.log('Call Get All Jobs Failed!!', error))
    }

    openPostProjectForm = ()=> this.setState({showCreateJobModal: true});
    
    openBidModal = (currentPostId)=> {
        this.setState({showPostBidModal: true, currentPostId: currentPostId})
    }
 
    dismissJobModal = ()=> {
        this.setState({showCreateJobModal: !this.state.showCreateJobModal})
    }
    dismissBidModal = ()=> {
        this.setState({showPostBidModal: !this.state.showPostBidModal})
    }

    postBid = (data)=> {
        const {bid} = data;
        const authData = JSON.parse(localStorage.getItem('userData'));
        let userId;
        if(authData && authData.userData && authData.userData.userId) {
            userId = authData.userData.userId;
        }
        const body= {
            postId: this.state.currentPostId,
            amount: bid,
            userId: userId
        }
        console.log('bidData', body);
        const createBidUrl = 'http://localhost:5000/bid/createBid'
        fetch(createBidUrl, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.success) {
                console.log(`Bid on Job Id ${this.currentPostId} succesfull` , data);
            } else {
                console.log(`Bid on Job Id ${this.currentPostId} Failed` , data);
                alert('Job Bid failed. Please try again after some time');
            }
            this.setState({showPostBidModal: false});
        })
        .catch(error=> console.log('Bidding on Job call failed', error));

    }
    createJobPost = (jobData)=> {
        console.log(jobData);
        let data = JSON.parse(localStorage.getItem('userData'));
        let userId;
        if(data && data.userData && data.userData.userId) {
            userId = data.userData.userId;
        }
        console.log('USER ID', userId);
        let body = {
            title: jobData.title,
            details: jobData.description,
            deadline: jobData.deadline,
            technologies: jobData.technologies,
            price: jobData.price,
            tags: '',
            userId: userId
        }
        const createJobUrl = 'http://localhost:5000/job/createJob'
        fetch(createJobUrl, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.success) {
                this._getAllJobs();
            } else {
                alert('Job Post failed. Please try again after some time');
            }
            this.setState({showCreateJobModal: false});
        })
        .catch(error=> console.log('Posting Job call failed', error));
    }

    render() {
        return (
            <div className={classes.Container}>

            {/* NavBar */}
                <NavBar onPostProject={this.openPostProjectForm} navItems={['my posts', 'my bids']}/>
                
            {/* Filter */}
                <FilterBar handleFilterChange={this.handleFilterChange}/>
                <Pagination
                    limit={10}
                    offset={this.state.offset}
                    total={this.state.numberOfPages * 10}
                    onClick={(e, offset) => this.handleClick(offset)}
                />

            {/* Posts Container */}
                {
                    this.state.posts.length>0 ? <PostsContainer onBid={this.openBidModal} posts={this.state.posts}/>: <div className={classes.Loading}>...Loading</div>
                }
            
            {/* Create Job Modal Form */}
                <CreateJobModal createPost={this.createJobPost} show={this.state.showCreateJobModal} dismissModal={this.dismissJobModal}/>
            
            {/* Post Bid Modal */}
                <PostBidModal postBid={this.postBid} show={this.state.showPostBidModal} dismissModal={this.dismissBidModal}/>
            </div>
        )
    }
}

export default Dashboard;