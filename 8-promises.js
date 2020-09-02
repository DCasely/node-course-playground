const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([7, 4, 1]);
    reject('REJECT WAS CALLED');
    // reject('New Error'); You can't call it twice
    resolve([3, 2, 1]); // Will not run if reject is called first
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log(`RESOLVED: ${result}`);
  })
  .catch((error) => {
    console.log(`REJECTED: ${error}`);
  });

//
//                                resolved
//                              /
// Promise      -- pending -->
//                              \
//                                rejected
//
