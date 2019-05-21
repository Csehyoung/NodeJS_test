console.log('hello world');

var lastName = "sehyoung";
console.log(lastName);

function sum(x, y){
    return x + y;
};

function minus(x, y){
    return x - y;
};

function multiple(x, y){
    return x * y;
};

console.log(sum(1,2));
console.log(multiple(3,2));
console.log(minus(5,2));

var car = {
    name : 'fiat',
    model : '500',
    weight : '850Kg',
    color : 'white'
}

console.log(car);

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var i;

for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for(var i = 0; i<cars.length; i++){
    if(cars[i] == "BMW"){
        console.log("BMW 차량이 있습니다.");
    }
}
