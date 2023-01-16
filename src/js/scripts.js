class Car {
    constructor(carMake = "DMC", carModel = "Delorean", carOdometer = 0, carYear = "1982", carEngine = new Engine(), carTransmission = new Transmission()) {
        this.carMake = carMake;
        this.carModel = carModel;
        this.carYear = carYear;
        this.carOdometer = carOdometer;
        this.carEngine = carEngine;
        this.carTransmission = carTransmission;

    }

    //Declared outside constructor for language agnosticism (Not required for Javascript if they have a value in the constructor)
    carMake;
    carModel;
    carYear;
    #carOdometer;
    carEngine;
    carTransmission;

    get carOdometer() {
        return this.#carOdometer;
    }

    set carOdometer(incomingValue) {
        if (incomingValue < 0) {
            throw new Error("The car odometer cannot drive negative distances");
        }

        this.#carOdometer = incomingValue;
    }

    //Methods for Car Class
    drive(kmTravelled) {
        if (this.carEngine.engineRunning == false) {
            throw new Error("The engine is not running. You cannot drive")
        }

        let kmToAdd = kmTravelled;
        let newOdometerReading = this.carOdometer + kmToAdd;

        this.carOdometer = newOdometerReading;
    }

    startEngine() {
        if (this.carEngine.engineRunning == true) {
            throw new Error("Engine is already running");
        }

        this.carEngine.engineRunning = true;
    }

    stopEngine() {
        if (this.carEngine.engineRunning == false) {
            throw new Error("Engine is already off");
        }

        this.carEngine.engineRunning = false;
    }

}

class Engine {
    constructor(engineRunning = false, engineCylinders = 6) {
        this.#engineRunning = engineRunning;
        this.engineCylinders = engineCylinders;
    }

    //Declared outside constructor for language agnosticism (Not required for Javascript if they have a value in the constructor)
    #engineRunning;
    engineCylinders;

    get engineRunning() {
        return this.#engineRunning;
    }
    set engineRunning(incomingValue) {
        this.#engineRunning = incomingValue;
    }

}

class Transmission {
    constructor(transmissionType = "Manual", transmissionGears = 5) {
        this.transmissionType = transmissionType;
        this.transmissionGears = transmissionGears;
    }

    //Declared outside constructor for language agnosticism (Not required for Javascript if they have a value in the constructor)
    transmissionType;
    transmissionGears;

}

//Console Output

async function main() {

    //Instantiate a car
    let myCar = new Car();

    //Turn its engine on
    try {
        myCar.startEngine();
    }
    catch (error) {
        output(error);
    }

    //Drive for 100km
    try {
        myCar.drive(100);
    }
    catch (error) {
        output(error);
    }

    //Turn the engine off
    try {
        myCar.stopEngine();
    }
    catch (error) {
        output(error);
    }

    //Turn the engine on
    try {
        myCar.startEngine();
    }
    catch (error) {
        output(error);
    }

    //Drive for 50km
    try {
        myCar.drive(50);
    }
    catch (error) {
        output(error);
    }

    //Turn the engine off
    try {
        myCar.stopEngine();
    }
    catch (error) {
        output(error);
    }

    //Output the odometer reading to the console
    output(`Odometer: ${myCar.carOdometer}KM`);

    //Output a JSON string representing your Car object to the console
    output(JSON.stringify(myCar));

}


