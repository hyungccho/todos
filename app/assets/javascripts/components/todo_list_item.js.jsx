/* globals React */
/* globals TodoStore */

var TodoListItem = React.createClass({
  getInitialState: function() {
    return {
      expanded: false
    };
  },

  handleClick: function (e) {
    this.setState({expanded: !this.state.expanded});
  },

  render: function() {
    var detailView = <TodoDetailView todo={this.props.todo}/>;
    if (!this.state.expanded) {
      detailView = "";
    }

    return(
      <div>
        <div onClick={this.handleClick}>
          {this.props.todo.title}
        </div>
        {detailView}
      </div>
    );
  }
});
