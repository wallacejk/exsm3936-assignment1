// write class for car and engine
// both have their own constructor
//properties for car Make, Model, Year, Odometer and engine
class Car {
    constructor(carMake = "DMC", carModel = "Delorean", carYear = "1982", carEngine = new Engine()) {
        this.carMake = carMake;
        this.carModel = carModel;
        this.carYear = carYear;
        // cars odometer initalize to 0
        this.carOdometer = 0;
        this.carEngine = carEngine;

    }
    //Declare outside constructor for language agnosticism (Not required for Javascript if they have a value in the constructor)
    carMake;
    carModel;
    carYear;
    #carOdometer;
    carEngine;

    get carOdometer() {
        return this.#carOdometer;
    }
    set carOdometer(incomingValue) {
        if (incomingValue < 0) {
            throw new Error("The car odometer cannot have a negative value");
        }
        // TODO!! ADD ENGINE RUNNING TO ENGINE OBJECT

        this.#carOdometer = incomingValue;

    }

    //drive the car(single parameter representing the distance to drive) which will add the argument to the odometer if the engine is on and throw and exception otherwise
    drive(kmTravelled) {
        let kmToAdd = kmTravelled;

        let newOdometerReading = this.carOdometer + kmToAdd;
        this.carOdometer = newOdometerReading;

    }
    //methods of >>>>>car class
    //start car engine(no parameters) set engine to run
    startEngine() {
        

        this.carEngine.engineRunning = true;


    }
    //stop car engine(no parameters) set engine to not running
    stopEngine() {

    }


}


// write class for engine
//properties of engine class should include number of cylinders, wether its running or not

class Engine {
    constructor(engineRunning = false, engineCylinders = 6,) {
        // engine running initalize to false
        this.engineRunning = engineRunning;
        this.engineCylinders = engineCylinders;
    }
    //Declare outside constructor for language agnosticism (Not required for Javascript if they have a value in the constructor)
    engineRunning;
    engineCylinders;
    

    get engineRunning() {
        return this.engineRunning;
    }
    set engineRunning(incomingValue) {
        if (this.engineRunning == true) {
            throw new Error("The car is already running");
        }
        this.engineRunning = incomingValue;

    }
    toString() {
        return `A ${this.engineCylinders} Cylinder Engine that is ${this.engineRunning}`
    }
}





//other properties passed in through constructor parameters

//constructor of car instantiate an engine aswell


//engine will be instance of engine class


//once class is constructed, write script in console that will (remember to catch exceptions)
//1 Instatniate a car
//2 Turn its engine on
//3 Drive for 100km
//4 Turn the engine off
//5 Turn its engine on
//6 Drive for 50km
//7 Turn the engine off
//8 Output the odometer reading to the console

//No user input required

//Finally output a JSON string representing your car object to the console



async function main() {
    let myCar = new Car();
    myCar.drive(10);
    output(myCar.carOdometer);
    try {
        myCar.drive(-20);
    }
    catch (error) {
        output(error);
    }
    output(myCar.carOdometer);
    
    output(myCar.carEngine);
    output(myCar.carEngine.engineRunning);

    myCar.startEngine();
    output(myCar.carEngine.engineRunning);
    



}


