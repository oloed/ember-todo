window.App = Ember.Application.create()

App.Todo = Ember.Object.extend({
  title: 'new Todo',
  all: function () {
    // implementation missing
  }
});

App.todosController = Ember.Controller.create({
  todos: App.Todo.all()
});

$(function () {
  console.log('Here we go');
});
