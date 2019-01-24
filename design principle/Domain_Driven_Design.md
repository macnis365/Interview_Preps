as a developer, Cultivate your ability to communicate effectively with business people

Interaction with sub domain
DDD divide and conqure,
Modeling is important in DD design.
Seperation of concern
focus on domain not on details
implement subdomains

Benefits of DDD

flexible
Customers vission/perseptive of the problem
Well organized and easily tested code
Business logic lives in one place
many great patterns

DDD is ment for complex domains, business domain complexity.

Drawbacks of DDD

Time and effort
discuss and model the problem with domain experts
isolate domain logic from other parts of application

Mind map of modeling - navigation map
model domain and subdomain (Core domain sepearted from sub domain)
bounded context - entity, value object etc.
Ubiquitous language, terms used to commonly when talk about particular subdomain

Onion Architecture?

Modeling Problems in Software?
Interacting with domain experts,
make notes on your understandings about the applications,
get a high level view of the modeling of the applications
ubiquotosu terms

Bounded Context (boundaries around model)

Let DDD guide you

sub domains and bounded contexts

Subdomain is a problem space concept
Bounded context is a solution space concept.

Context Maps (names are important)
context share resources

share kernel (ex authentication)

stumbling blocks with DDD
Not have clear context boundary

Ubiquitous language, shared common terms between programmers and domain experts, so no translation need, as meaning lost in translation

terms

Problem domain
The specific problem the software you are working on its trying to solve.

Core Domain
The key differentiators for the customers business something they must do well and cannot outsource.

Sub-Domain
Seperate features or applications your s/w must support or interact with.

Bounded Context
A specific responsibiltiy, with explicit boundaries that separate it from other parts of the system.

context mapping
Process of identifying bounded contexts and their relationships to one another

Shared kernel
Part of the model that is shared by two or more teams, who agree not to change it without collaboration

Ubiquitous Language
A language using terms from the domain model that programmers and domain experts use to discuss the system.

how to employee Modeling
Focus on Domain
Focus on Behaviors
Rich vs Anemic Domain Models
Entities
Associations
Value Objects
domain Services

1. Focus on Domain
Domain model is the heart of business software

2. Focus on Behaviors
How the system behavious

3. "Anemic" - considered as anti-pattern
Focus on state of the object

"Rich" use this domain model


Entitis in DDD and in our Bounded Context

Entities have identity and are mutable
Entities align with Single Responsibility principle

Identity and life cycle used for Entities creation
Entity might delegate logic to value objects or invoke a service
Entity should have Equality Comparers

Implementing Entites in code
Using Factory method to create Entities

Associations (relationships)
agregation vs composition

Value Objects
Measures, quantifies, or describes a thing in the domain
identity is based on composition of values(properties)
immutable
compared using all values
no side effects

String our favorite object
Money is a greate value object, Date
Value objects have methods and logic, this is better place than entities.
have logics in value object, easier to test value object compare to entities.

Domain Services

UI Layer and application layer
xml parsing , ui services

Domian Application core
Transfer between accounts,
process order

Infrastructure
send email
log to a file