let serin = ["UCU","UCC", "UCA", "UCG", "AGU", "AGC"];
let prolin = ["CCU", "CCC", "CCA", "CCG"];
let leucin = ["UUA", "UUG"];
let phenylalanin = ["UUU", "UUC"];
let arginin = ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"];
let tyrosin = ["UAU", "UAC"];
let aminosArray = [serin, prolin, leucin, phenylalanin, arginin, tyrosin];
let aminosNames = ["Sérine", "Proline", "Leucine", "Phénylalanine", "Arginine", "Tyrosine"];
let adn = [];

function amino(codon) {
  aminosArray.forEach( amino => {
    if (amino.includes(codon)) {
      let aminoIndex = aminosArray.indexOf(amino);
      return aminoName = aminosNames[aminoIndex];
    }
  })
  return aminoName;
}

function protein(arn) {
  for (let i=0; i<arn.length; i+=3) {
    let codon = arn.slice(i,i+3);
    adn.push(amino(codon));
  }
  return adn.join('-');
}

console.log(protein("CCUCGCCGGUACUUCUCG")); // CCGUCGUUGCGCUACAGC


