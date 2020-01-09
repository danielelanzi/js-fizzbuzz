// var inputUtente = prompt('Inserisci un numero.');
// y = inputUtente++;
// console.log(inputUtente);

// var nomi = ['daniele', 'julia', 'lorenzo', 'net', 'champagne'];
// for (var i = 0; i < nomi.length; i++) {
//  console.log(nomi[i]);
// }
// nomi[numero];
// // nomi[1];
// // nomi[2];
//
// var numero = prompt('Inserisci un numero da 0 a 2.');
//
//
// if (numero <= 2){
//   console.log(nomi[numero]);
//   alert('numero corretto');
// } else {
//   console.log(nomi[numero]);
//   alert('numero errato');
// };
//
// document.getElementById('nome').innerHTML += nomi[numero];

// var numeri = [1,2,3,4,5,6,7,8,9,10,11,12];
//
//
// for (var i = 0; i < numeri.length; i++) {
//   if (i % 2 == 0)
//  console.log(numeri[i]);
// };


// var giocatore1 = prompt('il tuo nome?');
// var giocatore2 = prompt('il tuo nome?');
// console.log(giocatore1);
// console.log(giocatore2);
// document.getElementById('giocatore-1').innerHTML += giocatore1;
// document.getElementById('giocatore-2').innerHTML += giocatore2;
//
// var dado1 = Math.floor(Math.random() * 6) + 1;
// var dado2 = Math.floor(Math.random() * 6) + 1;
// console.log(dado1);
// console.log(dado2);
// document.getElementById('dado-1').innerHTML += dado1;
// document.getElementById('dado-2').innerHTML += dado2;
//
// if (dado1 > dado2){
//   document.getElementById('risultato-1').innerHTML += 'Ha vinto ' + giocatore1;
//   document.getElementById('risultato-2').innerHTML += 'Ha perso ' + giocatore2;
// }
// else if(dado1 = dado2){
//   document.getElementById('risultato-1').innerHTML += 'Sia ' + giocatore1 + ' che';
//   document.getElementById('risultato-2').innerHTML += giocatore2 + ' avete pareggiato, nessuno ha vinto.';
// }

// var listaSpesa = ['mele','arance','banane','kiwi','fragole','ananas'];
//
// for (var i = 0; i < listaSpesa.length; i++) {
//   console.log(listaSpesa[i]);
//   var contenuto = document.getElementById('lista-spesa').innerHTML;
//   document.getElementById('lista-spesa').innerHTML = contenuto + '<li>' + listaSpesa[i] + '</li>';
//   console.log(document.getElementById('lista-spesa').innerHTML);
// }
// // <===========================INIZIO========================>
// // Lista dei cognomi
// var arrayCognomi = ['Magliozzi','Pacifico','Baglini','Bottini','Campagnolo','Carone','Di Giacomantonio','Corneli','Caiello','Arimatea','Correggia','Di Pilla','De Marco','Doballah','Carnaroli','Chimento','Eboulet','Fiore','Franzone','Lugli','Magliano','Lega','Logozzo','Tarantino','Trotta','Pari','Patti','Pandolfi','Palumbo','Pedone','Petracci','Riccio','Sergata'];
//
// // Prompt cognome utente
// var cognomeUtente = prompt('Qual\'è il tuo cognome?');
//
// // Prima lettera cognome utente maiuscola
// cognomeMaiuscolo = cognomeUtente.charAt().toUpperCase() + cognomeUtente.substring(1);
//
// // Inserimento cognome utente all'interno della lista
// arrayCognomi.push(cognomeMaiuscolo);
//
// // Lista cognomi in ordine alfabetico
// arrayCognomi.sort();
// 
// // Variabile indicazione posizione utente
// var posizione = arrayCognomi.indexOf(cognomeMaiuscolo);
//
// // Verifiche nella console
//   // Inserimento cognome utente
//   console.log('Il tuo cognome è: ' + cognomeMaiuscolo);
//   // La posizione dell'utente
//   console.log('La tua posizione è: ' + (posizione + 1));
//   // Lista array ordinata dei cognomi con cognome utente da Prompt
//   console.log(arrayCognomi);
//
//   // Stampa su HTML e verifica console
//     // Ciclo FOR
//     for (var i = 0; i < arrayCognomi.length; i++) {
//         document.getElementById('lista-cognomi').innerHTML += '<li>' + 'Posizione Utente '  + (i+1) + " " + arrayCognomi[i] + '</li>';
//         console.log(arrayCognomi[i]);
//     };
// // <===========================FINE========================>
