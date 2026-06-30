// ==========================
// FRONUS MQTT CONFIGURATION
// ==========================

const options = {

    connectTimeout: 5000,

    clientId: "dashboard_" + Math.random().toString(16).substr(2,8),

    username: "",

    password: "",

    clean: true

};

// WebSocket URL
const broker =
"wss://750d56eac4bb4d07b0a1136cf23217a3.s1.eu.hivemq.cloud:8884/mqtt";

console.log("MQTT Ready");

// Tomorrow we'll connect here.
