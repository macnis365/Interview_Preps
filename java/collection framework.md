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

        1)An iterator over a collection. Iterator takes the place of Enumeration in the Java collections framework.
            Iterators differ from enumerations in two ways:
        2)Iterators allow the caller to remove elements from the underlying collection during the iteration with well-defined semantics.
        3)Method names have been improved in iterator.(hasnext(), next(), remove())
        4)Method names in Enumeration (hasMoreElements(),nextElement())
        5)Iterators are fail-fast . i.e. when one thread changes the collection by add / remove operations , while another thread is traversing it through an Iterator using hasNext() or next() method, the iterator fails quickly by throwing ConcurrentModificationException

5.	Iterable interface

        1)Implementing this interface allows an object to be the target of the "for-each loop" statement.
        2)all subtypes of Collection also implement the Iterable interface.
        3)The Iterable interface has only one method:
        public interface Iterable<T> {
          public Iterator<T> iterator();
        }

6.	Fail Fast ?

        1)When a problem occurs, a fail-fast system fails immediately.
        In Java, we can find this behavior with iterators. Incase, you have called iterator on a collection object, and another thread tries to modify the collection object, then concurrent modification exception will be thrown. This is called fail-fast.

7.	How to remove an item from collection while iterating
        1)Iterator.remove()

        Iterator<Integer> it = nums.iterator();
        while (it.hasNext()) {
            Integer integer = it.next();
            if (integer < 3) {
                it.remove();
            }
        }
        Note: this wont throw concurrent modificaton execption, if you try to add or remove on Collection, after calling iterator on collection, we get concurrent modification exception.

8.	Can Tree based collections have null ?

        1)No, if the specified element is null and this set uses natural ordering,
            or its comparator does not permit null elements, it must give compare(ob1, ob2) and need to handle null here, inorder to allow null values, whereas ob1.compareTo(ob2) cannot handle because obj1 == null, throws NullPointerException

9.	What is the use of Collections.emptyList()?

        emptyList() returns immutable empty List, it is used to return emptyList instead of null, to avoid NullPointerException.

10.	What is the use of Collections.unmodifiableCollection(Collection )?

        It returns immutable collection copy of the collection we pass to the method.
        It used to make a collection read only.

11. What is the importance of hashCode() and equals() methods?

        HashMap uses Key object hashCode() and equals() method to determine the index to put the key-value pair.
        These methods are also used when we try to get value from HashMap. If these methods are not implemented correctly,
        two different Key’s might produce same hashCode() and equals() output and in that case rather than storing it at
        different location, HashMap will consider them same and overwrite them.

12. The implementation of equals() and hashCode() should follow these rules.

        If o1.equals(o2), then o1.hashCode() == o2.hashCode()should always be true.
        If o1.hashCode() == o2.hashCode is true, it doesn’t mean that o1.equals(o2) will be true.

13. Internal Working of HashMap in Java

        HashMap contains an array of Node and Node can represent a class having following objects :
        int hash
        K key
        V value
        Node next

    How hashing works:

        For insertion of a key(K) – value(V) pair into a hash map, 2 steps are required:

        1)K is converted into a small integer (called its hash code) using a hash function.
        2)The hash code is used to find an index (hashCode % arrSize) and the entire linked list at that index(Separate chaining) is first searched for the presence of the K already.
        3)If found, it’s value is updated and if not, the K-V pair is stored as a new node in the list.
        -HashMap allows null key, so hash code of null will always be index 0th.
        -In case of collision, when there is an item exist in the calculated index, check via hashCode() and equals() method,
         to check both keys or same, if true, override the value, otherwise connect this new node to the previous node object.

  HashMap Changes in Java 8

    As we know now that in case of hash collision entry objects are stored as a node in a linked-list and equals() method is used to compare keys.
    That comparison to find the correct key with in a linked-list is a linear operation so in a worst case scenario the complexity becomes O(n).
    To address this issue, Java 8 hash elements use balanced trees instead of linked lists after a certain threshold is reached.
    Which means HashMap starts with storing Entry objects in linked list but after the number of items in a hash becomes larger than a certain threshold,
    the hash will change from using a linked list to a balanced tree, which will improve the worst case performance from O(n) to O(log n).


HashMap has two parameters that affect its performance:

    1)initial capacity and
    2)load factor.
      The capacity is the number of buckets in the hash table, and the initial
      capacity is simply the capacity at the time the hash table is created.

      The load factor is a measure of how full the hash table is allowed to
      get before its capacity is automatically increased.

      When the number of entries in the hash table exceeds the product of the load factor and the
      current capacity, the hash table is rehashed (that is, internal data
      structures are rebuilt) so that the hash table has approximately twice the
      number of buckets.

Load factor (to calculate LF, size/number of buckets )

     if there are n entries and b is the size of the array there would be n/b entries on each index.
     This value n/b is called the load factor that represents the load that is there on our map.
     This Load Factor needs to be kept low, so that number of entries at one index is less and so is the complexity almost constant, i.e., O(1).
     default initial capacity 16 and the default load factor (0.75).

