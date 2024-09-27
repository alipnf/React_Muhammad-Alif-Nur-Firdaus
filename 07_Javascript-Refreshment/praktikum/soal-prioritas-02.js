// 1. Async-Await
const simulasiFecthApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = { nama: "Alif", umur: 20 };
      resolve(person);
    }, 250);
  });
};

const fetchApi = async () => {
  try {
    const result = await simulasiFecthApi();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

fetchApi();

// 2. Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`halo nama saya ${this.name} umur saya ${this.age}`);
    // Kode kamu di sini
  }
}

const person1 = new Person("Alif", 20);
person1.introduce();
