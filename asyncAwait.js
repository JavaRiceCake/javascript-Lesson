//* get Api data using asyncAwaits

async function fetchApi() {

    const getdata = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await getdata.json();

    console.log(result);
}

fetchApi();