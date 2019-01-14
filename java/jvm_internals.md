What is the difference between JVM, JRE and JDK?

    The Java Runtime Environment contains core classes and supporting files; it also contains Java Virtual Machine (JVM).

    JVM provides a runtime environment for executing Java bytecode. It is an abstract machine that is platform-dependent and has three notions as a specification, a document that describes requirement of JVM implementation, implementation, a computer program that meets JVM requirements, and instance, an implementation that executes Java bytecode.

    JIT is part of JVM that optimise byte code to machine specific language compilation by compiling similar byte codes at same time, hence reducing overall time taken for compilation of byte code to machine specific language.

    JVM, which stands for Java Virtual Machine, is a virtual machine that understands and runs java bytecodes.
    JVM understands bytecodes and can execute the .class Java files.There are specific implementations of the
    JVM for specific platforms - Windows, Linux etc. This is how Java programming language is platform independent
    and make the Java programs portable i.e write once, run anywhere.

    JRE, which stands for Java Runtime Environment, provides an implementation of the JVM, supporting libraries and
    other components required to run Java programs.

    JDK, which stands for Java Development Kit, contains the JRE plus tools such as compilers, debuggers etc.
    which are required for developers to develop Java programs.

Explain how Java programs are executed by the JVM?

    Java program (.java files) are compiled into bytecodes (.class files) using the Java compiler (javac).
    A class loader, which is a component of the JVM loads the compiled Java bytecodes into specific areas called runtime data areas.
    Java execution engine, which is also a component of the JVM executes the Java bytecodes.

What do we mean when we say memory is managed in Java? What is the Garbage Collector?

        In languages like C the developer has direct access to memory.  The code literally references memory space addresses. This can be difficult and dangerous, and can result in damaging memory leaks.  In Java on the other hand all memory is managed.  As a programmer we deal exclusively in objects and primitives and have no concept of what is happening underneath with regards to memory and pointers.  Most importantly, Java has the concept of a garbage collector.  When objects are no longer needed the JVM will automatically identify and clear the memory space for us.

What are the benefits and negatives of the Garbage Collector?

    On the positive side:

    The developer can worry much less about memory management and concentrate on actual problem solving. Although memory leaks are still technically possible they are much less common.
    The GC has a lot of smart algorithms for memory management which work automatically in the background. Contrary to popular belief, these can often be better at determining when best to perform GC than when collecting manually.

    On the negative side

    When a garbage collection occurs it has an effect on the application performance, notably slowing it down or stopping it.  In so called “Stop the world” garbage collections the rest of the application will freeze whilst this occurs. This is can be unacceptable depending on the application requirements, although GC tuning can minimise or even remove the impact.
    Although it’s possible to do a lot of tuning with the garbage collector, you cannot specify when or how the application performs GC.

What is “Stop the World”?

    When a GC happens it is necessary to completely pause the threads in an application whilst collection occurs. This is known as Stop The World.  For most applications long pauses are not acceptable.  As a result it is important to tune the garbage collector to minimise the impact of collections to be acceptable for the application.

How does Generational GC work? Why do we use generational GC? How is the Java Heap structured?

    It is important to understand how the Java Heap works to be able to answer questions about GC.  All objects are stored on the Heap (as opposed to the Stack, where variables and methods are stored along with references to objects in the heap). Garbage Collection is the process of removing Objects which are no longer needed from the Heap and returning the space for general consumption. Almost all GCs are “generational”, where the Heap is divided into a number of sections, or generations.  This has proven significantly more optimal which is why almost all collectors use this pattern.

 New Generation

     To separate the shortlived objects so that they can be quickly collected. these Objects are placed into the new generation.

    New gen is split up further:

    Eden Space: all new objects are placed in here.  When it becomes full, a minor GC occurs.  all objects that are still referenced are then promoted to a survivor space

    Survivor spaces: The implementation of survivor spaces varies based on the JVM but the premise is the same.  Each GC of the New Generation increments the age of objects in the survivor space.  When an object has survived a sufficient number of minor GCs (Defaults vary but normally start at 15) it will then be promoted to the Old Generation.  Some implementations use two survivor spaces, a From space and a To space. During each collection these will swap roles, with all promoted Eden objects and surviving objects move to the To space, leaving From empty.
    A GC in the NewGen is known as a minor GC. One of the benefits of using a New Generation is the reduction of the impact of fragmentation. By having a Generational GC we limit the amount that this happens in the Old Generation

Old Generation

    Any objects that survive from survivor spaces in the New Generation are promoted to the Old Generation. The Old Generation is usually much larger than the New Generation.  When a GC occurs in old gen it is known as a full GC. Full GCs are also stop-the-world and tend to take longer, which is why most JVM tuning occurs here.

