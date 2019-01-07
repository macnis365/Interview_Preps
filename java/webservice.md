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
