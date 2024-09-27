// 1. Variabel dan Tipe Data
function swapValues(a, b) {
  console.log(`value pertama, a = ${a}, b = ${b}`);

  let temp = a;
  a = b;
  b = temp;

  console.log(`a = ${a}, b = ${b}`);
}
swapValues(5, 10);

// 2. Destructuring
const reverseFirstTwo = ([a, b]) => {
  console.log(`value pertama, a = ${a}, b = ${b}`);
  [a, b] = [b, a];
  console.log(`a = ${a}, b = ${b}`);
};
reverseFirstTwo([10, 5]);

// 3. Alur Kontrol (Control Flow)
function findLargest(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  console.log("array", arr);
  console.log("elemen terbesar:", largest);
}
findLargest([1, 29, 93, 4, 5, 61, 7, 8, 9, 10, 111]);

// 4. Method
const calculator = {
  add: function (a, b) {
    const result = a + b;
    console.log(`${a} + ${b} = ${result}`);
    return result;
  },

  subtract: function (a, b) {
    const result = a - b;
    console.log(`${a} - ${b} = ${result}`);
    return result;
  },

  multiply: function (a, b) {
    const result = a * b;
    console.log(`${a} * ${b} = ${result}`);
    return result;
  },

  divide: function (a, b) {
    const result = a / b;
    console.log(`${a} / ${b} = ${result}`);
    return result;
  },
};
calculator.add(10, 5);
calculator.subtract(10, 5);
calculator.multiply(10, 5);
calculator.divide(10, 5);
calculator.divide(10, 2);

// 5. Fungsi
function greetUser(name) {
  console.log(`selamat malam ${name}`);
}

const greetUserArrow = (name) => {
  console.log(`selamat malam ${name}`);
};
greetUser("alif");
greetUser("jamal");
