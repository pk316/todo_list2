import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingle, toggleComplete, deleteItem } from '../actions';
import { Link } from 'react-router-dom';

class SingleItem extends Component {
    componentDidMount(){
        this.props.getSingle(this.props.match.params.id);
    }

    toggleComplete(){
        this.props.toggleComplete(this.props.single._id);
    }

    deleteItem(){
        console.log(this.props.single._id)
        this.props.deleteItem(this.props.single._id).then(() =>{
            this.props.history.push('/');
        })
    }

    render(){
        const { single } = this.props;
        console.log("This is the props", this.props);

        
        if(!single){
            return <div>Loading....</div>
        } else {
            const date = new Date(single.created * 1000);
            const hours = date.getHours();
            const minutes = "0" + date.getMinutes();
            const seconds = "0" + date.getSeconds();
            const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

            return (
                <div>
                    <h1 className="center-align">{single.title}</h1>
   
                    <Link className="btn light blue darken-2" to="/">Go Back</Link>
                    <p>Details: {single.details}</p>
                    <p>Created by :{single.userId}</p>
                    <p>Status: {single.complete ? 'Item Complete' : 'Item Incomplete'}</p>
                    <p>Time created: {formattedTime} </p>
                    <div className ="row">
                        <div className="col m3">
                            <button onClick={() => this.toggleComplete()} className={`btn ${single.complete ? 'orange' : 'green'}`}>{single.complete ? 'Restore' : 'Complete'}</button>
                        </div>
                        <div className="col m2">
                            <button onClick={() => this.deleteItem()} className='btn red darken-2'>DELETE</button>
                        </div>
                    </div>
                </div>
            )
        }

        
    }
}
function mapStateToProps(state){
    return {
        single: state.todo.single
    }
}
export default connect(mapStateToProps, { getSingle, toggleComplete, deleteItem })(SingleItem);