1)What is the benefit of Generics in Collections Framework?

Generics allow us to provide the type of Object that a collection can contain,
so if you try to add any element of other type it throws compile time error.
This avoids ClassCastException at Runtime because you will get the error at compilation.

2)What are the basic interfaces of Java Collections Framework?

    Collection(Interface) is the root of the collection hierarchy.
    Set(Interface) is a collection that cannot contain duplicate elements
    List(Interface) is an ordered collection and can contain duplicate elements.
    Map(Interface) is an object that maps keys to values.

3)Why Map interface doesn’t extend Collection interface?
    Although Map interface and it’s implementations are part of Collections Framework
    Map contains key-value pairs and it provides methods to retrieve list of Keys or values
