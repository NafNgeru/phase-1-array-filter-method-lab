// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
function findMatching(array, name){
    let lowerCaseName = name.toLowerCase();
    return array.filter(names => names.toLowerCase() === lowerCaseName);
}

console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(array, name){
    let firstTwoLetters = name.slice(0, 2).toLowerCase();
    return array.filter(names => names.slice(0, 2).toLowerCase() === firstTwoLetters);
}

console.log(fuzzyMatch(drivers))

function matchName(array, name){
    return array.filter(names => names.name === name);
}

console.log(matchName(drivers, "Sally"));