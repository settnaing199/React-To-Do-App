import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
    state = {
        title: ''
    }
    onSubmit = (e) =>{
        e.preventDefault();
        //pass the title state back up to Appjs
        this.props.addTodo(this.state.title);
        //clear the field
        this.setState({ title: ''});
    }

    onChange = (e) =>{
        this.setState({
            //match the "name" in the inputbox with state.title
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            <input 
                type="text" 
                name="title" 
                placeholder="Add Todo ..."
                value = {this.state.title}
                onChange= {this.onChange}
                style={{flex: '10'}} 
            />
            <input 
                type="submit" 
                value="Submit" 
                className="btn" 
                style={{flex: '1'}}
            />
            </form>
        )
    }
   
}
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired

}

