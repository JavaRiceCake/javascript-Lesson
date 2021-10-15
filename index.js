const fruits = ["apple", "mango", "santol"]; // array declarition!
//fruits.push("banana"); => nag aadd ng new array items sa hulihan!
//fruits.unshift("banana"); => nag aadd ng new array items sa unahan!
//fruits.pop(); => nag reremove ng new array items sa hulihan!
const arrayCheck = Array.isArray(fruits); //check if the element is array!
const arrayFindIndex = fruits.indexOf("mango") // get the index of mango!
    //fruits.splice(0, 1); => removing array items. the 0  is saan mag sstart at ung 1 is kung ilan i reremove!
    // console.log(fruits);

//*OBJECT LITERALS

const people = {
    fname: "rj",
    lname: "rosas",
    age: 20,
    favorites: ["eat", "play", "blue"],
    familyMembers: {
        father: "jose",
        mother: "maria"
    }
}
const qq = people; //show the object!
const qqq = people.fname; //acess the firstname from the  people object!
const qqqq = people.favorites[0]; // access array from the people object!
const qqqqq = people.familyMembers.father; //access the object to object 
//?console.log(people.fname, people.lname); => access  fname and lname!

//* ARRAY-OBJECT

const contacts = [{
        id: 1,
        name: "jose",
        number: 12314145,
        simcard: "globe"
    },
    {
        id: 2,
        name: "mise",
        number: 12314145,
        simcard: "smart"
    },
    {
        id: 3,
        name: "maria",
        number: 12314145,
        simcard: "globe"
    }
]
const w = contacts; // show the array objects
const ww = contacts[0]; // access the index 0 of array object
const www = contacts[0].name; // get the name from array object

//* LOOPINGS FOR ARRAY-OBJECT

//? use [forof] this good either [forloops]

/*
for (const contact of contacts) {
    console.log(contact.name);
}
*/

// TODO: if you want array ang result
//?use .map() 

const getContactName = contacts.map((contact) => {
    return contact.name;
});
// console.log(getContactName);

// TODO: if you want filter ang result or may specific if naka globe simcard ba sila
//?use .filter()

const getGlobe = contacts.filter((contact) => {
    return contact.simcard == "globe";
})

// console.log(getGlobe);

// TODO: if you want filter ang result or may specific if naka globe simcard ba sila at gusto mo kunin ung name lang nila
//? this is called [connecting function]

const getGlobeUser = contacts.filter((contact) => {
    return contact.simcard == "globe";
}).map((contact) => {

    return contact.name // getting the globe user

});

// console.log(getGlobeUser);


// * FUNCTION 
// ? ES6  ARROW FUNCTION

const addNumbers = (num1, num2) => {
    return num1 + num2;
}

const addNumber = (num1, num2) => num1 + num2; // single line of code kung ung funtion is mag re return like this!