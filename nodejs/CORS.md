In many applications, the front-end and the backend reside at a single point i.e. there might be many NodeJS applications which serve the front-end using ExpressJS with JADE/Handlebars or other frameworks. But sometimes you might want to host your front-end somewhere else to isolate your backend. Or you might want to allow multiple domains to access your NodeJS backend. In such cases you have to enable CORS.

Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources (e.g. fonts) on a web page to be requested from another domain outside the domain from which the resource originated.[1]
Long story short, CORS allows other domains to access your backend resources you want to expose and also the API/REST calls.
