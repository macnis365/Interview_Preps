1.Where to use @Joincolumn?

    It is used to indicate that the current Entity is owner of the relationship

2.Where to use mappedBy?

    MappedBy signals hibernate that the key for the relationship is on the other side.(and used for bidirectional relationship)

3.Where to use @JoinTable?

      JoinTable is used with @ManyToMany association.
      And we used to declare intermidate table name, and reference keys.
      Ex @JoinTable(name="author_book", joinColumns=@JoinColumn(name="book_id"), inverseJoinColumns=@JoinColumn(name="author_id"))

4.	Types of ManyToMany

        1)Using @JoinTable
        2)Using @OneToMany and @ManyToONe.
        We use option 2 if we want extra columns in the intermediate table.

5.Difference b/w update and merge

    1)	Both are used to update the detached entity or used to convert the detached entity to persistence entity.
    2)	Merge() will create a copy of the passed entity and return it, the copied will be associated the session, so any further modification will be tracked on the copied entity.
    3)	Update() if we try to updated an entity which already exist in the session, update will throw error, but not in merge().

6.Difference b/w save and persist?

	1)Both is used to insert the record into the db
	2)Save will return id of the record, where as persist will not return any.
	3) save() it returns an identifier, and if an INSERT has to be executed to get the identifier (e.g. "identity" generator, not "sequence"), this INSERT happens immediately, no matter if you are inside or outside of a transaction. This is not good in a long-running conversation with an extended Session/persistence context.
	4)persist() also guarantees that it will not execute an INSERT statement if it is called outside of transaction boundaries
	5)It makes a transient instance persistent. However, it doesn't guarantee that the identifier value will be assigned to the persistent instance immediately, the assignment might happen at flush time

7.What is Cascade?

    1)	Cascading means that if you insert, update or delete an object, related objects are inserted, updated or deleted as well. If you do not use cascade you would have to save both objects independently. If you initially create objects and you do not cascade then you must save each object explicitly.
    Note we use cascade on parent side i.e, inverse side of the relationship.

8.Difference b/w orphanRemove and CascadeType.Remove

    1)When we remove parent entity, both will remove the child entities.
    2)For orphan removal: If you invoke setOrders(null), the related Order entities will be removed in db automatically.
    3)In cascade remove: If you invoke setOrders(null), the related Order entities will NOT be removed in db, but the relationship will be removed


9.What does session.refresh() do ?

    1)Used to synchronize the database records with session data
    2)Due to first level cache, if we try to load data using get() or load for the second time, hibernate wont query database. If the database record was updated or modified, this data won’t be present in the cache lead to data inconsistency, that the reason we use session.refersh().

10.Persistent Context

    1)Persistent Context is a run time memory area where Hibernate holds the references of objects and Session provides API to interact with the objects.
    2)At runtime whenever a session is opened and closed, between those open and close boundaries Hibernate maintains the object in a Persistence Context
    //Persistent Context 1 Starts
    Session session1 = HibernateUtil.getSessionFactory().openSession();
    Student studentA = (Student)session1.get(Student.class, studentId);
    Student studentB = (Student)session1.get(Student.class, studentId);

    if(studentA == studentB){
        System.out.println("Objects point to same refrence");
    }
    session1.close();
    //Persistent Context 1 Ends

11.What is the use of session.flush() in hibernate

    1)Used to synchronize session data with database.
    2)When we call flush (), the statements are executed into database but will not be committed until we call session.commit().
    3)Commit=flush+commit.
    4)In the batch processing we should use flush to save the data in chunks instead of saving the bulk data to avoid OutOfMemoryException.

12.When do you use native SQL query in hibernate.

    1)Used to execute database specific query which is not supported by hibernate.
    2)Ex: connect.
    3)SQLQuery object is used to execute native SQL query.

13.How to choose between HQL and Criteria?

    1)	HQL is used to execute static and complex query whereas Criteria is used to execute dynamic query.
    2)	HQL is faster than Criteria


14.Hibernate Proxies

    1)Proxies are created dynamically by subclassing your object at runtime. The subclass has all the methods of the parent, and when any of the methods are accessed, the proxy loads up the real object from the DB and calls the method for you.

15.Criteria APIs

    1)In Hibernate, the Criteria API helps us build criteria query objects dynamically. Criteria is a another technique of data retrieval apart from HQL and native SQL queries.
    2)The primary advantage of the Criteria API is that it is intuitively designed to manipulate data without using any hard-coded SQL statements. Programmatic behavior offers compile-time syntax checking; as a result, most error messages are delivered during compilation.
    3)We generally use a Session object to call the createCriteria() method and create a Criteria object.

16.Simple Criteria

    1)We can use the following code to create a criteria object. This criteria will return the list of suppliers available in the database.

    Criteria criteria=session.createCriteria(Supplier.class);
    List<Supplier> suppliers=criteria.list();
    Once this is run, we get a list of the Supplier instance. Then, we can loop through the list to get its details

