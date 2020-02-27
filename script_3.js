let level = prompt("Combien d'étages?");

for (let i=1; i<=level; i++) {
  console.log(" ".repeat(level-i) + "#".repeat(i));
}

