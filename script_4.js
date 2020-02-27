const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

/////////////////////////////////////////////////////

console.log("################  Nés dans les années 70 :");

entrepreneurs.forEach(person => {
  if (person.year >= 1970 && person.year < 1980) { 
    console.log(person);
  }
})

/////////////////////////////////////////////////////

console.log("################  Noms et prénoms :");

let full_names = [];
entrepreneurs.forEach(person => {
  full_names.push(person.first + " " + person.last);
})
console.log(full_names);

/////////////////////////////////////////////////////

console.log("################  Age actuel :");

entrepreneurs.forEach(person => {
  console.log(person.first + " " + person.last + ` a ${2020-person.year} ans`);
})

/////////////////////////////////////////////////////

console.log("################  Par Ordre alphabétique :");

function compare(a,b) {
  let comparison = 0;
  if (a.last > b.last) {
    comparison = 1;
  } else if (a.last < b.last) {
    comparison = -1;
  }
  return comparison;
}

let sorted = entrepreneurs.sort(compare)
console.log(sorted);

