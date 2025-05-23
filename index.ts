function formatString(input: string, toUpper?: boolean): string {
  const result = toUpper === false ? input.toLowerCase() : input.toUpperCase();
  return result;
}

const answer1 = formatString("Hello");
const answer2 = formatString("Hello", true);
const answer3 = formatString("Hello", false);
console.log(answer1);
console.log(answer2);
console.log(answer3);

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredItems = items.filter((item) => item.rating > 4);
  return filteredItems;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
const answer4 = filterByRating(books);
console.log(answer4);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const array of arrays) {
    result.push(...array);
  }
  return result;
}

const answer5 = concatenateArrays(["a", "b"], ["c"]);
console.log(answer5);

class Vehicle {
  private _make: string;
  private _year: number;

  constructor(make: string, year: number) {
    this._make = make;
    this._year = year;
  }

  getInfo(): string {
    return `Make: ${this._make}, Year: ${this._year}`;
  }
}

class Car extends Vehicle {
  private _model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this._model = model;
  }
  getModel(): string {
    return `Model: ${this._model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());

function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

const answer6 = processValue("Hello");
const answer7 = processValue(10);
console.log(answer6);
console.log(answer7);

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  let mostExpensive = products[0];

  for (const product of products) {
    if (product.price > mostExpensive.price) {
      mostExpensive = product;
    }
  }
  return mostExpensive;
}
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

const answer8 = getMostExpensiveProduct(products);
console.log(answer8);

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Friday:
      return "Weekend";
    case Day.Saturday:
      return "Weekend";

    default:
      return "Weekday";
  }
}

const answer9 = getDayType(Day.Monday);
console.log(answer9);
const answer10 = getDayType(Day.Saturday);
console.log(answer10);

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);

    if (n < 0) {
      reject("Error: Negative number not allowed");
    }
  });
}

squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
