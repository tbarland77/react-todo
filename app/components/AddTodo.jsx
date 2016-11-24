var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var strTodo = this.refs.todoText.value;

    if(strTodo.length > 0)
    {
      this.refs.todoText.value = '';
      this.props.onSetAddTodo(strTodo);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="AddTodo-form">
          <input type="text" ref="todoText" placeholder="Enter a todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
