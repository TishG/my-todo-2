import React, { Component } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
       {id: 1, todo: "Grocery shopping", completed: false},
       {id: 2, todo: "Learn Redux", completed: true},
       {id: 3, todo: "Go see the avengers", completed: false}
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    todo.completed = false;
    let newTodos = [...this.state.todos, todo];
    this.setState({
      todos: newTodos
    })
  }

  toggleComplete = (id) => {
  this.setState({
    todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo
      }
    })
  })
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    })
  }

  render() {
    return (
      <main className="App">
        <Header />
        <section className="todolist-container row container">  
            <section className="col s12 m8 ">

              <TodoList todoList={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo}/>
              <AddTodo addTodo={this.addTodo}/>

          </section>
        </section>  
      </main>
    );
  }
}

export default App;
