 The below core concepts of Object oriented Programming in the following sequence:
  1. Inheritance
  2. Encapsulation
  3. Abstraction
  4. Polymorphism

Inheritance: ( ex- family property)
 Inheritance is the process by which objects of one class acquire the properties of objects of another class. 
 It supports the concept of hierarchical classification. Inheritance provides re usability. 
 This means that we can add additional features to an existing class without modifying it.
 1)	Inheritance is process of acquiring the properties of the parent from the child class.
 2)	Mainly we move all the common properties to the parent class, and all subclass will inherit these common properties, we use extends, implements keywords.
 3)	Private member cannot be inherited.
 4)	In java one class can inherit atmost only one class at a time.

 
 Encapsulation: ( ex- capsule wraps medicine)
	Its also know as data hiding or information hiding.
	Encapsulation is a mechanism where you bind your data and code together as a single unit. 
	It also means to hide your data in order to make it safe from any modification.
	1)	Encapsulation is used to protect the members of class using different access specifiers like default, public, private and protected.
    2)	Best example for encapsulation in Java POJO, where we have all the calss fields as private, and use getters(), setters() for accessing the fields.
	
Abstraction:(collection is a best example)
	It basically deals with hiding the details and showing the essential things to the user
	1)	Abstraction is used to give a way to access the complex hidden implementation.
    2)	Abstraction is achieved through interface.
    3)	Advantage of abastraction is simplicity, loose coupling.
	
Polymorphism: ()
    polymorphism means ability to take more than one form.
    An operation may exhibit different behaviors in different instances.
    The behavior depends upon the types of data used in the operation.
        1)	Most common use of polymorphism in OOP occurs when parent class reference is used to refer child object.

    Two types of polymorphism are Runtime and compile-time polymorphism.
        1)Run time poly - refers to a process in which a call to an overridden method is resolved at runtime rather than at compile-time.
        2)compile time poly - refers to a process in which a call to an overloaded method is resolved at compile time rather than at run time

Association is relation between two separate classes which establishes through their Objects.

	Aggregation
	It represents Has-A relationship.
	both the entries can survive individually which means ending one entity will not effect the other entity

	Composition is a restricted form of Aggregation in which two entities are highly dependent on each other.
	It represents part-of relationship.
	In composition, both the entities are dependent on each other.
