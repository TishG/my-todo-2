import React, { Component } from 'react';

class TodoList extends Component {

    render() {
        const { todoList } = this.props;
        const todos = todoList.length ? 
        todoList.map(todo => {
        return <li className="collection-item" key={todo.id}>       
                <span onClick={() => this.props.toggleComplete(todo.id)} className={todo.completed ? "completed-todo grey-text text-lighten-1" : "black-text"}>{todo.todo}</span>
                <button className="waves-effect waves-light btn-small red right" onClick={() => this.props.deleteTodo(todo.id)}>delete</button>
                </li>
                })
                :
                <h5 className="center">There are no todos</h5>
        return (
            <ul className="collection row">    
                {todos}
            </ul> 
        )
    }
}

export default TodoList;