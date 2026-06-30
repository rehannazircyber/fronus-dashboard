// ========= DEMO DATA =========

let inverterOnline = false;

let solarPower = 0;
let gridVoltage = 0;
let gridCurrent = 0;
let loadPower = 0;
let todayEnergy = 0;
let totalEnergy = 1568.25;
let temperature = 0;
let frequency = 50;

// ==============================

function updateDashboard(){

    document.getElementById("pvPower").innerHTML =
    solarPower.toFixed(0) + " W";

    document.getElementById("gridVoltage").innerHTML =
    gridVoltage.toFixed(1) + " V";

    document.getElementById("gridCurrent").innerHTML =
    gridCurrent.toFixed(1) + " A";

    document.getElementById("loadPower").innerHTML =
    loadPower.toFixed(0) + " W";

    document.getElementById("todayEnergy").innerHTML =
    todayEnergy.toFixed(2) + " kWh";

    document.getElementById("totalEnergy").innerHTML =
    totalEnergy.toFixed(2) + " kWh";

    document.getElementById("temperature").innerHTML =
    temperature.toFixed(1) + " °C";

    document.getElementById("frequency").innerHTML =
    frequency.toFixed(1) + " Hz";

    document.getElementById("lastUpdate").innerHTML =
    new Date().toLocaleTimeString();

}

function setStatus(state){

    let status=document.getElementById("status");

    if(state){

        status.innerHTML="🟢 ONLINE";
        status.className="online";

    }else{

        status.innerHTML="🔴 OFFLINE";
        status.className="offline";

    }

}

function demo(){

    inverterOnline=!inverterOnline;

    setStatus(inverterOnline);

    if(inverterOnline){

        solarPower=Math.random()*4200;

        gridVoltage=220+Math.random()*15;

        gridCurrent=Math.random()*8;

        loadPower=500+Math.random()*1800;

        todayEnergy+=0.03;

        totalEnergy+=0.03;

        temperature=35+Math.random()*10;

    }else{

        solarPower=0;

        gridVoltage=0;

        gridCurrent=0;

        loadPower=0;

        temperature=0;

    }

    updateDashboard();

}

demo();

setInterval(demo,3000);
