// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
const destructivelyAppendCat = (name) => {
    cats.push(name);
    return cats;
}
const destructivelyPrependCat = (name) => {
    cats.unshift(name);
    return cats;
}
const destructivelyRemoveFirstCat = (name) => {
    cats.shift(name);
    return cats;
}
const destructivelyRemoveLastCat = (name) => {
    cats.pop(name);
    return cats;
}
const appendCat = (name) => {
    let newArray = [...cats];
    newArray.push(name);
    return newArray;
}
const prependCat = (name) => {
    let newArrayOne = [...cats];
    newArrayOne.unshift(name);
    return newArrayOne;
}
const removeLastCat = (name) => {
    let newArrayTwo = [...cats];
    newArrayTwo.pop(name);
    return newArrayTwo
}
const removeFirstCat = (name) => {
    let newArrayThree = [...cats];
    newArrayThree.shift(name);
    return newArrayThree
}