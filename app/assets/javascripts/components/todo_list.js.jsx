/* globals React */
/* globals TodoStore */

// (function(root) {
//   'use strict';
//
//   if (typeof root.Components === "undefined") {
//     root.Components = {};
//   }

  var ToDoList = React.createClass({
    getInitialState: function() {
      return { toDoList: TodoStore.all() };
    },

    componentDidMount: function() {
      TodoStore.addChangeHandler(this._toDosChanged);
      TodoStore.fetch();
    },

    componentWillUnmount: function() {
      TodoStore.removeChangeHandler(this._toDosChanged);
    },

    _toDosChanged: function () {
      this.setState({ toDoList: TodoStore.all() });
    },

    render: function() {
      return(
        <div>
          <ToDoForm />
          <ul>
            {
              this.state.toDoList.map(function(toDo) {
                return(
                  <li><TodoListItem key={toDo.id} todo={toDo} /></li>
                );
              })
            }
          </ul>
        </div>
      );
    }
  });


// }(this));
