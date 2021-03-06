// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];
// prettier-ignore
const people = ['Beethoven, Ludwig', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beck, Glenn', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// let bornDate = inventors.filter((x) => x.year > 1499 && x.year < 1600);

// console.table(bornDate);

// const fifteen = inventors.filter(function (inventor) {
//   if (inventor.year >= 1500 && inventor.year < 1600) {
//     return true;
//     {
//     }
//   }
// });
// console.table(fifteen)

//The filter function - does what it says on the tin - it filters out the objects in the array that does not match our conditions.

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

// let firstLast = inventors.map((x) => x.first + " " + x.last);

// console.log(firstLast);

// const fullNames = inventors.map(
//   (inventor) => `${inventor.first} ${inventor.last}`
// );

// console.log(fullNames)

//The map function - goes thru the array and takes out the values from that correcpondes to our conditions and creates a new array with these values.

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// let birthOldYoung = inventors.sort((a, b) => a.year - b.year);

// console.table(birthOldYoung);

// const ordered = inventors.sort(function (a, b) {
//   console.log(a.year + " a.year");
//   console.log(b.year + " b.year");
//   if (a.year > b.year) {
//     return 1 + console.log(1);
//   } else {
//     return -1 + console.log(0);
//   }
// });

// const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

// console.table(ordered);

// const testSort = [1, 4, 7, 3, 5, 2, 6, 8, 9];

// console.log(testSort);
// console.log(testSort.sort())

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

// prettier-ignore
// let collectiveYears = inventors.reduce((total, amount) => total + (amount.passed - amount.year), 0);
// console.log(collectiveYears);

// const totalYear = inventors.reduce((total, inventor) => {
//   return total + (inventor.passed - inventor.year);
// }, 0);

// console.log(totalYear);

// 5. Sort the inventors by years lived

// prettier-ignore

// let yearsLived = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year))
// console.table(yearsLived);

// const oldest = inventors.sort(function (a, b) {
//   const lastGuy = a.passed - a.year;
//   const nextGuy = b.passed - b.year;

//   return lastGuy > nextGuy ? -1 : 1;

// if(lastGuy > nextGuy) {
//   return -1;
// } else {
//   return 1;
// }
// });

// console.table(oldest)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const all = document.querySelector('.mw-category')
// const links = Array.from(all.querySelectorAll("a"));

// const de = links
//   .map((link) => link.text)
//   .filter((link) => link.includes(" de "));

// 7. sort Exercise
// Sort the people alphabetically by last name

// console.table(people)

// const lastName = people.sort((a, b) => a < b);
// console.table(lastName);

// const alpha = people.sort(function (lastOne, nextOne) {
//   const [alast, afirst] = lastOne.split(", ");
//   const [blast, bfirst] = nextOne.split(", ");
//   return alast > blast ? 1 : -1;
// });

// console.table(alpha)

// 8. Reduce Exercise
// Sum up the instances of each of these
// prettier-ignore
// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

// const data2 = data.reduce(function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++;
//   } else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});

// console.log(data2);

// const transportation = data.reduce(function (obj, item) {
//   // console.log(item);
//   if (!obj[item]) {
//     obj[item] = 0;
//   }
//   obj[item]++;
//   return obj;
// }, {});

// console.log(transportation);
