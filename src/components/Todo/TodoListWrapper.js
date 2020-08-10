import React, { Component } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import PropTypes from "prop-types";

class TodoListWrapper extends Component {
  state = {
    todos: []
  }
  rxSubs = []

  async componentDidMount() {
    const sub = this.props.db.todos.find()
      .sort('createdAt').$.subscribe(todos => {
        if (!todos) {
          return;
        }

        this.setState({ todos });
      });
    this.rxSubs.push(sub);
  }

  render() {
    return (
      <div className="todoWrapper">
        <div className="sectionHeader"> Todos </div>

        <TodoInput db={this.props.db} auth={this.props.auth} />

        <TodoList db={this.props.db} todos={this.state.todos} auth={this.props.auth} />
      </div>
    );
  }
}

TodoListWrapper.propTypes = {
  auth: PropTypes.any.isRequired,
};

export default TodoListWrapper;
