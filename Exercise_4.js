/**
* два электроприбора - лампа и компьютер
* наследуются от конструктора
* и обладают собственными методами
* лампа - свойство яркость
* компьютер - свойство: спящий режим, процент экономии;
*             метод: вкл/выкл
*/

function ElectroApp(power, name){  // родительская функция
    this.voltage = "220 v",
    this.name = name,
    this.power = power,
    this.connected = false
    };
    
    
ElectroApp.prototype.getPower = function(){
    console.log(`Power is ${power} W`);
};
    
    
ElectroApp.prototype.appOn = function(){  // метод включения
    if (this.connected===false){
        this.connected=true;
        console.log(`${this.name} is switched on`);
    }
    else{
        console.log("Already enabled");
    }
};
    
    
ElectroApp.prototype.appOff = function(){  // метод выключения
    if (this.connected===true){
        this.connected=false;
        console.log(`${this.name} is switched off`);
    }
    else{
        console.log("Already turned off");
    }
};


function Lamp(power, name, brightness){
    this.power = power,
    this.name = name,
    this.brightness = brightness  // яркость
};


Lamp.prototype = new ElectroApp()


Lamp.prototype.getBrightness = function(){
    console.log(`Brightness is ${brightness} lm`);  // Не будем вдаваться в подробности
};
    
function Computer(power, name, energysaving){
    this.power = power,
    this.name = name,
    this.energysaving = energysaving  // энергосбережение
    this.sleepmode = false
};
    
    
Computer.prototype = new ElectroApp()
    
    
Computer.prototype.sleepModeOn = function(){  // спящий режим вкл, дописать
    if (this.sleepmode===false){
        this.sleepmode=true;
        console.log("Power saving mode enabled");
    }
    else{
        console.log("Already enabled");
    }
};


Computer.prototype.sleepModeOff = function(){  // спящий режим выкл
    if (this.sleepmode===false){
        this.sleepmode=true;
        console.log("Power saving mode off");
    }
    else{
        console.log("Already turned off");
    }
    console.log("Power saving mode off")
};

    
const desklamp = new Lamp(200, "desklamp", 1000);
console.log(desklamp);
    
    
const imac = new Computer(500, "imac21", 0.5);
console.log(imac);

desklamp.appOn()