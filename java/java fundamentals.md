1.	When to use Abstract class and when to use Interface.

        1)	We go for interface, when we want to impose standardization, incase of API design.
        2)	Abstract class is used give default implementation to sub classes, but we don’t want to instantiate, since abstract class can have no abstract method still can be abstract class.

2.	When to extend Exception class(Checked Exception) and when to extend RuntimeException(UnChecked Exception)

        1)	When the client cannot reasonably recover from program, I would throw RuntimeException, these are typically uncheked exceptions.
            Example, IllegalArgumentException, ArithmeticException, NullPointerException, ArrayIndexOutOfBoundException

        2)	When extend Exception class when we can handle the exception scenaorio or program can continue even after the checked exception.
            Example, IOException, SQLException, ClassNotFoundException, FileNotFoundException, InterruptedException, CloneNotSupportedException, NotSerializableException


3.	Difference between Deep Copy vs Shallow Copy(Cloning)

        1)	Cloning is mechanism to create an exact copy an  object value and retrun it.
        2)	Shallow cloning is the default mechanism provide by java if we implement Clonable marker interface and don’t give any implementation in
            protected Object clone() throws CloneNotSupportedException
        3)	Deep Cloning is used when instance has mutalable reference member, since shallow copy just copied the reference of the mutable reference,
            if original instance makes any change to this refernce the cloned copy will also see the change.
            To avoid this we have to give implementation in the clone() and return new instance of the mutable reference and return the copy.

4.	Serialization in java

        1)	Serialization is a process of converting an object into sequence of bytes which can be peristed to disk or database or can be sent through network.
        2)	By implemeting Serializable marker interface we can say a object is serialiable or not.
        3)	We use ObjectInputStrem and ObjectOutputStrem,
        Object readObject() IOException, ClassNotFoundException and void writeObject(Object obj) throw IOException
        4)	If a class is serializable, but your superclass is NOT serializable, then any instance variables you INHERIT from that superclass will be reset to the values they were given during the original construction of the object. This is because the non- serializable class constructor WILL run!
        5)	If you try to serialize an object of a class which implements Serializable, but the object includes a reference to an non- Serializable class then a ‘NotSerializableException’ will be thrown at runtime

5. Are classes that implement Serializable required to have no-argument constructors?

        No, Only when there is a super class that is not serializable, (that is you extend a non-serializable class with a serializable class) then that class is not expecting to be deserialized, and it has no mechanism for storing/restoring its members. If the super class is not serializable, the deserialization mechanism needs to call the zero-argument constructor to make sure that the reconstituted object instance is initialized correctly.

6.	Serializable vs Externalizable

        1)	One of the obvious difference between Serializable and Externalizable is that Serializable is a marker interface i.e. does not contain any method but Externalizable interface contains two methods writeExternal() and readExternal().
        2)	The second difference between Serializable vs Externalizable is responsibility of Serialization. when a class implements Serializable interface, default Serialization process gets kicked of and that takes responsibility of serializing super class state. When any class in Java implement java.io.Externalizable than its your responsibility to implement Serialization process i.e. preserving all important information.
        3)	This difference between Serializable and Externalizable is performance. You can not do much to improve performance of default serialization process except reducing number of fields to be serialized by using transient and static keyword but with Externalizable interface you have full control over Serialization process.
        4)	When to use externalizable - There might be times when you have special requirements for the serialization of an object. For example, you may have some security-sensitive parts of the object, like passwords, then we go for externalizable
        5)	you must have no args contructor if you implement externalizable. But in serializable is not mandatory.

7.	Why no args Constructor is mandatory while implementing Externalizable?

        1)	User doesn't serializes all data members.That's why to fetch values of the members which are not exteralized public no arg constructor is required.


8.	Immutable class in Java

        1)	An object is considered immutable if its state cannot change after it is constructed.
        2)	Steps to make any class immutable, first make class final, make all the class fields private final, never provide setter methods to set the class fields,
        If an instance field includes mutable reference, create copies of your internal mutable objects and return this object instead original.

9. Generic Vs Inheritence
        
        I think you should use generics when you want only the same functionality applied to various types (Add, Remove, Count) and it will be implemented the same way. 
        Inheritance is when you need the same functionality (GetResponse) but want it to be implemented different ways.
