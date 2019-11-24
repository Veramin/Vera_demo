interface Person {
    name: string;
    age: number;
}

function getPersonInfor(person: Person) {
    return `name: ${person.name}`
}

let vera = {
    name: '陈瑶瑶',
    age: 24
}
getPersonInfor(vera)

console.log(getPersonInfor(vera))