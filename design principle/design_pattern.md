Bill Pugh suggested a concept of inner static classes to use for singleton.

    When the singleton class is loaded, inner class is not loaded and hence doesn’t create object when loading the class.
    It's thread-safe because the JVM handles lazily loading the nested class.


    // Java code for Bill Pugh Singleton Implementaion 
    public class GFG 
    { 

    private GFG() 
    { 
      // private constructor 
    } 

    // Inner class to provide instance of class 
    private static class BillPughSingleton 
    { 
      private static final GFG INSTANCE = new GFG(); 
    } 

    public static GFG getInstance() 
    { 
      return BillPughSingleton.INSTANCE; 
    } 
    } 
