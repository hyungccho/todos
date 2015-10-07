/* globals React */
/* globals TodoStore */

var ToDoForm = React.createClass({
  getInitialState: function() {
    return {
      title: "",
      body: ""
    };
  },

  updateTitle: function (e) {
    this.setState({title: e.target.value});
  },

  updateBody: function (e) {
    this.setState({body: e.target.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();

    TodoStore.create({
      title: this.state.title,
      body: this.state.body
    });

    this.setState({title: "", body: ""});
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.updateTitle} value={this.state.title}></input>

        <textarea onChange={this.updateBody} value={this.state.body}></textarea>
        <input type="submit"></input>
      </form>
    );
  }
});
