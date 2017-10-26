import React from 'react';
import shortid from 'shortid';

import Todo from './todo';
import { addTodo, deleteTodo, toggleDone } from './todo-functions';
import AddTodo from './add-todo';

export default class Todos extends React.Component {
    state = {
        todos: [
            {id: shortid.generate(), name: 'Learning ReactJS', done: true},
            {id: shortid.generate(), name: 'Practicing ReactJS', done: false},
            {id: shortid.generate(), name: 'Working with ReactJS', done: false},
        ]
    };

    toggleDone = (id) => {
        this.setState(toggleDone(this.state, id));
    }

    deleteTodo = (id) => {
        this.setState(deleteTodo(this.state, id));
    }

    addTodo = (todo) => {
        this.setState(addTodo(this.state, todo));
    }

    renderTodos() {
        return this.state.todos.map((todo) => {
            return (
                <li key={todo.id}>
                    <Todo todo={todo} doneChange={this.toggleDone} deleteTodo={this.deleteTodo}/>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderTodos()}
                </ul>
                <AddTodo onNewTodo={this.addTodo}></AddTodo>
            </div>
        );
    }
}
