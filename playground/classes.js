class Person {

    constructor(name='test',age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi I am ${this.name}`
    }
    getDesc(){
        return `${this.name} is ${this.age} years .`
    }

}

class student extends Person {

    constructor(name,age,major){
        super(name,age)
        this.major = major

    }

    hasMajor(){
        return !!this.major 
    }

    getDesc(){
        let desc = super.getDesc()
        if(this.hasMajor()){
            desc = desc + ` their major is ${this.major}`
        }
        return desc
    }


}

class Traveller extends Person {

    constructor(name,age,location){
        super(name,age)
        this.location = location
    }
    getGreeting(){
        let greeting = super.getGreeting()
        if(this.location){
         greeting =  greeting + `My home location is ${this.location}`
        }
        return greeting
    }
} 

const me = new Traveller('nikhil',25,'Waterloo')

console.log(me.getGreeting())
