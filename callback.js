// * asynchronous data
//?create dummy data, use a arry objects

const peoples = [
    { fname: "mike", lname: "roxas", age: 12 },
    { fname: "jonh", lname: "manalo", age: 34 },
    { fname: "jose", lname: "patalo", age: 24 }

]


// ? this is callback

function getName() {
    setTimeout(() => {
        let output = "";
        peoples.forEach((people) => {

            output += `<li>${people.fname}</li>`

        })
        document.body.innerHTML = output;


    }, 1000);


}
/*
? this code is hindi masasama ung new insert data sa pag print  
function createPeople(people) {

    setTimeout(() => {

        peoples.push(people);

    }, 2000);

}

getName();

createPeople({ fname: "jose", lname: "patalo", age: 24 });
*/
//? same lng sa taas dito ay mag add ka lang ng callback
function createPeople(people, callback) { // callback or any name pwede pero ang tawag jan ay callback

    setTimeout(() => {

        peoples.push(people);
        callback();

    }, 2000);

}

// getName();

createPeople({ fname: "jose", lname: "patalo", age: 24 }, getName); //dito na ilalagay ung getname() remove the openclose