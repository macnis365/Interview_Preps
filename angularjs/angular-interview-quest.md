Provide clear difference with some proper example of code snippet between “declarations”, “providers”, and “imports” in ng module for angular 6?

  a. Declarations: This is one of the key features of Angular for available varieties components or pipes of a single directive for the current module to other directives of the current module. If someone willing to use some same declare component in the current module from other directives then declaration should need to be done properly.
  b. Imports: Helping of availability of other module components in a current module by importing the same.
  c. Providers: It is helping DI for identifying and understanding of using services and values.

Difference between Constructor and ngInit?

  Constructor: Constructor is one of the default declarations for any specific class or object, it can be called every time when any class instantiated, also ensuring initialization properly of their subclasses and different instance variable fields.

  Ngonint: It is one of the first initialize method used by Angular, mention in the first component of an angular life cycle. It mainly indicates that angular has been completed of creating entire require components properly. It is not mandatory to use but best practice to use.

Render2 in Angular 6?

AOT Compiler?
  
  AOT stands for ahead of time. It is using by the angular for precompiling all the angular components and available templates at the time of build process.

One of the very popular keys using in Angular that is Zone, explain the same in details?

  ngZone is nothing but one of the wrappers of the JS file called Zone.js. This is one of the key libraries which is used for creating some context on using varieties asynchronous functions to make them trackable properly. Angular always dependent on zones for detect changing.

Angular JS developer is sometimes planning to use Lazy loading modules frequently?
 
  Somehow developer needs some feature module load lazily, then they can easily use one of the key property called loadChildren in the route configuration of Angular JS.
  utility of using lazyload:
  An expected module will be loaded based on the demand of the application.
  And application start will always be faster than usual.

Explain in details about the lifecycle designed for directive and components in Angular JS especially for the newly introduced version 6.0?

  Below lifecycle normally followed by the components and directive of Angular JS:

  Constructor
  ngOnChanges
  nhOnInit
  ngDoCheck
  ngOnDestroy
  ngAfterContentInit (only for components)
  ngAfterContentChecked (only for components)
  ngAfterViewInit (only for components)
  ngAfterViewChecked (only for components)
