import fetch from "node-fetch";//importamos fetch de node-fetch.
const API = `https://api.escuelajs.co/api/v1`;//guardamos la direccion del API.

function fetchData(urlAPI) {//de esta forma podemos usarlo segun sea el caso he ir transformando segun nuestras necesidades.
    return fetch(urlAPI)
}

fetchData(`${API}/products`)//no se instancia ninguna promesa debido a que fetch ya es una promesa.
    .then(response => response.json())//response.json para transformar la data a un objeto.
    .then(data => {
        console.log(data);
    })
    .then(() => {
        console.log(`hola`);
    })
    .catch(error => console.log(error))
//codigo comentado debido a que arroja todos los productos, pero nosotros queremos realizar multiples llamados.


// fetchData(`${API}/products`)//1- primera llamada.
//     .then(response => response.json())
//     .then(products => {
//         console.log(products)//1- pedimos que se muestren todos los productos en consola.
//         return fetchData(`${API}/products/${products[0].id}`)//2- segunda llamada
//     })
//     .then(response => response.json())
//     .then(products => {
//         console.log(products.title)//2- pedimos que se muestre el titulo de un solo producto. 
//         return fetchData(`${API}/categories/${products.category.id}`)//3- tercer llamado.
//     })
//     .then(response => response.json())
//     .then(category => {
//         console.log(category.name);//3- pedimos que se muestre el nombre de una categoria.
//     })
//     .catch(err => console.log(err))//trabajamos el error.
//     .finally(() => console.log(`Finally`))//finalizamos.
    

