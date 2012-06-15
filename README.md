Ember TODO
==========

This project was forked from [Remi's
TODO](http://remi.github.com/ember-todo)

I want to reimplement the same features so we can later (eventually)
compare our work.

Implemented So Far
------------------

 - `@ember` Use an Ember model (`Todo`)

Backlog (TODO)
--------------

 - `@ember` Use an Ember controller (`Todos.todosController as singleton`)
 - `@ember` Use Ember views
 - `@ember` Use `{{action}}` to trigger functions on views on event
 - `@ember` Use `.observes("collection.@each.property")`
 - `@ember` Use `classBinding="someBoolProperty"` to get `class="some-bool-property"` (when truthy)
 - `@ember` Use a `{{view}}` instance per model instance (inside an `{{each}}` loop)
 - `@ember` Use Ember.TextField
 - `@ember` Catch event on View without using `{{action}}` (by overriding function with event name on view)
 - `@story` As a User I should be able to add a Todo
 - `@story` As a User I should be able to remove a Todo
 - `@story` As a User I should be able to prioritize Todos by dragging/dropping (*implemented with HTML5*)
 - `@story` As a User my Todos should be persisted across sessions (*implemented with localStorage*)
 - `@story` As a User I should be able to edit a Todo (in-place)
 - `@ember` Port to use the latest ember.js (w/o new features)
 - `@ember` Refactor away from singleton controllers
 - `@ember` Use Ember.Router
 - `@ember` Use Ember Data
 - `@ember` Load application template into `<body>` (and use ApplicationView/Controller)
 - `@story` Add browser tests (chrome & firefox)
 - `@story` Filter TODOs (filter as you type)
 - `@story` Be able to have tabs of different named groups of TODOs
 - `@story` Add JavaScript tests

[ember.js]: http://emberjs.com
