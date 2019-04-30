Event Sourcing persists domain objects as a sequences of events.

  Application events (aka transactional outbox) uses a database table as a way to publish events as part of a database transaction.

  These domain events can be usually mapped to aggregates. In other words, aggregates can be thought of as entities. 
  Domain events basically change the state of the aggregate in some way. 
  These events can be then be modeled as real events in your application using Event Sourcing pattern.

Why ES

  Event Sourcing is one of the best ways to atomically update state and publish an event. 
  As we saw, the traditional way is to persist the current state of the aggregate. 
  However, in Event Sourcing the aggregate is stored as a sequence of events. 
  Basically, for every state change a new event is created and added to the event store. Such an operation is inherently atomic.
  Using Event Sourcing, you get extremely accurate audit logging for free

Another major advantage is the ability to run temporal queries. 
  Event Store maintains a complete history of the aggregate. 
  This makes it extremely easy to reconstruct the historical state of the object. 
  In other words, the event store acts like a time machine of sorts. 
  In case of any production issues, you can reconstruct the state of the object at the time of issue to investigate.

  For instance, even in our small example of Account, we can clearly see the sequence of events occurring on the account. 
  However, indirectly we are seeing the events occurring in the life of a customer. 
  You can probably guess the kind of insights this can provide to the business in the long run. 
  Apply the same on a million customers and an important aggregate in your business context and you could potentially have a huge factor in your business decisions.




Saga Pattern

  Saga Pattern is a direct result of Database-per-service pattern. 
  In Database-per-service pattern, each service has its own database. 
  In other words, each service is responsible only for its own data.

  This arise problem, Some business transactions require data from multiple services. 
  Such transactions may also need to update or process data across services. 
  Therefore, a mechanism to handle data consistency across multiple services is required.
  This situation or use-case forms the basis of the Saga Pattern.

  Axon Framework is a microservices framework that makes it easy to build distributed systems. 
  It provides great support for Spring Boot and we will be using the same to build a sample application.

Defining the Saga Pattern
  Saga Pattern proposes implementing distributed transactions in the form of Sagas.
  A Saga is nothing but a sequence of local transactions. These local transactions are occurring at the service level. 
  Whenever a local transaction occurs, it publishes a message or an event. 
  Such an event is responsible for triggering the next transaction in the Saga.

  But then, you might ask what happens when a single transaction in the Saga sequence fails?
  In that case, the Saga executes a series of compensating transactions. 
  These transactions basically undo the changes made by the preceding transactions.

There are basically two types of Saga
  Choreography-Based  - each service publishes one or more domain events. These domain events trigger local transactions in other microservices.
  Orchestration-Based Saga - can be thought of as a manager that directs the participant services to execute local transactions.
