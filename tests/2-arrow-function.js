// const square = (x) => x * x;

// console.log(square(9));

const event = {
  name: 'Birthday Party',
  guestList: ['Moti', 'Anna', 'I have no  friend 👍'],
  printGuestList: function () {
    console.log(`Guest list for ${this.name}`);
    this.guestList.forEach((guest) =>
      console.log(`${guest} is attending to ${this.name}`)
    );
  },
};

event.printGuestList();
