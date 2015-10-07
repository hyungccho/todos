(function(root) {
  'use strict';

  var _steps = {}, _callBacks = [];

  root.StepStore = {
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

    all: function (todoid) {
      return _steps.todoid.slice();
    },

    fetch: function (todoid) {
      $.ajax({
        url: "/api/todos/" + todoid + "/steps",
        type: 'GET',
        dataType: 'json',
        success: function(result) {
          _steps[todoid] = result;
          this.changed();
        }.bind(this),
        failure: function(result) {
          console.log('error');
        }
      });
    },

    create: function(step) {
      $.ajax({
        url: "/api/todos/" + step.todo_id + "/steps",
        type: "post",
        dataType: 'json',
        data: step,
        success: function(result) {
          if (typeof _steps[step.todo_id] === 'undefined') {
            _steps[step.todo_id] = [result];
          } else {
            _steps[step.todo_id].push(result);
          }
          this.changed();
        }.bind(this)
      });
    },

    find: function(step) {
      var stepIds = _steps[step.todo_id].map(function(step) {
        return step.id;
      });

      return stepIds.indexOf(step.id);
    },

    destroy: function(step) {
      var idx = this.find(step);

      if (idx === -1) {
        return;
      } else {
        $.ajax({
          url: "/api/steps/" + step.id,
          type: "delete",
          dataType: "json",
          success: function () {
            _steps[step.todo_id].splice(idx, 1);
            this.changed();
          }.bind(this)
        });
      }
    },

    toggleDone: function (step) {
      var idx = this.find(step);

      if (idx === -1) {
        return;
      } else {
        var data = _steps[step.todo_id][idx];
        data.done = !data.done;

        $.ajax({
          url: "/api/steps/" + step.id,
          type: "PATCH",
          dataType: "json",
          data: data,
          success: function (step) {
            this.changed();
          }.bind(this)
        });
      }
    }
  };
}(this));
