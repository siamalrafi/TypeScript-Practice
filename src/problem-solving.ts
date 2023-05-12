/* // 1.Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

function takeArray(numbers: number[]): number {
   let sum = 0;
   for (let num of numbers) {
      sum += num;
   }

   return sum;
}

const SUM = (arr: number[]): number => {
   return arr.reduce((a, b) => a + b);
};

const numberArray: number[] = [1, 2, 3, 34, 4, 5, 67, 7, 7, 7, 7];

console.log(takeArray(numberArray));
console.log(SUM(numberArray));
 */

/* // 2.Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

interface Person {
   name: string;
   age: number;
   email: string;
}

const person: Person = { name: "Rabbi", age: 23, email: "email@gmail.com" };
console.log(person); */

/* // 3.Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.

const lengthArea: number = 5;
const widthArea: number = 10;

const calculateArea = (lengthArea: number, widthArea: number): number => {
   return lengthArea * widthArea;
};
console.log(calculateArea(lengthArea, widthArea)); // Output: 50
 */

/* // 4.Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

function reverseArray<T>(arr: T[]): T[] {
   return arr.reverse();
}

const numbersArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ["1", "2", "3", "4", "5"];
const booleanArray: boolean[] = [false, false, true, true];

console.log(reverseArray(numbersArray));
console.log(reverseArray(stringArray));
console.log(reverseArray(booleanArray)); */

/* // 5.Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.

interface Repository<T> {
   getAll(): T[];
   getById(id: number): T | undefined;
   create(item: T): void;
   update(item: T): void;
   delete(id: number): void;
}

class GenericRepository<T> implements Repository<T> {
   private items: T[];

   constructor() {
      this.items = [];
   }

   getAll(): T[] {
      return this.items;
   }

   getById(id: number): T | undefined {
      return this.items.find((item: any) => item.id === id);
   }

   create(item: T): void {
      this.items.push(item);
   }

   update(item: T): void {
      const index = this.items.findIndex((existingItem: any) => existingItem.i === item.id);
      if (index !== -1) {
         this.items[index] = item;
      }
   }

   delete(id: number): void {
      const index = this.items.findIndex((item: any) => item.id === id);
      if (index !== -1) {
         this.items.splice(index, 1);
      }
   }
}

// Example usage
interface User {
   id: number;
   name: string;
   age: number;
}

const userRepository = new GenericRepository<User>();

userRepository.create({ id: 1, name: "John Doe", age: 25 });
userRepository.create({ id: 2, name: "Jane Smith", age: 30 });

const allUsers = userRepository.getAll();
console.log(allUsers);

const user = userRepository.getById(1);
console.log(user);
userRepository.update({ id: 1, name: "John Doe", age: 26 });
userRepository.delete(2);
 */







