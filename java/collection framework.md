1.  What is the benefit of Generics in Collections Framework?

    Generics allow us to provide the type of Object that a collection can contain,
    so if you try to add any element of other type it throws compile time error.
    This avoids ClassCastException at Runtime because you will get the error at compilation.

2.  What are the basic interfaces of Java Collections Framework?

    Collection(Interface) is the root of the collection hierarchy.
    Set(Interface) is a collection that cannot contain duplicate elements
    List(Interface) is an ordered collection and can contain duplicate elements.
    Map(Interface) is an object that maps keys to values.

3.  Why Map interface doesn’t extend Collection interface?
    Although Map interface and it’s implementations are part of Collections Framework
    Map contains key-value pairs and it provides methods to retrieve list of Keys or values

4.	Iterator over Enumeration interface
    1)	An iterator over a collection. Iterator takes the place of Enumeration in the Java collections framework.
        Iterators differ from enumerations in two ways:
    2)	Iterators allow the caller to remove elements from the underlying collection during the iteration with well-defined semantics.
    3)	Method names have been improved in iterator.(hasnext(), next(), remove())
    4)	Method names in Enumeration (hasMoreElements(),nextElement())
    5)	Iterators are fail-fast . i.e. when one thread changes the collection by add / remove operations , while another thread is traversing it through an Iterator using hasNext() or next() method, the iterator fails quickly by throwing ConcurrentModificationException

5.	Iterable interface
    1)	Implementing this interface allows an object to be the target of the "for-each loop" statement.
    2)	all subtypes of Collection also implement the Iterable interface.
    3)	The Iterable interface has only one method:

    public interface Iterable<T> {
      public Iterator<T> iterator();
    }

6.	Fail Fast ?
    1)	When a problem occurs, a fail-fast system fails immediately.
    In Java, we can find this behavior with iterators. Incase, you have called iterator on a collection object, and another thread tries to modify the collection object, then concurrent modification exception will be thrown. This is called fail-fast.

7.	How to remove an item from collection while iterating
    1)	Iterator.remove()

    Iterator<Integer> it = nums.iterator();
    while (it.hasNext()) {
        Integer integer = it.next();
        if (integer < 3) {
            it.remove();
        }
    }
    Note: this wont throw concurrent modificaton execption, if you try to add or remove on Collection, after calling iterator on collection, we get concurrent modification exception.

8.	Can Tree based collections have null ?
    1)	No, if the specified element is null and this set uses natural ordering,
        or its comparator does not permit null elements, it must give compare(ob1, ob2) and need to handle null here, inorder to allow null values, whereas ob1.compareTo(ob2) cannot handle because obj1 == null, throws NullPointerException

9.	What is the use of Collections.emptyList()?
    1)	emptyList() returns immutable empty List, it is used to return emptyList instead of null, to avoid NullPointerException.

10.	What is the use of Collections.unmodifiableCollection(Collection )?
    1)	It returns immutable collection copy of the collection we pass to the method.
    It used to make a collection read only.

