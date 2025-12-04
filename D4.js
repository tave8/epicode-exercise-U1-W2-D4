/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  const ret = l1 * l2;
  return ret;
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(x, y) {
  const areEqual = x === y;
  const sum = x + y;
  if (areEqual) {
    const ret = sum * 3;
    return ret;
  }
  return sum;
}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(x) {
  const diff = Math.abs(x - 19);
  if (x > 19) {
    const ret = diff * 3;
    return ret;
  }
  return diff;
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  const eCompreso = n > 20 && n <= 100;
  const eUguale = n === 400;
  const condizioneFinale = eCompreso || eUguale;
  return condizioneFinale;
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(s) {
  const cominciaConEpicode = s.startsWith("EPICODE");
  if (cominciaConEpicode) {
    return s;
  }
  const ret = `EPICODE ${s}`;
  return ret;
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(x) {
  const eMultiplo3 = x % 3 == 0;
  const eMultiplo7 = x % 7 == 0;
  const ret = eMultiplo3 || eMultiplo7;
  return ret;
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(s) {
  let ret = "";
  for (let i = s.length - 1; i >= 0; i--) {
    ret += s[i];
  }
  return ret;
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(s) {
  const parole = s.split(" ");
  const nuoveParole = [];
  for (let i = 0; i < parole.length; i++) {
    const parola = parole[i];
    const primaLettera = parola[0];
    const restoLettere = parola.slice(1);
    const primaLetteraUpperCase = primaLettera.toUpperCase();
    const nuovaParola = primaLetteraUpperCase + restoLettere;
    nuoveParole.push(nuovaParola);
  }

  const ret = nuoveParole.join(" ");

  return ret;
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(s) {
    const lunghezzaS = s.length
    const ret = s.slice(1, lunghezzaS-1)
    return ret
}


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function giveMeRandom(n) {
    const ret = []
    for (let i = 0; i < n; i++) {
        const randX = genRand(10)
        ret.push(randX)
    }
    return ret
}

function genRand(endInclusive) {
    return Math.floor(Math.random() * (endInclusive+1))
}