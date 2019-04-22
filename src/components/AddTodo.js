import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        todo: ""
    }

    handleTextInput = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            todo: ""
        })
    }

    render() {
        return (
            <form className="col s12" onSubmit={this.handleSubmit}>
                <section className="input-field">
                    <input 
                    className="white" 
                    placeholder="  ...what do you want to do?" 
                    id="new-todo" 
                    type="text"
                    value={ this.state.todo }
                    onChange={this.handleTextInput} />
                </section>
                <button className="right waves-effect waves-light btn">Submit</button>
            </form>
        )
    }
}

export default AddTodo