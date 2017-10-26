import React from 'react';

export default class AddTodo extends React.Component {
    state = { formInput: '' };
    
    inputChange = (e) => {
        this.setState({ formInput: e.target.value });
    }
    
    addTodo = (e) => {
        e.preventDefault();
        const newTodoName = this.state.formInput;

        if(newTodoName) {
            this.props.onNewTodo({ name: newTodoName });
            this.setState({ formInput: '' });
        }
    }

    render() {
        return (
            <div className="add-todo">
                <input type="text" onChange={this.inputChange} />
                <button onClick={this.addTodo}>
                    Add Todo
                </button>
            </div>
        );
    }
}