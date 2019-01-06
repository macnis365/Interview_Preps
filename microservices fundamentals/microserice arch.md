Advantages of Microservices Architecture

	Independent Development	- All microservices can be easily developed based on their individual functionality
	Independent Deployment	- Based on their services, they can be individually deployed in any application
	Fault Isolation	- Even if one service of the application does not work, the system still continues to function
	Mixed Technology Stack	- Different languages and technologies can be used to build different services of the same application
	Granular Scaling	- Individual components can scale as per need, there is no need to scale all components together

What do you know about Microservices?

    Microservices, aka Microservice Architecture, is an architectural style that structures an application as a collection of small autonomous services, modeled around a business domain.

What are the features of Microservices?

    Decoupling – Services within a system are largely decoupled. So the application as a whole can be easily built, altered, and

    Business Capabilities – Microservices are very simple and focus on a single capability

    Autonomy – Developers and teams can work independently of each other, thus increasing speed

    Continous Delivery – Allows frequent releases of software, through systematic automation of software creation, testing, and approval

    Agility – Microservices support agile development. Any new feature can be quickly developed and discarded again

Monolithic Vs Mircoservices

    The choice between the two approaches depends on the context, and complexity of the application.

    Indeed microservices solves problems occurs in the large application from scaling, managing, but it’s not always the way to go.

    It is important to remember that microservices might be used in contexts where they are not meant to be used, resulting in extra effort and cost, project failures.

    Most of the problems in Microservices are inherited as a result of having a separate components.

    For example, communication between methods in monolithic is much faster when compared to services asycnrousns communications, which slower, harder to debug, and must be secured.

    ![alt text](https://cdn-images-1.medium.com/max/2000/1*Z8HUa8vdvIrF68crSJOPTQ.png)

Netflix Eureka Server

    It’s the naming server, or called service registry. It’s duty to give names to each microservice. Why?

    No need to hardcode the IP addresses of microservices.
    What if services use dynamic IP addresses; when autoscaling.
    So, every service registers itself with Eureka, and pings Eureka server to notify that it’s alive.

    If Eureka server didn’t receive any notification from a service. This service is unregistered from the Eureka server automatically.

Netflix Eureka Client

    The Eureka client service is an independent service in a microservice architecture. It could be for payment, account, notification, auth, config, etc.

    The Eureka client service can be also a REST client that calls (consumes) other services (REST API services) in our microservice application.

What’s load balancing?

    What if more than one instance of a service running on different ports. So, we need to balance the requests among all the instances of a service.
    When using ‘Ribbon’ approach (default), requests will be distributed equally among them.

Gateway Zuul

    When calling any service from the browser, we can’t call it by it’s name. This is used internally between services.

    And as we spin more instances of services, each with a different port numbers, So, now the question is: How can we call the services from the browser and distribute the requests among their instances running at different ports?

    Well, a common solution is to use a Gateway.

    A gateway is a single entry point into the system, used to handle requests by routing them to the corresponding service. It can also be used for authentication, monitoring, and more.

What’s Zuul?

    It’s a proxy, gateway, an intermediate layer between the users and your services.

    Eureka server solved the problem of giving names to services instead of hardcoding their IP addresses.

    But, still, we may have more than one service (instances) running on different ports.
    So, Zuul …

    Maps between a prefix path, say/gallery/** and a service gallery-service. It uses Eureka server to route the requested service.
    It load balances (using Ribbon) between instances of a service running on different ports.
    What else? We can filter requests, add authentication, etc.


Authentication Workflow

    The authentication flow is simple as:

    The user sends a request to get a token passing his credentials.
    The server validates the credentials and sends back a token.
    With every request, the user has to provide the token, and server will validate that token.

    JSON Based Token (JWT) is a JSON-based open standard for creating access tokens. It consists of three parts; header, payload, and signature.


Gateway

    In the gateway, we need to do two things:
    (1) validate tokens with every request, and
    (2) prevent all unauthenticated requests to our services. Fair enough?

Auth Service

    In the auth service, we need to
    (1) validate the user credentials, and if valid,
    (2) generate a token, otherwise, throw an exception.