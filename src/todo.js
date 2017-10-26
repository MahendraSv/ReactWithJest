import React from 'react';

export default class Todo extends React.Component {
    toggleDone = () => {
        this.props.doneChange(this.props.todo.id);
    }

    deleteTodo = (e) => {
        e.preventDefault();
        this.props.deleteTodo(this.props.todo.id);
    }

    render() {
        return (
            <div style={{marginBottom:'5px'}}>
                <input type="checkbox" style={{marginRight:'10px'}} onClick={this.toggleDone} />
                {this.props.todo.name} &nbsp; &nbsp; 
                <span className="glyphicon glyphicon-remove text-danger" onClick={this.deleteTodo}></span>
            </div>
        );
    }
}
