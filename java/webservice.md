1.WebService

    1)Web service is a way of communication that allows interoperability between different applications on different platforms

2.What is REST?(REpresentational state transfer)

    1)In the REST architecture style, clients and servers exchange representations of resources by using a standardized interface and protocol. REST isn't protocol specific, but when people talk about REST they usually mean REST over HTTP.

3.What are HTTP methods that can be used in Restful web services?

    RESTful web services use HTTP protocol methods for the operations they perform.
    Some important Methods are:
    1)GET : It defines a reading access of the resource without side-effects.This operation is idempotent i.e.they can be applied multiple times without changing the result
    2)PUT : It is generally used for updating resource. It must also be idempotent.
    3)DELETE : It removes the resources. The operations are idempotent i.e. they can get repeated without leading to different results.
    4)POST : It is used for creating a new resource. It is not idempotent.

4.What do you mean by Idempotent and which HTTP methods are idempotent?

    1)Idempotent means result of multiple successful request will not change state of resource after initial application
    2)For example : Delete is idempotent method because when you first time use delete, it will delete the resource (initial application) but after that, all other request will have no result because resource is already deleted. Get, put and delete are HTTP Idempotent methods.

5.What are differences between Post and Put Http methods?

    1)POST :It is used for creating a new resource. It is not idempotent.
    2)PUT : It is generally used for updating resource. It is idempotent.
    3)Idempotent means result of multiple successful request will not change state of resource after initial application



6.What are some important annotations which you use to create Restful web services?

    1)@Path : This is used to set path for URI at class level or method level
    2)@GET,@POST,@PUT,@DELETE  : There are annotations corresponds to HTTP methods
    3)@Produces(MediaType.TEXT_XML [, more-types ]): @Produces defines which MIME type is delivered by a method
    4)@PathParam: Used to inject values from the URL into a method parameter.
    5)@Consumes(MediaType. APPLICATION_JSON) : @Cosumes defines which MIME type will be consumed by the method .
    6)@QueryParam, @HeaderParam, @FormParam

REST, 

    or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. 

SEPARATION OF CLIENT AND SERVER

    In the REST architectural style, the implementation of the client and the implementation of the server can be done independently without each knowing about the other. This means that the code on the client side can be changed at any time without affecting the operation of the server, and the code on the server side can be changed without affecting the operation of the client.
    As long as each side knows what format of messages to send to the other, they can be kept modular and separate.

STATELESSNESS

    Systems that follow the REST paradigm are stateless, meaning that the server does not need to know anything about what state the client is in and vice versa.

COMMUNICATION BETWEEN CLIENT AND SERVER

    In the REST architecture, clients send requests to retrieve or modify resources, and servers send responses to these requests.
    A request generally consists of:
    an HTTP verb, which defines what kind of operation to perform
    a header, which allows the client to pass along information about the request
    a path to a resource
    an optional message body containing data

HTTP VERBS

    There are 4 basic HTTP verbs we use in requests to interact with resources in a REST system:
    GET — retrieve a specific resource (by id) or a collection of resources
    POST — create a new resource
    PUT — update a specific resource (by id)
    DELETE — remove a specific resource by id

RESPONSE CODES
    
    Responses from the server contain status codes to alert the client to information about the success of the operation.
    200 (OK)	This is the standard response for successful HTTP requests.
    201 (CREATED)	This is the standard response for an HTTP request that resulted in an item being successfully created.
    204 (NO CONTENT)	This is the standard response for successful HTTP requests, where nothing is being returned in the response body.
    400 (BAD REQUEST)	The request cannot be processed because of bad request syntax, excessive size, or another client error.
    403 (FORBIDDEN)	The client does not have permission to access this resource.
    404 (NOT FOUND)	The resource could not be found at this time. It is possible it was deleted, or does not exist yet.
    500 (INTERNAL SERVER ERROR)	The generic answer for an unexpected failure if there is no more specific information available.
