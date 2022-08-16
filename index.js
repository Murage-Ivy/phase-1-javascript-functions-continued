// code your solution here
// function declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun());

//function expression
const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

console.log(mondayWork());

//function scope-level

function wrapAdjective(Vflair = "*") {
    return function (adjective = 'special') {
        return `You are ${Vflair}${adjective}${Vflair}!`;
    }
}
