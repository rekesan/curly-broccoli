// Classes
class Car {
    color = "red";
    model;
    speed = 100;
    
    constructor(model, color, speed){
      this.color = color;
      this.model = model;
      this.speed = speed;
    }
    
    accelerate(){
      this.speed += 10;
    }
    
    reduceSpeed(){
      this.speed -= 10;
    }
    
    stop(){
      this.speed = 0;
    }
    
    status(){
      if (this.speed > 0){
        console.log(`The ${this.color} ${this.model} is currently running at the speed of ${this.speed}kph.`);
      } else if (this.speed === 0){
        console.log(`The ${this.color} ${this.model} is currently idle. Speed: ${this.speed}kph.`);
      }
    }
  }

//   Inheritance
//   class Truck extends Car{
    
//   }

//   let truck1 = new Truck("Toyota", "Red", 190);
//   truck1.status();


// const car1 = new Car("Toyota Vios", "red", 80);
// const car2 = new Car("Ford Raptor","blue", 0);
// car1.status();
// car2.status();
// car1.reduceSpeed();
// car1.status();
// car2.accelerate();
// car2.status();

// Polymorphism
// class Truck extends Car{
//     accelerate(){
//         this.speed += 20;
//     }
// }

// let truck1 = new Truck("Toyota", "Red", 190);
// truck1.accelerate();
// truck1.status();