There are a number of different Algorithms available for Garbage Collection

Serial GC

    Designed when computers only had one CPU and stops the entire application whilst GC occurs.  It uses mark-sweep-compact. This means it goes through all of the objects and marks which objects are available for Garbage Collection, before clearing them out and then copying all of the objects into contiguous space (so therefore has no fragmentation).

Parallel GC

    Similar to Serial, except that it uses multiple threads to perform the GC so should be faster.

Concurrent Mark Sweep

    CMS GC minimises pauses by doing most of the GC related work concurrently with the processing of the application.  This minimises the amount of time when the application has to completely pause and so lends itself much better to applications which are sensitive to this. The CMS collector actually uses Parallel GC for the young generation.

G1GC (garbage first garbage collector)

    A concurrent parallel collector that is viewed as the long term replacement for CMS and does not suffer from the same fragmentation problems as CMS.

PermGen

    The PermGen is where the JVM stores the metadata about classes.  It no longer exists in Java 8, having been replaced with metaspace. Generally the PermGen doesn’t require any tuning above ensuring it has enough space, although it is possible to have leaks if Classes are not being unloaded properly.

Which is better? Serial, Parallel or CMS?

    It depends entirely on the application.  Each one is tailored to the requirements of the application. Serial is better if you’re on a single CPU, or in a scenario where there are more VMs running on the machine than CPUs.  Parallel is a throughput collector and really good if you have a lot of work to do but you’re ok with pauses.  CMS is the best of the three if you need consistent responsiveness with minimal pauses.

Can you tell the system to perform a garbage collection?

    This is an interesting question.  The answer is both yes and no.  We can use the call “System.gc()” to suggest to the JVM to perform a garbage collection. However, there is no guarantee this will do anything.There is even a startup flag, -XX:+DisableExplicitGC, which will stop this from doing anything.It is considered bad practice to use System.gc().

Java Interview Question: What does finalize() do?

    finalize() is a method on java.lang.Object so exists on all Objects.  The default implementation does nothing.  It is called by the garbage collector when it determines there are no more references to the object.  As a result there are no guarantees the code will ever be executed and so should not be used to execute actual functionality.  Instead it is used for clean up, such as file references.  It will never be called more than once on an object (by the JVM).

What's the difference between StackOverflowError and OutOfMemoryError

    Short answer:
    OutOfMemoryError is related to Heap.
    StackOverflowError is related to stack

    Long answer:
    When you start JVM you define how much RAM it can use for processing. JVM divides this into certain memory locations for its processing purpose, two of those are Stack & Heap

    If you have large objects (or) referenced objects in memory, then you will see OutofMemoryError. If you have strong references to objects, then GC can't clean the memory space allocated for that object. When JVM tries to allocate memory for new object and not enough space available it throws OutofMemoryError because it can't allocate the required amount of memory.

    How to avoid: Make sure un-necessary objects are available for GC

    All your local variables and methods calls related data will be on the stack. For every method call, one stack frame will be created and local as well as method call related data will be placed inside the stack frame. Once method execution is completed, the stack frame will be removed. ONE WAY to reproduce this is, have an infinite loop for method call, you will see stackoverflow error, because stack frame will be populated with method data for every call but it won't be freed (removed).

    How to avoid: Make sure method calls are ending (not in an infinite loop)

Types of References in Java

    Strong References
    Weak References
    Soft References
    Phantom References

    Strong References: This is the default type/class of Reference Object. Any object which has an active strong reference are not eligible for garbage collection. The object is garbage collected only when the variable which was strongly referenced points to null.

    Weak References: Weak Reference Objects are not the default type/class of Reference Object and they should be explicitly specified while using them.
    This type of reference is used in WeakHashMap to reference the entry objects .
    If JVM detects an object with only weak references (i.e. no strong or soft references linked to any object object), this object will be marked for garbage collection.
    To create such references java.lang.ref.WeakReference class is used.
    These references are used in real time applications while establishing a DBConnection which might be cleaned up by Garbage Collector when the application using the database gets closed.

    Soft References: In Soft reference, even if the object is free for garbage collection then also its not garbage collected, until JVM is in need of memory badly.The objects gets cleared from the memory when JVM runs out of memory.To create such references java.lang.ref.SoftReference class is used.

    Phantom References: The objects which are being referenced by phantom references are eligible for garbage collection. But, before removing them from the memory, JVM puts them in a queue called ‘reference queue’ . They are put in a reference queue after calling finalize() method on them.
