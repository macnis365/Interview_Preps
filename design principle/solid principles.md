S.O.L.I.D Principles (java examples)
Single responsibility principle -A class should have one and only one reason to change, meaning that a class should only have one job.

Open/Closed principle - Software Objects or entities should be open for extension, but closed for modification.

  The general idea of this principle is great. It tells you to write your code so that you will be able to add new functionality without changing the existing code. That prevents situations in which a change to one of your classes also requires you to adapt all depending classes.

explaination:

Liskov Substitution Principle - Child classes should never break the parent class type definitions.

  The Liskov Substitution Principle is the third of Robert C. Martin’s SOLID design principles. It extends the Open/Closed principle and enables you to replace objects of a parent class with objects of a subclass without breaking the application. This requires all subclasses to behave in the same way as the parent class. To achieve that, your subclasses need to follow these rules:

  Don’t implement any stricter validation rules on input parameters than implemented by the parent class.
  Apply at the least the same rules to all output parameters as applied by the parent class.

Interface Segregation Principle - No client should be forced to depend on methods it does not use.

It’s tempting to add a new method to an existing interface even though it implements a different responsibility and would be better separated in a new interface. That’s often the beginning of interface pollution, which sooner or later leads to bloated interfaces that contain methods implementing several responsibilities.

Dependency inversion principle - High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend upon details. Details should depend upon abstractions.

The general idea of this principle is as simple as it is important: High-level modules, which provide complex logic, should be easily reusable and unaffected by changes in low-level modules, which provide utility features. To achieve that, you need to introduce an abstraction that decouples the high-level and low-level modules from each other.

[!https://stackify.com/dependency-inversion-principle/]
