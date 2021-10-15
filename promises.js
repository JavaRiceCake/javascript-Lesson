// * asynchronous data
//?create dummy data, use a arry objects

const peoples = [
    { fname: "mike", lname: "roxas", age: 12 },
    { fname: "jonh", lname: "manalo", age: 34 },
    { fname: "jose", lname: "patalo", age: 24 }

]




function getName() {
    setTimeout(() => {
        let output = "";
        peoples.forEach((people) => {

            output += `<li>${people.fname}</li>`

        })
        document.body.innerHTML = output;


    }, 1000);


}

function createPeople(people) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            peoples.push(people);

            const error = true; // if walang error

            if (!error) {
                resolve() //rereturn ung relosve
            } else {
                reject("Error creating Data"); //rereturn ung reject
            }

        }, 1000);

    })



}

// createPeople({ fname: "jose1", lname: "patalo", age: 24 }).then(getName).catch(error => console.error(error));

//* CREATE Promises ALL


const promis1 = Promise.resolve("hello"); // if alam mo resolve agd;
const promis2 = 10;
const promis3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "goodbye"));
const fetchApi = fetch('https://jsonplaceholder.typicode.com/users').then(result => result.json()); //convert into json

Promise.all([promis1, promis2, promis3, fetchApi]).then(value => console.log(value));