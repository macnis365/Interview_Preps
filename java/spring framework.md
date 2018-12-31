1.	Difference between IOC and DI in Spring?

        1)IOC(Inversion Of Controller):   Giving control to the container to get instance of object is called Inversion of Control., means instead of you are creating object using new operator, let the container do that for you.
        2)DI(Dependency Injection):  Way of injecting properties to an object is called Dependency injection.

            We have three types of Dependency injection
                1)  Constructor Injection
                2)  Setter/Getter Injection
                3)  Interface Injection
        Spring will support only Constructor Injection and Setter/Getter Injection.

2.	Advantages of Spring framework

        The advantages of Spring are as follows:
        1)Spring has layered architecture. Use what you need and leave you don't need now.
        2)Spring Enables POJO Programming. There is no behind the scene magic here. POJO programming enables continuous integration and testability.
        3)Dependency Injection and Inversion of Control Simplifies JDBC.
        4)Open source and no vendor lock-in.

3.	How does Request flow happens in Spring MVC?

        1) All requests arrive at the DispatcherServlet (Front Controller) - STEP 0
        2) DispatcherServlet resolves theme and locale as configured.
        3) Find’s appropriate Controller (Handler) to handle the request. (pre-processors and post-processors, if configured) (STEP 1)
        4) Redirect to the Controller (Handler) - STEP 2. Controller executes the request and returns a view name and a view model object. (STEP 3,4,5)
        5) DispatcherServlet resolves the view name and redirects to the view template. The response html is returned to DispatcherServlet. (STEP 6)
        6) DispatcherServlet send the response back to the browser. (STEP 7)

4.	What types of dependency injection is supported by Spring Framework? When do you use Setter and Constructor Injection, pros and cons?

        1)There are 2 types of dependency injection supported by Spring, constructor based injection and setter based injection. Both types have their own advantages and disadvantages, you should use Constructor injection when object's dependencies are not optional and they must be initialized with their dependencies. Also use constructor injection if order of initialization or dependency matters because in Setter based injection you cannot impose any order. Use setter injection when dependencies are optional.

5.	What is difference between ApplicationContext and BeanFactory in Spring framework?

        1)Actually they both are ways to get beans from your spring IOC container but still there are some difference.
        2)BeanFactory is the actual container which instantiates, configures, and manages a number of beans. These beans typically collaborate with one another, and thus have dependencies between themselves.
        Ex ClassPathResource myResource= new ClassPathResource("beans.xml"); XmlBeanFactory factory = new XmlBeanFactory(myResource);
        3)BeanFactory instantiate bean when you call getBean() method while ApplicationContext instantiate Singleton bean when container is started,  It doesn't wait for getBean() to be called.
        4)BeanFactory doesn't provide support for internationalization but ApplicationContext provides support for it.
        5)Another difference between BeanFactory vs ApplicationContext is ability to publish event to beans that are registered as listener.
        6)One of the popular implementation of BeanFactory interface is XMLBeanFactory while one of the popular implementation of ApplicationContext interface is ClassPathXmlApplicationContext.

6.	<context:annotation-config /> vs <context:component-scan>

        Spring allows you to do two things:
        1)	<context:annotation-config />
        annotation-config :  Annotation config main job is to activate all the annotations that are present in java beans and those are already registered either by defining in your application context file or being registered while component scanning. Important point is they need to be registered.
        2)	<context:component-scan>
        component-scan : Component scan can do everything that annotation config does , in addition to it it also registers the java classes as spring bean those are annotated with @Component , @Service ,@Repository etc.

        You just mark the specific beans with one of the following annotation and Spring will automatically wire the marked beans and their dependencies into the Spring container. The annotations are as follow: @Controller, @Service, @Component, @Repository. By using <context:component-scan> and pointing the base package, Spring will auto-discover and wire the components into Spring container.

7.	Can we have two handler with same value

        1)	No, throws IllegalStateException if there is a conflicting handler registered, while starting the application

