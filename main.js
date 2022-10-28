class Animal {
    constructor(name, width,height) {
        console.log("Created animal named",name);
        this.name = name;
        this.width = width;
        this.height = height;

    }

}

class Dog extends Animal {
    constructor(name,width,height,barkVolume, leashColor,speed){
        super(name,width,height);
        this.speed = speed;
        this.barkVolume = barkVolume;
        this.leashColor = leashColor;
    }
    bark(){
        if(this.barkVolume > 50 ){
            console.log(this.name , "bark loudly !!!");
        }else{
            console.log(this.name , "bark timidly !!!");
        }
    }
}
const king = new Dog ("Dog",45,92,72,"red",50);
class Fish extends Animal {
    constructor(name,width,height,swimSpeed){
        super(name,width,height);
        this.swimSpeed = swimSpeed;
       
    }
    swim(){
        if(this.swimSpeed > 50){
            console.log("swiming around quickly ! speed" ,this.swimSpeed);
        }else {
            console.log("swiming around slowly!speed",this.swimSpeed);
        }
    }
    speed(speedDog){
        if(speedDog > this.swimSpeed){
            console.log("chó chạy nhanh hơn",speedDog);
        }else{
            console.log("cá bơi nhanh hơn",this.swimSpeed);
        }
    }
}
const goldie = new Fish("Goldie",2,20,80)
king.bark()
goldie.speed(king.speed)