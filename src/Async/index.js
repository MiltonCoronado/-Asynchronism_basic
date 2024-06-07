//funcion que va a ser tratada como promesa.
const fnAsyncrona = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve(`Async!!!`), 2000)
        : reject(new Error(`Error!!!`));
    });
}

//funcion que va a utilizar el concepto de Async y away.
const anotherFn = async () => {
    const something = await fnAsyncrona();
    console.log(something);
    console.log(`hello!!!`);
}

console.log(`before`);
anotherFn();
console.log(`after`);