8.	Can we have more than one DispatcherServlet in web application?

        1)	A web application can define any number of DispatcherServlets. Each servlet will operate in its own namespace, loading its own application context with mappings, handlers, etc
        2)	This implies that any beans that are loaded from the dispatcher servlet are only accessible in the scope of the Dispatcher servlet code. If there is any other servlet, it wont be able to access any of the beans. The only way to access the beans is :
        Only the root application context as loaded by ContextLoaderListener, if any, will be shared.

9.	ApplicationContext vs WebApplicationContext

        1)You're creating two ApplicationContexts: the root context and the DispatcherServlet context. The root context is created by the ContextLoaderListener based on the files named in the contextConfigLocation. This context is intended to contain the beans that compose the core logic of your app. The DispatcherServlet context is created when that servlet starts and is based on the file named "webapp-servlet.xml". This context is intended to contain any beans that support the DispatcherServlet instance that it's associated with and should only have view-related beans in it.

        2)The DispatcherServlet context becomes a child of the root context. That allows your core beans from the root context to be injected into the view-layer beans. Visibility is one-way. The view-layer beans aren't available to the core beans, which is desirable. This is why your DAO couldn't be injected into your authentication provider. The DAO was in the child context.

        Annotation-based services only apply within the context where they're declared. If @Autowired isn't working for a particular bean, it's because you haven't declared <context:component-scan/> or <context:annotation-config/> in the context where that bean exists.

3)	The below part loads the context file and create the ApplicationContext. This context might, for instance, contain components such as middle-tier transactional services, data access objects, or other objects that you might want to use (and re-use) across the application. There will be one application context per application.

        <context-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>
                /WEB-INF/spring/generalApplicationContext.xml
            </param-value>
        </context-param>

4)	The other context is the WebApplicationContext which is the child context of the application context. Each DispatcherServlet defined in a Spring web application will have an associated WebApplicationContext. The initialization of the WebApplicationContext happens like this:

        <servlet>
            <servlet-name>my-servlet</servlet-name>
            <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
            <init-param>
                <param-name>contextConfigLocation</param-name>
                <param-value>/WEB-INF/spring/specificApplicationContext.xml</param-value>
            </init-param>
            <load-on-startup>1</load-on-startup>
        </servlet>

10.	@Autowired and @Qualifier

        1)@Autowired can be used alone . If it is used alone , it will be wired by type . So problems arises if more than one bean of the same type are declared in the container as @Autowired does not know which beans to use to inject. As a result , use @Qualifier together with @Autowired to clarify which beans to be actually wired by specifying the bean name (wired by name)

        2)@Resource is wired by name too . So if @Autowired is used together with @Qualifier , it is the same as the @Resource.

11.	Limitation of Autowiring?

        1)Explicit dependencies in property and constructor-arg settings always override autowiring. You cannot autowire so-called simple properties such as primitives, Strings, and Classes (and arrays of such simple properties). This limitation is by-design.
        2)Autowiring is less exact than explicit wiring. Although, as noted in the above table, Spring is careful to avoid guessing in case of ambiguity that might have unexpected results, the relationships between your Spring-managed objects are no longer documented explicitly.

12.	Constructor-based or setter-based DI?

        1)Since you can mix constructor-based and setter-based DI, it is a good rule of thumb to use constructors for mandatory dependencies and setter methods or configuration methods for optional dependencies. Note that use of the @Required annotation on a setter method can be used to make the property a required dependency.

13.	SpringMVC Exception Handling

        1)Global Exception Handler - Exception Handling is a cross-cutting concern, it should be done for all the pointcuts in our application.  @ControllerAdvice annotation that we can use with any class to define our global exception handler.
        The handler methods in Global Controller Advice is same as Controller based exception handler methods and used when controller class is not able to handle the exception.

        2)Controller Base -  We can define exception handler methods in our controller classes. All we need is to annotate these methods with @ExceptionHandler annotation. This annotation takes Exception class as argument. So if we have defined one of these for Exception class, then all the exceptions thrown by our request handler method will have handled.
        These exception handler methods are just like other request handler methods and we can build error response and respond with different error page. We can also send JSON error response, that we will look later on in our example.

14.	Spring AOP Overview

        1)Most of the enterprise applications have some common crosscutting concerns that is applicable for different types of Objects and modules. Some of the common crosscutting concerns are logging, transaction management, data validation etc.
        2)Aspect Oriented Programming application modularity is achieved by Aspects and they are configured to cut across different classes.

