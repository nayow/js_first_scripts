function answerTo(input) {
  if (input[input.length-1]=="?") {
    return "Ouais ouais...";
  } else if (input && input === input.toUpperCase()) {
    return "Pwa, calme-toi...";
  } else if (input.toUpperCase().includes('fortnite'.toUpperCase())) {
    return "on se fait une partie soum-soum?";
  } else if (input === "") {
    return "t'es en PLS?";
  } else {
    return "balek";
  }
}

while (true) {
  let input1 = prompt("Parle-moi");
  console.log(answerTo(input1));
}
