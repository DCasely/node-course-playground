// setTimeout(() => {
//   console.log('Three seconds are up');
// }, 3000);

// const names = ['Davin', 'Casely', 'Elvis'];
// const shortNames = names.filter((name) => name.length <= 5);

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };

//     callback(data);
//   }, 3000);
// };

// geocode('Miami', (data) => {
//   console.log(data);
// });

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (x, y, getSum) => {
//   setTimeout(() => {
//     const sum = x + y;

//     getSum(sum);
//   }, 2000);
// };

// add(1, 7, (sum) => {
//   console.log(sum); // Should print: 8
// });

const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback('This is my error!', undefined);
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(`This is the error: ${error}`);
  }

  console.log(`This is the result: ${result}.`);
});
