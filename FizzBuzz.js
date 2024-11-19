/*

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.

Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?

Abbiamo visto qualcosa di particolare che possiamo usare?

1.Stampo i numeri da 1 a 100 con un ciclo for
2.Uso una condizione in modo che i numeri divisibili per 3 stampa "Fizz", per 5 "Buzz" e per entrambi stampa "FizzBuzz"

*/

for (let i = 1; i <= 100; i++){

    if (i % 15 === 0){  // numeri divisibili sia per 3 e 5

     console.log("FizzBuzz");

    } else if (i % 3 === 0) { // numeri divisibili solo per 3

        console.log("Fizz");
        
    } else if (i % 5 === 0) { // numeri divisibili solo per 5
        console.log("Buzz");
        
    } else {      // numeri non divisibili per multipli di 3 e 5 e per quelli solo per 3 e 5
        console.log(i);
        
    }
        
}

