// This JavaScript runs client side - in the browser
console.log(`running in the browser`);


// URL for the dummyjson products API
const products_URL = 'https://dummyjson.com/products';

// async function as fetch is async
async function getProducts() {

    let json_data;

    try {
        const response = await fetch(products_URL);
        json_data = await response.json();

    } catch(err) {
        console.log(`fetch error: ${err}`);
    }

    // show the data rectrieved in the console
    console.log(json_data);
}

// call the function
getProducts();
