/**
 * Promises have three states:​
    *** Pending: Initial state, neither fulfilled nor rejected.​
    *** Fulfilled: The operation completed successfully, and a result is available.​
    *** Rejected: The operation encountered an error or was unsuccessful.​

    Moreover, Promises can be chained together, allowing you to sequence asynchronous operations.
 */

/* Create a Promise that starts in the 'Pending' state */
const pendingPromise = new Promise((resolve, reject) => {
  // Simulate an async operation
  setTimeout(() => {
    // In this example, we don't explicitly call resolve or reject
    // The Promise remains in the 'Pending' state
  }, 2000); // Simulate a 2-second delay
});

console.log("Promise in 'Pending' state:", pendingPromise);

/* Create a Promise that resolves with a result */
const fulfilledPromise = new Promise((resolve, reject) => {
  // Simulate a successful async operation
  setTimeout(() => {
    const result = "Operation successful!";
    resolve(result); // Resolve the Promise with the result
  }, 2000); // Simulate a 2-second delay
});

fulfilledPromise.then((result) => {
  console.log("Promise Fulfilled:", result);
});

/* Create a Promise that rejects with an error */
const rejectedPromise = new Promise((resolve, reject) => {
  // Simulate a failed async operation
  setTimeout(() => {
    const error = new Error("Operation failed!");
    reject(error); // Reject the Promise with an error
  }, 2000); // Simulate a 2-second delay
});

rejectedPromise.catch((error) => {
  console.error("Promise Rejected:", error.message);
});
