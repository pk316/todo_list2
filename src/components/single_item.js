import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingle, toggleComplete } from '../actions';

class SingleItem extends Component {
    componentDidMount(){
        this.props.getSingle(this.props.match.params.id);
    }

    toggleComplete(){
        this.props.toggleComplete(this.props.single._id);
    }

    render(){
        const { single } = this.props;

        if(!single){
            return <div>Loading....</div>
        }

        return(
            <div>
                <h1>{single.title}</h1>
                <p>Details: {single.details}</p>
                <p>Created by :{single.userId}</p>
                <p>Status: {single.complete? 'Item Complete': 'Item Incomplete'}</p>
                <button onClick = { () => this.toggleComplete() } className = {`btn ${single.complete ? red : blue}`}>{single.complete ? 'Restore' : 'Complete'}}</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        single: state.todo.single
    }
}
export default connect(mapStateToProps, { getSingle, toggleComplete })(SingleItem);