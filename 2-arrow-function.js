// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x;

// console.log(square(3));

const event = {
  name: 'Birthday Party',
  guestList: ['Davin', 'Daven', 'Casely'],

  printGuestList() {
    console.log(`Guest list for ${this.name}`);
    console.log('-----------------');
    this.guestList.map((guest) =>
      console.log(`${guest} is attending ${this.name}`)
    );
  },
};

event.printGuestList();
