function Person(){
    this.message = "Hello NodeJS 4!";
    this.sayHello = function (){
        console.log(this.message);
    }
}

module.exports = Person;