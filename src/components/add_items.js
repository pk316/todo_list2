import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addItem } from '../actions';

class AddItem extends Component {

    renderInput({ input, label, type, meta : { touched, error }}){

        return (
            <div>
                <label>{ label }</label>
                <input { ...input } type={ type } />
                <p className>{ touched && error }</p>
            </div>
        )
    }
    submitItem(values){
        console.log('Form values: ', values)
        this.props.addItem(values).then(() => {
            this.props.history.push('/');
        });
    }
    render(){
        const { handleSubmit, reset } = this.props;

        return (
            <div>
                <h1 className = "center-align">Add a new To Do</h1>
                <div className = "right-align">
                    <Link className="btn light blue darken-2" to="/">Go Back</Link>
                </div>
                <form onSubmit = { handleSubmit(() => {
                    this.submitItem(vals)
                })} >
                    <Field name="title" component={this.renderInput} type = "text" label = "Title" />
                    <Field name = "details" component = { this.renderInput } type = "text" label = "Details" />
                    <div className = "row">
                        <div className="col s4 offset-s4 m2 offset-m8">
                            <button className = "btn green darken-2">Add</button>
                        </div>
                        <div className="col s4 m2">
                            <button className = "btn yellow darken-1" onClick = { reset } type = "button">Reset </button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}
function validation(values){
    const error = {};

    if ( !values.titles ){
        error.title = 'Please enter a title';
    }

    if ( !values.details){
        error.details = 'Please enter details';
    }

    return error;
}

AddItem = reduxForm({
    form: 'add-item',
    validate: validation
})(AddItem);

export default connect( null , { addItem })( AddItem );