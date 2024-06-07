//primer ejemplo. con un generator se puede iterar step by step.
//Un generador en JavaScript consta de una función generadora que muestra un objeto iterable Generator. La palabra reservada yield se usa para pausar y reanudar una función generadora.
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const g = generator();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


//segundo ejemplo. iterar un array con un generator.
function* iterate(array) {
    for (let value of array){
        yield value;
    }
}

const it = iterate(["oscar", "omar", "ana", "lucia", "juan"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);