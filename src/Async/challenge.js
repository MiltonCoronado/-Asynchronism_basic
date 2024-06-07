import fetch from "node-fetch";
const Api = `https://api.escuelajs.co/api/v1`;

async function fetchData(urlApi) {
    const response = await fetch(urlApi)//fetch de por si es una promesa. por eso el await guardado en una variable.
    const data = await response.json();
    return data;
}

const anotherFunction = async (urlApi) => {
    try{
        const products = await fetchData(`${urlApi}/products`);//1- primer llamado a la Api.
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);//2- segundo llamado a la APi.
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);//tercer llamado a la Api.

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    
    } catch(error) {
        console.error(error);
    }
}

anotherFunction(Api);