15.	Spring AOP Core Concepts

        1)Aspect: An aspect is a class that implements enterprise application concerns that cut across multiple classes, such as transaction management. Aspects can be a normal class configured through Spring XML configuration or we can use Spring AspectJ integration to define a class as Aspect using @Aspect annotation.
        2)Join Point: A join point is the specific point in the application such as method execution, exception handling, changing object variable values etc. In Spring AOP a join points is always the execution of a method.
        3)Advice: Advices are actions taken for a particular join point. In terms of programming, they are methods that gets executed when a certain join point with matching pointcut is reached in the application
        4)Pointcut: Pointcut are expressions that is matched with join points to determine whether advice needs to be executed or not.
        5)Weaving: linking aspects with other application types or objects to create an advised object. This can be done at compile time (using the AspectJ compiler, for example), load time, or at runtime
        6)Wildcards used in pointcut expression are *, ..
        Ex  @Around( "execution( * com.tangoe.matrix.workflow.WorkflowServiceImpl.triggerWorkflow(..))" )

16.	AspectJ “around” and “proceed” with “before / after”

        @Aspect
        public class TestAspect {
            private static boolean runAround = true;

            public static void main(String[] args) {
                new TestAspect().hello();
                runAround = false;
                new TestAspect().hello();
            }

            public void hello() {
                System.err.println("in hello");
            }

            @After("execution(void aspects.TestAspect.hello())")
            public void afterHello(JoinPoint joinPoint) {
                System.err.println("after " + joinPoint);
            }

            @Around("execution(void aspects.TestAspect.hello())")
            public void aroundHello(ProceedingJoinPoint joinPoint) throws Throwable {
                System.err.println("in around before " + joinPoint);
                if (runAround) {
                    joinPoint.proceed();
                }
                System.err.println("in around after " + joinPoint);
            }

            @Before("execution(void aspects.TestAspect.hello())")
            public void beforeHello(JoinPoint joinPoint) {
                System.err.println("before " + joinPoint);
            }
        }

        Output:
        in around before execution(void aspects.TestAspect.hello())
        before execution(void aspects.TestAspect.hello())
        in hello
        after execution(void aspects.TestAspect.hello())
        in around after execution(void aspects.TestAspect.hello())
        in around before execution(void aspects.TestAspect.hello())
        in around after execution(void aspects.TestAspect.hello())

17.	Circular Dependecy in Spring

        1)The Spring container is able to resolve Setter-based circular dependencies but gives a runtime exception BeanCurrentlyInCreationException in case of Constructor-based circular dependencies.


SpringBoot

What is Spring Boot?

    Spring Boot is a opinionated framework for building and running Spring applications. It is not a framework for writing applications. One of the biggest challenge faced by the Spring developers is that amount of time they spent on configuring and bootstarting their spring applications.
    With growing number of frameworks with Spring community, it is necessary to have a common framework that solves the configurations. Spring Boot simply scan the classpath and add the required libraries from various repositories. This improves the productivity and saves lot of time for the developers.

What is the configuration file name used by Spring Boot?

    The configuration file used in spring boot projects is application.properties. This file is very important where we would over write all the default configurations. Normally we have to keep this file under the resources folder of the project.

What is DevTools in Spring Boot?

    Spring Boot has a Developer tools (DevTools) module which helps to improve the productivity of developers. One of the key challenge for the Java developers is to auto deploy the file changes to server and auto restart the server.
    This will eliminates the need for manually deploying the changes every time. Spring Boot doesn’t have this feature when it has released it’s first version. This was a most requested features for the developers. The module DevTools does exactly what is needed for the developers. This module will be disabled in the production environment.

What is Actuator in Spring Boot?

    Spring boot actuator is one of the important feature in spring boot framework. Spring boot actuator helps you to access the current state of the running application in production environment. There are several metrics that has to be checked and monitored in the production environment.
    Even some external applications may be using those services to trigger the alert message to concerned person. Actuator module exposes set of REST endpoints that can be directly accessed as a HTTP URL to check the status

