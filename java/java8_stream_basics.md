Stream interface which relies on a new Java component, lambda expressions.

Lambda expressions make code more functional and less object-oriented, thus shortening its length.
old way
List<Toy> usedToys = findToys(toys,
     new Searchable() {
        public boolean test(Toy toy) {
           return toy.getType().equals(
                     ToyTypes.USED);
        }
});

using lamda expression
List<Toy> usedToys = findToys(toys,
     Toy toy ->
        toy.getType().equals(ToyTypes.USED);
		
The term lambda expression comes from lambda calculus, written as λ-calculus, where λ is the Greek letter lambda.
This form of calculus deals with defining and applying functions.

A lambda expression has three parts:

1. A list of parameters

A lambda expression can have zero (represented by empty parentheses), one or more parameters:
() -> System.out.println("Hi");
(String s) -> System.out.println(s);
(String s1, String s2) -> System.out.println(s1 + s2);

The type of the parameters can be declared explicitly, or it can be inferred from the context:
(s) -> System.out.println(s);
If there is a single parameter, the type is inferred and is not mandatory to use parentheses:

2. An arrow
Formed by the characters - and > to separate the parameters and the body.

3. A body
The body of the lambda expressions can contain one or more statements.
If the body has one statement, curly brackets are not required and the value of the expression (if any) is returned

The features of Java stream are –

A stream is not a data structure instead it takes input from the Collections, Arrays or I/O channels.
Streams don’t change the original data structure, they only provide the result as per the pipelined methods.
Each intermediate operation is lazily executed and returns a stream as a result, hence various intermediate operations can be pipelined. Terminal operations mark the end of the stream and return the result.

Different Operations On Streams-
Intermediate Operations:

map: The map method is used to map the items in the collection to other objects according to the Predicate passed as argument.
List number = Arrays.asList(2,3,4,5);
List square = number.stream().map(x->x*x).collect(Collectors.toList());
filter: The filter method is used to select elements as per the Predicate passed as argument.
List names = Arrays.asList("Reflection","Collection","Stream");
List result = names.stream().filter(s->s.startsWith("S")).collect(Collectors.toList());
sorted: The sorted method is used to sort the stream.
List names = Arrays.asList("Reflection","Collection","Stream");
List result = names.stream().sorted().collect(Collectors.toList());
