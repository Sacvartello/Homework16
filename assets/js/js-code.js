//1
const userInfo1 = {
    firstName : 'Tor',
    lastNmae : 'Vusovych',
    email : 'torvusosovych@gmail.com',
    password : 87654321,
    phoneNumber : 1675806573,
    address : {city : 'Sofia', street : 'Obitovna', house : '6a', room : 27}
};

console.log('userInfo1', userInfo1);
//2
const userInfo2 = {
    userName : 'Vova',
    userSurname : 'Tumovuch',
    userFullName : function (){
        return `${userInfo2.userName} ${userInfo2.userSurname}`
    },
};

const greetingForUser2 = userInfo2.userFullName()
console.log('Доброго дня,', greetingForUser2);
//3
const userInfo3 = {
    firstName : 'Misha',
    lastNmae : 'Yakymovych',
    email : 'mihaYak@gmail.com',
    password : 'abcd1234',
    phoneNumber : 567206236,
    address : {city : 'Lviv', street : 'Kirylovicha', house : '54', room : 2}
}

for (key in userInfo3) {
    console.log('key :>> ', key);
}
//4
const car = {
    color : 'white',
    model : 'Stolen',
    mark : 'Toyota',
    volumeOfEngine : 1.6,
    sits : 5,
    curentSpeed : 60,
    maxSpeed : 240,
    accelerate : function (addSpeed){
        if (this.curentSpeed+addSpeed <= this.maxSpeed){
            car.curentSpeed = car.curentSpeed + addSpeed
        } else {
            console.log(`ПОМИЛКА! Швидкість не вдалось збільшити, не дозволено мати швидкість більше ніж ${maxSpeed}`);
        }
    },
    deaccelerate : function (reduceSpeed) {
        if (this.curentSpeed-reduceSpeed >= 0){
            car.curentSpeed = car.curentSpeed - reduceSpeed
        } else {
            console.log(`ПОМИЛКА! Швидкість не вдалось зменшити, не дозволено мати швидкість меншу за 0`);
        }
    },
    stop : function (){
        car.curentSpeed = 0
    }
}
car.accelerate(40)
console.log(`Швидкість: ${car.curentSpeed} км/год`);
car.deaccelerate(10)
console.log(`Швидкість: ${car.curentSpeed} км/год`);
car.stop()
console.log(`Швидкість: ${car.curentSpeed} км/год`);
//5
function Car(color, model, mark, volumeOfEngine, sits, curentSpeed, maxSpeed){
    this.color = color
    this.model = model
    this.mark = mark
    this.volumeOfEngine = volumeOfEngine
    this.sits = sits
    this.curentSpeed = curentSpeed
    this.maxSpeed = maxSpeed
}

const car1 = new Car('white', 'Tesla', 'Model 3', 2.2, 6, 100, 280)
const car2 = new Car('red', 'Audi', 'Tt', 1.8, 5, 80, 260)
const car3 = new Car('black', 'BMV', 'Ix 3', 1.6, 2, 40, 240)
console.log(car1);
console.log(car2);
console.log(car3);