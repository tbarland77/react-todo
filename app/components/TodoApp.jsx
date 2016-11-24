var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the cat dammit'
        },
        {
          id: 2,
          text: 'Keep learning brah'
        },
        {
          id:3,
          text: 'Get a new job'
        },
        {
          id:4,
          text: 'Give Phaser another try'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo ' + text);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
      
        <TodoList todos={todos}/>
        <AddTodo onSetAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
