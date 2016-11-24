var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
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
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onSetAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
