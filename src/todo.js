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
        const className = this.props.todo.done ? 'done-todo' : '';

        return (
            <div className={`todo ${className} todo-${this.props.todo.id}`}>
                <input type="checkbox" style={{marginRight:'10px'}} onChange={this.toggleDone} checked={this.props.todo.done} />
                {this.props.todo.name} &nbsp; &nbsp;
                <span className="glyphicon glyphicon-remove text-danger" onClick={this.deleteTodo}></span>
            </div>
        );
    }
}
