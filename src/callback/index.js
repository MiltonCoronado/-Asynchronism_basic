function sum(num1, num2) {
    return (num1 + num2)
}

function calc(num1, num2, callbakc) {
   return callbakc(num1, num2) 
};

console.log(calc(2,2, sum));//esta es la forma correcta en la Asincronia.

setTimeout(function() {
    console.log("hola millton desde javaScript")
}, 5000)

//otra manera que no la conocia.

function gretting(name) {
    console.log(`hola ${name}`);
}

setTimeout(gretting, 2000, "milton");