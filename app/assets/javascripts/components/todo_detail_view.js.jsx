/* globals React */
/* globals TodoStore */
/* globals StepStore */


var TodoDetailView = React.createClass({
  handleDestroy: function (e) {
    e.preventDefault();

    TodoStore.destroy(this.props.todo.id);
  },

  componentWillMount: function() {
    StepStore.fetch(this.props.todo.id);
  },

  render: function() {
    return (
      <div>
        <div>
          {this.props.todo.body}
        </div>
        <button onClick={this.handleDestroy}>DESTROY</button>
        <DoneButton todo={this.props.todo} />
        <ul>
          {
            this.allSteps().forEach(function (step) {
              return <li>{step.body}</li>;
            })
          }
        </ul>
      </div>
    );
  }
});
