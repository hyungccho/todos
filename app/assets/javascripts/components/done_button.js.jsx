/* globals React */
/* globals TodoStore */

var DoneButton = React.createClass({

  handleDone: function(e) {
    e.preventDefault();
    TodoStore.toggleDone(this.props.todo.id);
  },

  render: function() {
    var doneText = (this.props.todo.done) ? "Undo" : "Done";
    return (
      <button onClick={this.handleDone}>{doneText}</button>
    );
  }

});
