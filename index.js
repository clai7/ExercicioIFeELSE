const idade = prompt("Quantos anos você tem?");

if (idade > 18) {
  alert("Você já é adulto");
} else if (idade > 13) {
  alert(" Você já é adolescente");
} else if (idade < 13) {
  alert(" Você é criança");
} else {
  alert("..");
}
