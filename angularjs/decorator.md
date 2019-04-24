Decorator functions

Decorators are a core concept when developing with Angular

# Angular Decorators

  Class decorators, e.g. @Component and @NgModule,   
  Property decorators for properties inside classes, e.g. @Input and @Output,   
  Method decorators for methods inside classes, e.g. @HostListener,  
  Parameter decorators for parameters inside class constructors, e.g. @Inject, 

# Class Decorators
Angular offers us a few class decorators. These are the top-level decorators that we use to express intent for classes. They allow us to tell Angular that a particular class is a component, or module, for example. And the decorator allows us to define this intent without having to actually put any code inside the class.

A @Component and @NgModule decorator example with classes:

import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'example-component',
  template: '<div>Woo a component!</div>',
})
export class ExampleComponent {
  constructor() {
    console.log('Hey I am a component!');
  }
}

@NgModule({
  imports: [],
  declarations: [],
})
export class ExampleModule {
  constructor() {
    console.log('Hey I am a module!');
  }
}
Notice how both classes by themselves are effectively 

# Decorator functions
Decorators are actually just functions, it’s as simple as that, and are called with whatever they are decorating.
A method decorator will be called with the value of the method it’s decorating, 
and a class decorator will be called with the class to be decorated.

# What Angular decorators actually do
Every type of decorator shares the same core functionality. From a purely decorative point of view, 
@Component and @Directive both work in the same way, as do @Input and @Output. 
Angular does this by using a factory for each type of decorator.

# Storing metadata
The whole point of a decorator is to store metadata about a class, method or property as we’ve already explored. When you configure a component for example, you’re providing metadata for that class that tells Angular that we have a component, and that component has a specific configuration.
Each decorator has a base configuration that you can provide for it, with some defaults applied for you.

An annotation instance is created when you use a decorator. This merges the default configuration for that decorator (for instance the object you see above) with the configuration that you have specified

# Chaining decorators
If a decorator is used on a class for the first time, it creates a new array and pushes the annotation instance into it. If this isn’t the first decorator that has been used on the class, it pushes it into the existing annotation array

export class TestComponent {
  @Input()
  @HostListener('click', ['$event'])
  onClick: Function;
}
