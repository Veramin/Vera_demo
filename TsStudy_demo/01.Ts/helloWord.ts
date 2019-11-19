interface Person {
    name: string;
    age: number;
}

function getPersonInfor(person: Person) {
    console.log(`name: ${person.name}; age:${person.age}`)
    return `name: ${person.name}; age:${person.age}`
}

let vera = {
    name: 'Guess',
    age: 20
}

getPersonInfor(vera);