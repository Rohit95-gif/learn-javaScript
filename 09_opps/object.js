function multiplication (number){
    return number* 5;
}
multiplication.power = 2;

console.log(multiplication(5));
console.log(multiplication.power);
console.log(multiplication.prototype);

function createUser(uName,Score){
    this.uName = uName;
    this.Score = Score;
}

createUser.prototype.increment = function(){
    this.Score++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.Score}`);
    
}

const chia = new createUser("chai",25);
const tea = new  createUser("tea",50);

chia.printMe();
tea.printMe();