17.Criteria with Restrictions

    1)we can add some restriction by using the static methods provided by the org.hibernate.criterion.Restrictions class. We can set one or more constraints to narrow down the result to a Criteria object with the add method

    Criteria c2 = session.createCriteria(Product.class);
    c2.add(Restrictions.like("name", "INC"));
    c2.add(Restrictions.like("description","%Transport%"));

    START: Matches the beginning of the string
    END: Matches the end of the string
    EXACT: Matches exactly the string
    ANYWHERE: Matches any part of the string
    Criteria c2 = session.createCriteria(Product.class);
    c2.add(Restrictions.ilike("description","incubator",
       MatchMode.END));

    a.	Restrictions.isNull()
    b.	Restrictions.isNotNull()
    c.	Restrictions.like()
    d.	Restrictions.ilike()
    e.	Restrictions.gt()
    f.	Restrictions.lt()
    g.	Restrictions.eq()
    h.	Restrictions.ne()
    i.	Restrictions.conjuction(Critertion….conditions)  (used for AND)
    j.	Restrictions.disjuntion(Critertion….conditions) (used for OR)

18.Forcefully initializing proxies in Hibernate

    1)Hibernate.initialize(parentEntity); // child entities will be loaded instead of proxies.
    2)This only ensures intialization of a proxy object or collection; it is not guaranteed that the elements INSIDE the collection will be initialized/materialized.

19.Locking in hibernate

    1)Locking refers to actions taken to prevent data in a relational database from changing between the time it is read and the time that it is used.

20.Types of Locking

    Your locking strategy can be either optimistic or pessimistic.
    1)Optimistic - Optimistic locking assumes that multiple transactions can complete without affecting each other, and that therefore transactions can proceed without locking the data resources that they affect. Before committing, each transaction verifies that no other transaction has modified its data. If the check reveals conflicting modifications, the committing transaction rolls back
    2)Pessimistic - Pessimistic locking assumes that concurrent transactions will conflict with each other, and requires resources to be locked after they are read and only unlocked after the application has finished using the data.

21.@GeneratedValue

    Here are the different options for strategy
    1)AUTO - Indicates that the persistence provider should pick an appropriate strategy for the particular database.
    2)IDENTITY - Indicates that the persistence provider must assign primary keys for the entity using database identity column.
    3)SEQUENCE - Indicates that the persistence provider must assign primary keys for the entity using database sequence column.
    4)TABLE - Indicates that the persistence provider must assign primary keys for the entity using an underlying database table to ensure uniqueness.

22.when to use detached criteria in hibernate?

    'Detached from session object'
    Detached Criteria may be used in two scenarios:
    1)	Building criteria query with no session object:
    Session only requires during executing the query/submitting the query to database, not while building the query.
    2)	Building same criteria query for multiple times:
    Build it once irrespective of the session object, and can be used whenever/wherever you want.
    Finally when session object is available, use the above query with session as follows:
    Ex:
        DetachedCriteria detachedCriteria =   DetachedCriteria.forClass(Department.class);
        detachedCriteria.add(Restrictions.eq("DEPTID", 1));
        ProjectionList projectionList = Projections.projectionList();
        projectionList.add(Projections.property("DEPTID"));
        detachedCriteria.setProjection(projectionList);

    detachedCriteria.getExecutableCriteria(session).list();
    
Inheritance in Hibernate

Background
	
	As we know Java is an object oriented language and hence it supports inheritance. In java inheritance, there can be IS-A or HAS-A relationship. But when we come to any relational model, it supports only HAS-A relationship. To overcome this mimmatch hibernate provides different inheritance strategy. There are basically 3 types of hibernate strategy as follows.

	1. Single Table Strategy

	2. Table Per Class Strategy

	3. Joined Table Strategy

	The parent entity Employee.java is being extended by 2 other entities PermanentEmployee.java and ContractEmployee.java

Hibernate Single Table Strategy
	
	In case of single table strategy, there is a single table created per inheritance hierachy. For example, we have Employee class being extended by 2 others classes but when it comes to single table strategy a single table will be created representing all the classes per inheritance hieracy and this table will contain all the data related to either Employee or ContractEmployee or PermanentEmployee.

	So, the question arises as if all the entries are made in a single table then how can we identify those rows from object perspective. For this, hbernate provides a Discriminator Type(DType) column which helps to differentiate between these records. 

Hibernate Table Per Class Strategy
	
	In case of table per class strategy, there are no. of tables created equivalent to exact no. of concrete entites defined in the inheritance hierachy.

Hibernate Joined Table Strategy

	In this strategy, all the entries in the DB will be created in one table that is corresponding table of parent entity and the tables corresponding to the child entities will have reference to it.

for more 
https://www.devglan.com/hibernate/hibernate-inheritance-example
