AXON-CQRS event sourcing

The Aggregate annotation is an Axon Spring specific annotation marking this class as an aggregate. 
It will notify the framework that the required CQRS and Event Sourcing specific building blocks need to be instantiated for this OrderAggregate.

As an aggregate will handle commands which are targeted for a specific aggregate instance, we need to specify the identifier with the AggregateIdentifier annotation.

Our aggregate will commence its life cycle upon handling the PlaceOrderCommand in the OrderAggregate ‘command handling constructor’. 
To tell the framework that the given function is able to handle commands, we’ll add the CommandHandler annotation.

When handling the PlaceOrderCommand, it will notify the rest of the application that an order was placed by publishing the OrderPlacedEvent. 
To publish an event from within an aggregate, we’ll use AggregateLifecycle#apply(Object…).

We start this off with the ‘aggregate creation event’, the OrderPlacedEvent, which is handled in an EventSourcingHandler annotated function to set the orderId and orderConfirmed state of the Order aggregate.
The signature of our command and event sourcing handlers simply states handle({the-command}) and on({the-event}) to maintain a concise format.

The CommandGateway is used as the mechanism to send our command messages, and the QueryGateway, in turn, to send query messages. 
The gateways provide a simpler, more straightforward API, compared to the CommandBus and QueryBus that they connect with.
