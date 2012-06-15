Ember.js TODO
=============

This is just a sample mini [Ember.js][] application that I created 
to learn Ember.

 > **NOTE:** May only work in Google Chrome

You can use [Ember TODO][todo] at [http://remi.github.com/ember-todo][todo]

Implemented Features
--------------------

 - `@learning` Use an Ember model (`Todo`)
 - `@learning` Use an Ember controller (`Todos.todosController as singleton`)
 - `@learning` Use Ember views
 - `@learning` Use `{{action}}` to trigger functions on views on event
 - `@learning` Use `.observes("collection.@each.property")`
 - `@learning` Use `classBinding="someBoolProperty"` to get `class="some-bool-property"` (when truthy)
 - `@learning` Use a `{{view}}` instance per model instance (inside an `{{each}}` loop)
 - `@learning` Use Ember.TextField
 - `@learning` Catch event on View without using `{{action}}` (by overriding function with event name on view)
 - `@feature` As a User I should be able to add a Todo
 - `@feature` As a User I should be able to remove a Todo
 - `@feature` As a User I should be able to prioritize Todos by dragging/dropping (*implemented with HTML5*)
 - `@feature` As a User my Todos should be persisted across sessions (*implemented with localStorage*)
 - `@feature` As a User I should be able to edit a Todo (in-place)

Backlog (TODO)
--------------

 - `@learning` Port to use the latest ember.js (w/o new features)
 - `@learning` Refactor away from singleton controllers
 - `@learning` Use Ember.Router
 - `@learning` Use Ember Data
 - `@learning` Load application template into `<body>` (and use ApplicationView/Controller)
 - `@feature` Add browser tests
 - `@feature` Filter TODOs (filter as you type)
 - `@feature` Be able to have tabs of different named groups of TODOs
 - `@feature` Add JavaScript tests

[ember.js]: http://emberjs.com
[todo]: http://remi.github.com/ember-todo
