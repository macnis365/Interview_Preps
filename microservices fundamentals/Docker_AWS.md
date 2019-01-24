Continuous Delivery,

Why CD(production ready code)

about delivery businees value as freqeuent - fast release and small realease
- MVP minimum viable product
- fast feed back from user, smater products
- reduce risk (easier to deploy and fix)

How to achieve CD

Methodology is required

application agnostic 
portability
separation of concern

Automation is fundamental of CD
tests, creating environment, deploying etc..

everybody is accountable in CD.

Why Docker

Speed - fastest way posible isolated consistant & repeatable environment 

portability - immutable environment and independent of underlying os/ hardware
and packages and distribution capabilites

Pro Deployement -  docker simplifies requirements of your underlying host infra. orchestrate the creation of your supporting infra, diverse and unique
runtime environment captured in docker images

Automate - Docker images are cerated from specification called Dockerfile, which is used automate creation of docker image.

Docker compose - multi container envi, which creates and destoried container by single command


CD Workflow
1. Test (unit and integration testing, use docker to wrap test runners)
2. Build (buid app artifacts, Java JAR files, deployable artifact)
3. Release (build docker release image, includes minima runtime environ, install application artifacts(production like environment), tag and publis release image)
4. Deploy - Deploy release image to at least one environemt (dev or QA or staging environemtn)

Docker workflow
Create Test Environment
base image, develpment image, and docker compose 
Run Unit Tests - single container, integration test(may be multi container)


Docker image hierarchy
Base image (for each app) - must establish minimum runtime environment
application dependency, system configuration, default settings

Release image (is child of base image)
install application
application configuration
application entrypoint

Development image (child of base image)
install dev dependencis
install test/build tools

GitHub and DockerHub infr for CD

Docker repositories

Configure workflow in Jenkins
Pipeline script groovy

AWS VPC infra
creating cloundformation template
EC2 instances (compute resources)
Security Group
Instance profile
ECS cluster
Elastic load balancer

EC2 instances



cd pipeline in jenkins continuos pipeline system