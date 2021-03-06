// Fizz Buzz test:
// Scrivi un programma che stampi i numeri da 1
// a 100,
// ma per i multipli di 3 stampi “Fizz” al
// posto del numero e per i multipli di 5 stampi
// Buzz.
// Per i numeri che sono sia multipli di 3
// che di 5 stampi FizzBuzz.
// Stampiamo come sempre prima in console e poi su html
// Bonus: usare due tipi di cicli, se usate per il primo il for in bonus  fate un while.
// <============================INIZIO==================================>
// Variabile
var numero = 1;

// Stampa su console
  // Ciclo for
  for (var numero = 1; numero <= 100; numero++) {
  // Condizione
    if ((numero % 3 == 0) && (numero % 5 == 0)) {
      console.log('FizzBuzz');
    } else if (numero % 3 == 0){
      console.log('Fizz');
    } else if (numero % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(numero);
    }
};

// Stampa su HTML
  // Ciclo for
  for (var numero = 1; numero <= 100; numero++) {
  // Condizione
    if ((numero % 3 == 0) && (numero % 5 == 0)) {
      document.getElementById('lista-numeri').innerHTML+= '<li>FizzBuzz</li>';
    } else if (numero % 3 == 0){
      document.getElementById('lista-numeri').innerHTML+= '<li>Fizz</li>';
    } else if (numero % 5 == 0) {
      document.getElementById('lista-numeri').innerHTML+= '<li>Buzz</li>';
    } else {
      document.getElementById('lista-numeri').innerHTML+= '<li>' + numero + '</li>';
    }
  };
// <============================FINE==================================>
