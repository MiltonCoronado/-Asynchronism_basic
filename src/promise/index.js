//ejemplo 1.
const promise = new Promise(function (resolve, reject) {
    resolve(`hey!`)
});

//ejempplo 2.
const Cows = 9;

const countCows = new Promise(function (resolve, reject) {
    if(Cows > 10) {
        resolve(`We have ${Cows} Cows on this farm`);
    }else {
        reject(`There is no cows on the farm`);
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log(`Finally`));

//ejemplo 3.
//correr varias promesas al mismo tiempo.
const somethingWillHappen = () => {
    //...
}; 

const somethingWillHappen2 = () => {
    //...
}

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });