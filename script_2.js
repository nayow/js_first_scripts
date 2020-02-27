let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
let fact = 1;

for (let i=1; i<=number; i++) {
  fact *= i;
}

console.log(`La factorielle de ${number} est ${fact}`)