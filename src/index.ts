//  simple practice task for typescript basic

// 1. Convert the following JavaScript array into a TypeScript tuple
/* // const userInfo = [101, "Ema", "John", true, "2023"];
 const userInfo: Array<string | number | boolean> = [
  101,
  "Ema",
  "John",
  true,
  "2023",
];

console.log(userInfo); */

/* // 2.Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

const findCommon = (arr1: number[], arr2: number[]) => {
  let number1 = arr1;
  let number2 = arr2;
  const commonNum: number[] = [];
  for (const value of number1) {
    if (number2.includes(value)) {
      commonNum.push(value);
    }
  }
  return commonNum;
};

console.log(findCommon([1, 2, 3, 4, 5], [2, 4, 6, 8]));
 */

// 3.You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

function filterProducts<T>(
  products: T[],
  criterion: keyof T,
  value: T[keyof T]
): T[] {
  return products.filter((product) => product[criterion] === value);
}
const products: Product[] = [
  { id: 1, name: "Product 1", price: 10, category: "Category A" },
  { id: 2, name: "Product 2", price: 20, category: "Category B" },
  { id: 3, name: "Product 3", price: 30, category: "Category A" },
];

const filteredProducts = filterProducts(products, "category", "Category A");
console.log(filteredProducts);
