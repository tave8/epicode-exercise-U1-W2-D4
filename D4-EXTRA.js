// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali 
 (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    const eMaggioreDi5 = x > 5;
    if (eMaggioreDi5) {
      sum += x;
      console.log("è maggiore di 5");
    }
  }
  return sum;
}

// checkArray(giveMeRandom(9));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function shoppingCartTotal(shoppingCart) {
  let ret = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    const item = shoppingCart[i];
    const totalItem = item.price * item.quantity;
    ret += totalItem;
  }
  return ret;
}

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart"
  e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart(newItem, shoppingCart) {
  shoppingCart.push(newItem);
  return shoppingCart.length;
}

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart".
  Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(shoppingCart) {
  let mostExpensiveItem = shoppingCart[0];
  let lastMostExpensive = mostExpensiveItem.price;
  for (let i = 1; i < shoppingCart.length; i++) {
    const item = shoppingCart[i];
    if (item.price > lastMostExpensive) {
      mostExpensiveItem = item;
      lastMostExpensive = item.price;
    }
  }
  return mostExpensiveItem;
}

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(shoppingCart) {
  const indexLastItem = shoppingCart.length - 1;
  const lastItem = shoppingCart[indexLastItem];
  return lastItem;
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero 
 casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil(x) {
  let counterMaggioreX = 0;
  let diFila = false;
  console.log(`NUMERO DATO: ${x}`);
  while (!diFila) {
    const randX = Math.floor(Math.random() * 10);
    console.log(`Numero casuale: ${randX}`);
    if (randX > x) {
      // se la condizione "di fila" soddisfatta, incrementa il contatore
      counterMaggioreX++;
      console.log(`Numero casuale ${randX} maggiore di numero dato per ${counterMaggioreX} volte di fila`);
      if (counterMaggioreX === 3) {
        diFila = true;
        console.log(`Numero casuale ${randX} maggiore di x per tre volte di fila. Esco dal loop`);
        break;
      }
    } else {
      console.log(`Numero casuale ${randX} non maggiore di x una volta, quindi non di fila. Azzero contatore`);
      // se la condizione "di fila" non soddisfatta, azzera il contatore di fila
      counterMaggioreX = 0;
    }
  }
}

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. 
La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function average(arr) {
  let sum = 0;
  let quantiNumeri = 0;

  for (let i = 0; i < arr.length; i++) {
    const numeroOAltro = arr[i];
    if (!isNaN(numeroOAltro)) {
      sum += numeroOAltro;
      quantiNumeri++;
    }
  }

  const ret = sum / quantiNumeri;
  return ret;
}

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function longest(arr) {
  let ultimaStringaRecord = arr[0];
  let ultimaLunghezzaRecord = ultimaStringaRecord.length;
  for (let i = 1; i < arr.length; i++) {
    const stringa = arr[i];
    const lunghezzaStringa = stringa.length;
    if (lunghezzaStringa > ultimaLunghezzaRecord) {
      ultimaStringaRecord = stringa;
      ultimaLunghezzaRecord = lunghezzaStringa;
    }
  }
  return ultimaStringaRecord;
}

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. 
 La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function eLiberaDaSpam(emailContent) {
  const contieneSpam = emailContent.includes("SPAM");
  const contieneScam = emailContent.includes("SCAM");
  const condizioneFinale = !contieneScam && !contieneSpam;
  return condizioneFinale;
}

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/**
 * dataInput deve essere fornito nel formato YYYY-MM-DD
 */
function calcolaGiorni(dataInput) {
  // millisecondi dall'epoch, fino alla data input
  const msPassati1 = Date.parse(dataInput);
  // millisecondi dall'epoch, fino alla data di oggi
  const msPassati2 = Date.parse(new Date().toJSON().slice(0, 10));
  const msPassati = Math.abs(msPassati1 - msPassati2);
  // scomposizione di un giorno: ore, minuti, secondi, millisecondi
  const msInGiorno = 24 * 60 * 60 * 1000;
  const giorniPassati = Math.floor(msPassati / msInGiorno);
  return giorniPassati;
}

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/**
 * x = columns
 * y = rows
 */
function matrixGenerator(x, y) {
  const ret = [];
  //   row
  for (let i = 0; i < y; i++) {
    const vals = [];
    // col
    for (let j = 0; j < x; j++) {
      const val = `${i}${j}`;
      vals.push(val);
    }
    ret.push(vals);
  }

  return ret;
}
