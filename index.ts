// Problem-1
function formatString(input: string, toUpper?: boolean): string {
  const result = toUpper === false ? input.toLowerCase() : input.toUpperCase();
  return result;
}

const answer1 = formatString("Hello");
const answer2 = formatString("Hello", true);
const answer3 = formatString("Hello", false);
// console.log(answer1);
// console.log(answer2);
// console.log(answer3);

// Problem-2
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

// Problem-3
function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const array of arrays) {
    result.push(...array);
  }
  return result;
}

const answer5 = concatenateArrays(["a", "b"], ["c"]);
console.log(answer5);
