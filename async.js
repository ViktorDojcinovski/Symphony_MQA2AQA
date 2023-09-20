/*
The async/await syntax is a powerful addition to JavaScript for handling asynchronous operations. ​
*** async/await is a pair of keywords in JavaScript that simplifies the handling of Promises, 
*** making asynchronous code appear more synchronous and readable.​

*** ​It enhances the readability and maintainability of asynchronous code 
*** by eliminating callback nesting and making error handling straightforward.
*/

/* Example of an asynchronous function using async/await */
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}
