import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { Link } from 'react-router-dom';
import { getAll } from '../actions';

class TodoList extends Component {
    componentDidMount(){
        this.props.getAll();
    }

    renderList(){
        return this.props.todos.map((item,index) => {
            return <li className="collection-item" key = {index}>{item.title}</li>;
        })
    }
    
    render(){
        return (   
            <div>
                <h1 className="center-align"> To do list 2.0</h1>
                <Link className = "btn" to ="/add-item">Add Item</Link>
                <ul className="collection">
                    {this.renderList()}
                </ul>
            </div>
         )
    }
}
function mapStateToProps(state){
    return {
        todos: state.todo.all
    }
}

export default connect (mapStateToProps, {getAll})(TodoList);