1. Object creation
2. dot operator
3. bracket notation
4. this
5. EcmaScript5
6. Object.defineProperty
7. Object.create (inheritance)
8. Object.prototype
9. new keyword and its significance
10. Prototype - An encapsulation of properties that an object links to.
11. transpiler
12. closures
In EcmaScript2015 allow Classes


Constructor function used for object creation
using new keyword with constructor fun
this keyword


prototypes
one of the use is to similar to static in java, share the function/fields across the object created with new keyword
expand of objects using prototypes (polyfils)

modules

class
constructor
extends
super
this
export

import {} from ''

just list out list of topics and outline to push


BOM and DOM

window Object(window is a global object)
window - properties
window - methods
window - events


Timers
setTimeout()
setInterval()

Location Object
properties, methods, events

Document Object
select, modify DOM



error handling and custom error in js

creating promise
Promises async js, which holds values of an async operation
promises to return you values, waiting on async operation

promise holds the value, which promises doesnt have yet, 

settling a promise(then)

=============================================================================================

null and undefined are special in js

Function Parameters

js no overloading, 2nd definition of function with same name simply overrides first
arguments available inside all function
all functions return value(if no return defined, it returns undefined)

this applies to the owner of the function
cab (call, apply, bind) is used to change the owner of the funciton

* functions are the only candidate which creates scope.

use namespaces to avoid polluting global scope along with anonymous self executing funcitons

can  create with objects 
var WilderMinds = WilderMinds || {};
WilderMinds.Models = WilderMinds.Models || {};

(function(ns){
var currentDate = new Date();

// Add function to WilderMinds namespace
ns.currentTime = function(){
return currentDate;
};
})(window.WilderMinds = window.WilderMinds || {});

object creation
dot and bracket

Object.defineProperty(this, "name", {get: function(){return _name;}})

static data in js 

function Customer(name, company){
this.name = name;
    this.company = company;
}
Customer.mailServer = "mail.google.com"
var cust = new Customer();

cust.mailServer; not defined

Customer.mailServer return value
static members dont have access to private members, but only public members

prototype in js

sharing function
prototype has special property which static dont, it has access to private members too


Prototype inheritance

function Animal(foodType){
    this.foodType=foodType;
}

Animal.prototype.feed = function(){
    alert("Fed the animal: " +this.foodType);
};

function Cow(color){
    this.color=color;
}

Cow.prototype = new Animal("Hay");

var c = new Cow("White");

c.feed(); Hay

c instanceof Animal (true)
c instanceof Cow (true)
