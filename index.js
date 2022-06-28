// Code your solution in this file!
function distanceFromHqInBlocks(loc) {
    let numBlocks = Math.abs(42 - loc);
    return numBlocks;
}

function distanceFromHqInFeet(loc){
    let numFeet = Math.abs(42 - loc) * 264;
    return numFeet;
}

function distanceTravelledInFeet(start, destination){
    let numFeetTravelled = Math.abs(destination - start) * 264;
    return numFeetTravelled;
}

function calculatesFarePrice(start, destination){
    let numFeetTravelled = Math.abs(destination - start) * 264;
    let price = numFeetTravelled < 400? 0: numFeetTravelled > 400 && numFeetTravelled < 2000? (numFeetTravelled - 400) * .02: numFeetTravelled > 2000 && numFeetTravelled < 2500 ? 25 : numFeetTravelled > 2500? "cannot travel that far": sorry;
    return price;
}