(function(root) {
  'use strict';

  var _todos = [], _callBacks = [];

  root.TodoStore = {
    changed: function () {
      _callBacks.forEach (function (handler) {
        handler();
      });
    },

    addChangeHandler: function (handler) {
      _callBacks.push(handler);
    },

    removeChangeHandler: function (handler) {
      var index = _callBacks.indexOf(handler);

      if (index !== -1) {
        _callBacks.splice(index, 1);
      }
    },

    all: function () {
      return _todos.slice();
    },

    fetch: function () {
      $.ajax({
        url: "/api/todos",
        type: 'GET',
        dataType: 'json',
        success: function(result) {
          _todos = result;
          this.changed();
        }.bind(this),
        failure: function(result) {
          console.log('error');
        }
      });
    },

    create: function(todo) {
      $.ajax({
        url: "/api/todos",
        type: "post",
        dataType: 'json',
        data: todo,
        success: function(result) {
          _todos.push(result);
          this.changed();
        }.bind(this)
      });
    },

    find: function(id) {
      var todoIds = _todos.map(function(todo) {
        return todo.id;
      });

      return todoIds.indexOf(id);
    },

    destroy: function(id) {
      var idx = this.find(id);

      if (idx === -1) {
        return;
      } else {
        $.ajax({
          url: "/api/todos/" + id,
          type: "delete",
          dataType: "json",
          success: function () {
            _todos.splice(idx, 1);
            this.changed();
          }.bind(this)
        });
      }
    },

    toggleDone: function (id) {
      var idx = this.find(id);

      if (idx === -1) {
        return;
      } else {
        var data = _todos[idx];
        data.done = !data.done;

        $.ajax({
          url: "/api/todos/" + id,
          type: "PATCH",
          dataType: "json",
          data: data,
          success: function (todo) {
            this.changed();
          }.bind(this)
        });
      }
    }
  };
}(this));
