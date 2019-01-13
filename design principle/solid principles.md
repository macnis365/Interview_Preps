S.O.L.I.D Principles (java examples)
Single responsibility principle -A class should have one and only one reason to change, meaning that a class should only have one job.

Open/Closed principle - Software Objects or entities should be open for extension, but closed for modification.
explaination:

  The Liskov Substitution Principle is the third of Robert C. Martin’s SOLID design principles. It extends the Open/Closed principle and enables you to replace objects of a parent class with objects of a subclass without breaking the application. This requires all subclasses to behave in the same way as the parent class. To achieve that, your subclasses need to follow these rules:

  Don’t implement any stricter validation rules on input parameters than implemented by the parent class.
  Apply at the least the same rules to all output parameters as applied by the parent class.

  Liskov Substitution Principle - Child classes should never break the parent class type definitions.

  Interface Segregation Principle - No client should be forced to depend on methods it does not use.

Dependency inversion principle - High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend upon details. Details should depend upon abstractions.
