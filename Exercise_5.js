/**
* два электроприбора - лампа и компьютер
* наследуются от конструктора
* и обладают собственными методами
* лампа - свойство яркость
* компьютер - свойство: спящий режим, процент экономии;
*             метод: вкл/выкл
*/

class ElectroApp {
    constructor(power, name) {
        this.voltage = "220 v",
        this.name = name,
        this.power = power,
        this.connected = false
    }

    getPower(){
        console.log(`Power is ${this.power} W`);
    }

    appOn(){
        if (this.connected===false){
            this.connected=true;
            console.log(`${this.name} is switched on`);
        }
        else{
            console.log("Already enabled");
        }
    }

    appOff(){
        if (this.connected===true){
            this.connected=false;
            console.log(`${this.name} is switched off`);
        }
        else{
            console.log("Already turned off");
        }
    }
}

class Lamp extends ElectroApp{
    constructor(brightness, power, name){
        super(power, name);
        this.brightness = brightness  // яркость
    }

    getBrightness(){
        console.log(`Brightness is ${brightness} lm`);  // Не будем вдаваться в подробности, мы не на физике
    }
}

class Computer extends ElectroApp{
    constructor(energysaving, power, name){
        super(power, name);
        this.energysaving = energysaving  // энергосбережение
        this.sleepmode = false
    }

    sleepModeOn(){
        if (this.sleepmode===false){
            this.sleepmode=true;
            console.log("Power saving mode enabled");
        }
        else{
            console.log("Already enabled");
        }
    }

    sleepModeOff(){
        if (this.sleepmode===false){
            this.sleepmode=true;
            console.log("Power saving mode off");
        }
        else{
            console.log("Already turned off");
        }
        console.log("Power saving mode off")
    }
}
    
const desklamp = new Lamp(1000, 200, "desklamp");
console.log(desklamp);
    
    
const imac = new Computer(0.5, 500, "imac21");
console.log(imac);

desklamp.appOn()