// Task 1
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    for(const element of dairy) {
        console.log(element);
    }
}
// Task 2 
function birdCan() {
    const animal = {
        canJump: true
    };
    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    for(element of Object.keys(bird)) {
        console.log(element + ": " + bird[element]);
    }
}
// Task 3
function animalCan() {
    const animal = {
        canJump: true
    };
    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    for(element in bird) console.log(element + ": " + bird[element]);
}


logDairy();
console.log("\n");
birdCan();
console.log("\n");
animalCan();


const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);