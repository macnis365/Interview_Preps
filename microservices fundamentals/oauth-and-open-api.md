Open api 

OAuth 2.0 defines a protocol, i.e. specifies how tokens are transferred, JWT defines a token format.

OAuth 2.0 and "JWT authentication" have similar appearance when it comes to the (2nd) stage where the Client presents the token to the Resource Server: the token is passed in a header.

But "JWT authentication" is not a standard and does not specify how the Client obtains the token in the first place (the 1st stage). That is where the perceived complexity of OAuth comes from: it also defines various ways in which the Client can obtain an access token from something that is called an Authorization Server.

So the real difference is that JWT is just a token format, OAuth 2.0 is a protocol (that may use a JWT as a token format).

OAuth2.0 - The goal remains always the same: to obtain an access_token and use it to access protected resources.
<!https://itnext.io/an-oauth-2-0-introduction-for-beginners-6e386b19f7a9>



This project is based on the api Java stack, which intensively uses spring-boot and spring-cloud frameworks which means it is highly opinionated.

Under the hood, components from the Netflix OSS stack are used, Ribbon for client side load balancing Hystrix as a circuit breaker, Feign as an http client ...etc.and Consul.io for service discovery.


Open Banking API

  Subscribe to one or more digital products, each of which is a set of APIs grouped based on the consumption need of the third-party developer

  Obtain app credentials that include a client ID and secret for each app

  Use the app credentials to authenticate
