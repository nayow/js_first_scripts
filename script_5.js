const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

/////////////////////////////////////////////////////

console.log("################  Tous ont été empruntés au moins une fois?");

if (books.every(book => book.rented>0)) {
  console.log("Oui");
} else {
  console.log("Non");
}

/////////////////////////////////////////////////////

console.log("################  Livre le plus emprunté : ");

function compareRent(a,b) {
  let comparison = 0;
  if (a.rented > b.rented) {
    comparison = 1;
  } else if (a.rented < b.rented) {
    comparison = -1;
  } else {
    comparison = 0;
  }
  return comparison;
}

let sorted = books.sort(compareRent)
console.log(sorted[sorted.length-1]);

/////////////////////////////////////////////////////

console.log("################  Livre le moins emprunté : ");
console.log(sorted[0]);

/////////////////////////////////////////////////////

console.log("################  Livre avec l'id 873495");
console.log(books.find(book => book.id==873495));

/////////////////////////////////////////////////////

console.log("################  Suppression du livre 133712");

let index_to_remove = books.map(book => book.id).indexOf(133712);
console.log(books.splice(index_to_remove,1));

/////////////////////////////////////////////////////

function compareAlph(a,b) {
  let comparison = 0;
  if (a.title > b.title) {
    comparison = 1;
  } else if (a.title < b.title) {
    comparison = -1;
  } else {
    comparison = 0;
  }
  return comparison;
}

console.log("################  Par ordre alphabétique sans le 133712");
console.log(books.sort(compareAlph))
