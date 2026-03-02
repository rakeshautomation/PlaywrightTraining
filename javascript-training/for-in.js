const person = {
    name: "Ashish Saluja",
    city: "Copenhagen",
    country: "Denmark"
};

console.log('Name through dot', person.name);
console.log('Name through array key', person["name"]);
const personKeys= Object.keys(person);
console.log('Person Keys1', personKeys);
for (let i=0; i< personKeys.length; i++) {
    console.log(personKeys[i], person[personKeys[i]]);

}
for (let key in person) {
    console.log('Key through for in loop', key, person[key]);
}
const numbers =[10,20,30,40,50];
for (let index in numbers) {
    console.log('Index through for in loop', index, numbers[index]);
}