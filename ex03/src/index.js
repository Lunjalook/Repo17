const MY_CAR = {
    wheels: 4,
    cylindres: 4,
    size: 2.2
};

function main(myCar) {
    // Only change code below this line
    const { cylindres } = MY_CAR;
    const { size } = MY_CAR;
    return { cylindres, size };
    // Only change code above this line
}

console.log(main(MY_CAR));
module.exports = main;