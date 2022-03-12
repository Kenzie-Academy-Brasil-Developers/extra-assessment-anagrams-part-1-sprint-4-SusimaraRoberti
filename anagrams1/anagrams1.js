const button = document.getElementById("findButton");
button.addEventListener("click", function () {
  let typedText = document.getElementById("input").value;
  getAnagramsOf(typedText);
});

function alphabetize(a) {
  return a.toLowerCase().split("").sort().join("").trim();
}

const anagramas = document.getElementById("anagramas");

function getAnagramsOf(input) {
  let result = [];
  palavras.map((palavra) => {
    if (alphabetize(input) === alphabetize(palavra)) {
      result.push(palavra);
    }
  });
  anagramas.innerText = result;
  return result;
}