Rehashing can be done as follows:

    For each addition of a new entry to the map, check the load factor.
    If it’s greater than its pre-defined value (or default value of 0.75 if not given), then Rehash.
    For Rehash, make a new array of double the previous size and make it the new bucket array.
    Then traverse to each element in the old bucketArray and call the insert() for each so as to insert it into the new larger bucket array.

What is difference between HashMap and Hashtable?

    HashMap allows null key and values whereas Hashtable doesn’t allow null key and values.
    Hashtable is synchronized but HashMap is not synchronized. So HashMap is better for single threaded environment, Hashtable is suitable for multi-threaded environment.
    HashMap provides Set of keys to iterate and hence it’s fail-fast but Hashtable provides Enumeration of keys that doesn’t support this feature.
    Hashtable is considered to be legacy class and if you are looking for modifications of Map while iterating, you should use ConcurrentHashMap.

How to decide between HashMap and TreeMap?

    For inserting, deleting, and locating elements in a Map, the HashMap offers the best alternative. If, however, you need to traverse the keys in a sorted order, then TreeMap is your better alternative.

What is difference between Comparable and Comparator interface?

    Comparable and Comparator interfaces are used to sort collection or array of objects.
    Comparable compareTo(Object o) method implementation can sort based on one field only.
    Comparator interface compare(Object o1, Object o2) method need to be implemented that takes two Object argument

    Comparable interface is used to provide the natural sorting of objects and we can use it to provide sorting based on single logic.
    Comparator interface is used to provide different algorithms for sorting and we can chose the comparator we want to use to sort the given collection of objects.

Internal Working of Hashmap and its optimization Java8 onwards

        MIN_TREEIFY_CAPACITY is the minimum number of buckets before a certain bucket is transformed into a Tree.

        UNTREEIFY_THRESHOLD comes into play after re-hashing. At that point, some entries might move from this bins to others 
        and it might reach this UNTREEIFY_THRESHOLD. At this point it does not pay off to keep the bin as red-black tree node, 
        but as a LinkedList instead.

        TREEIFY_THRESHOLD -> when a single bucket reaches this (and the total number exceeds MIN_TREEIFY_CAPACITY), 
        it is transformed into a perfectly balanced red/black tree node. Why? Because of search speed.

What is a Tree Map ?

        Treemap class is like HashMap which stores key- value pairs . The major difference is that Treemap  sorts
        the key in ascending order. according to the natural ordering of its keys, or by a Comparator provided at map creation time,    depending on which constructor is used.

How TreeMap works in java ?

        TreeMap is a Red-Black tree based NavigableMap implementation.In other words , it sorts the TreeMap object keys using Red-Black tree algorithm.

What is the runtime performance of the get() method in TreeMap and HashMap  ,where n represents the number of elements ?

        TreeMap implementation provides guaranteed log(n) time cost for the containsKey,get,put and remove operations.
        TreeMap : log(n)   
        HashMap : Constant time performance assuming elements disperses properly
        
How Set Ensures Uniqueness

	what happens internally when you pass duplicate elements in the  add() method of the Set object , It will return false and do not add to the HashSet , as the element is already present .So far so good .

But the main problem arises that how it returns false . So here is the answer

	So , we are achieving uniqueness in Set,internally in java  through HashMap . Whenever you create an object of HashSet it will create an object of HashMap as you can see in the italic lines in the above code .

	As we know in HashMap each key is unique . So what we do in the set is that we pass the argument in the add(Elemene E) that is E as a key in the HashMap . Now we need to associate some value to the key , so what Java apis developer did is to pass the Dummy  value that is ( new Object () ) which is referred by Object reference PRESENT .

	So , actually when you are adding a line in HashSet like  hashset.add(3)   what java does internally is that it will put that element E as a key in the HashMap(created during HashSet object creation) and some dummy value that is Object's object is passed as a value to the key .

	The main point to notice in above code is that put (key,value) will return

	1.  null , if key is unique and added to the map
	2.  Old Value of the key , if key is duplicate

	public boolean add(E e) {
		return map.put(e, PRESENT)==null;
	}

	So , if map.put(key,value) returns null ,then
	map.put(e, PRESENT)==null will return true and element is added to the HashSet.

	So , if map.put(key,value) returns old value of the key ,then
	map.put(e, PRESENT)==null  will return false and element is  not added to the HashSet .

Equals and Hashcode contract

	From the hashCode() docs:
	If two objects are equal according to the equals(Object) method, then calling the hashCode method on each of the two objects must produce the same integer result.

	and from equals:
	Note that it is generally necessary to override the hashCode method whenever this method is overridden, so as to maintain the general contract for the hashCode method, which states that equal objects must have equal hash codes.

Hashset Collison

	Java Hash Maps/Sets Automatically handel Hash collisions, this is why it is important to override both the equals and the hashCode methods. As both of them are utilised by Sets to differentiate duplicate or unique entries.

	It is also important to note that these hash collisions hava a performance impace since multiple objects are referenced by the same Hash.
