Create a micro service that has a non-blocking IO (async) and is stateless (does not store shared data in memory or in a local file). Scale this API by creating many instances. Put a load balancer in front of the instances

Let me mention some of these general guidelines on scalability:

No single point of failure:
Have modular SOA acrchitecure.
Have a framework to measure performance of your website to guage improvements.
Load balancing
Caching - at browser, at CDN, local to a application server, global to application severs, distributed across servers.
No-sql DB - can it be used? which one to pick?
Optimizing relation DB - indexing, sharding, paritioning.
reverse-proxy
Asynch queuing - Kafka, SNS.