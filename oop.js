//* OOP / CLASS


class People {
    constructor(firstname, lastname, age) {

        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }


    getFullname() {
        return `${this.firstname} ${this.age}`;
    }

}

const obj1 = new People("Rjay", "Rosas", 20);
console.log(obj1.getFullname());