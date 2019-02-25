1. What is Node.js? Where can you use it?

	Node.js is a server side scripting based on Google’s V8 JavaScript engine. It is used to build scalable programs especially web applications that are computationally simple but are frequently accessed.

3. What are the features of Node.js?

	Node.js is a single-threaded but highly scalable system that utilizes JavaScript as its scripting language. 
	It uses asynchronous, event-driven I/O instead of separate processes or threads. 
	It is able to achieve high output via single-threaded event loop and non-blocking I/O.
	
4. Synchronous and Asychronous

	JavaScript code is executed in an event loop, on a single thread. The reality is that all JavaScript executes synchronously - it's the event loop that allows you to queue up an action that won't take place until the loop is available some time after the code that queued the action has finished executing. So code is said to execute asynchronoulsy when it is queued to run sometime after the event loop is available.

	To understand the difference between synchronous and asynchronous lets write some code which does it both in synchronous and asynchronous way.

	response = request.get 'http://www.google.co.in'
	print response


	The above code is a pseudo code in some language. This is how control flows.
	The execution path is easy to follow:The get method is executed and the thread of execution waits until a response is received.
	The response is received from Google and returned to the caller where it’s stored in a variable.
	The value of the variable (in this case, our response) is output to the console
	request('http://www.google.co.in', function(error, response, body) {
	  console.log(body);
	});
	console.log('Done!');

	The above code is in JavaScript. This is how control flows.
	The request function is executed, passing an anonymous function as a callback to execute when a response is available sometime in the future.
	“Done!” is immediately output to the console.
	Sometime in the future, the response comes back and our callback is executed, outputting its body to the console
	
5. Explain callback in Node.js.

	A callback function is called at the completion of a given task. This allows other code to be run in the meantime and prevents any blocking.  Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks. 
	
6. What is callback hell in Node.js?

	Callback hell is the result of heavily nested callbacks that make the code not only unreadable but also difficult to maintain.
	
	query("SELECT clientId FROM clients WHERE clientName='picanteverde';", function(id){
	query("SELECT * FROM transactions WHERE clientId=" + id, function(transactions){
    transactions.each(function(transac){
      query("UPDATE transactions SET value = " + (transac.value*0.1) + " WHERE id=" + transac.id, function(error){
        if(!error){
          console.log("success!!");
        }else{
          console.log("error");
        }
      });
    });
  });
});

7. How do you prevent/fix callback hell?

	The three ways to prevent/fix callback hell are:

	Handle every single error
	Keep your code shallow
	Modularize – split the callbacks into smaller, independent functions that can be called with some parameters then joining them to achieve desired results.
	You can also use Promises, Generators and Async functions to fix callback hell
	
	The first level of improving the code above might be:

	var logError = function(error){
		if(!error){
		  console.log("success!!");
		}else{
		  console.log("error");
		}
	  },
	  updateTransaction = function(t){
		query("UPDATE transactions SET value = " + (t.value*0.1) + " WHERE id=" + t.id, logError);
	  },
	  handleTransactions = function(transactions){
		transactions.each(updateTransaction);
	  },
	  handleClient = function(id){
		query("SELECT * FROM transactions WHERE clientId=" + id, handleTransactions);
	  };

	query("SELECT clientId FROM clients WHERE clientName='picanteverde';",handleClient);
	
8. Explain the role of REPL in Node.js.

	As the name suggests, REPL (Read Eval print Loop) performs the tasks of – Read, Evaluate, Print and Loop. 
	The REPL in Node.js is used to execute ad-hoc Javascript statements. 
	The REPL shell allows entry to javascript directly into a shell prompt and evaluates the results.
	For the purpose of testing, debugging, or experimenting, REPL is very critical.  
	
9. Name the types of API functions in Node.js.

	There are two types of functions in Node.js.:

	Blocking functions - In a blocking operation, all other code is blocked from executing until an I/O event that is being waited on occurs. 
	Blocking functions execute synchronously
	For example:
	const fs = require('fs');
	const data = fs.readFileSync('/file.md'); // blocks here until file is read
	console.log(data);
	// moreWork(); will run after console.log

	The second line of code blocks the execution of additional JavaScript until the entire file is read. moreWork () will only be called after Console.log

	Non-blocking functions - In a non-blocking operation, multiple I/O calls can be performed without the execution of the program being halted. 
	Non-blocking functions execute asynchronously. 
	
	For example:

	const fs = require('fs');
	fs.readFile('/file.md', (err, data) => {
	  if (err) throw err;
	  console.log(data);
	});
	// moreWork(); will run before console.log

	Since fs.readFile () is non-blocking, moreWork () does not have to wait for the file read to complete before being called. 
	This allows for higher throughput. 
	
10. Which is the first argument typically passed to a Node.js callback handler?

	Typically, the first argument to any callback handler is an optional error object. The argument is null or undefined if there is no error. 

	Error handling by a typical callback handler could be as follows:

	function callback(err, results) {
		// usually we'll check for the error before handling results
		if(err) {
			// handle error somehow and return
		}
		// no error, perform standard callback handling
	}
	
11. What are the functionalities of NPM in Node.js?

	NPM (Node package Manager) provides two functionalities:

	Online repository for Node.js packages
	Command line utility for installing packages, version management and dependency management of Node.js packages
	
12. What is the difference between Node.js and Ajax?

	Node.js and Ajax (Asynchronous JavaScript and XML) are the advanced implementation of JavaScript. They all serve completely different purposes.  

	Ajax is primarily designed for dynamically updating a particular section of a page’s content, without having to update the entire page. 

	Node.js is used for developing client-server applications.
	
13. Explain chaining in Node.js.

	Chaining is a mechanism whereby the output of one stream is connected to another stream creating a chain of multiple stream operations. 
	
14. What are “streams” in Node.js? Explain the different types of streams present in Node.js.

	Streams are objects that allow reading of data from the source and writing of data to the destination as a continuous process.

	There are four types of streams.

	to facilitate the reading operation
	to facilitate the writing operation
	to facilitate both read and write operations
	is a form of Duplex stream that performs computations based on the available input 
	
15. What are exit codes in Node.js? List some exit codes. 

	Exit codes are specific codes that are used to end a “process” (a global object used to represent a node process). 

	Examples of exit codes include:

	Unused
	Uncaught Fatal Exception
	Fatal Error
	Non-function Internal Exception Handler
	Internal Exception handler Run-Time Failure
	Internal JavaScript Evaluation Failure
	
16. What are Globals in Node.js?

	Three keywords in Node.js constitute as Globals. These are:

	Global – it represents the Global namespace object and acts as a container for all other objects.
	Process – It is one of the global objects but can turn a synchronous function into an async callback. It can be accessed from anywhere in the code and it primarily gives back information about the application or the environment. 
	Buffer – it is a class in Node.js to handle binary data. 
