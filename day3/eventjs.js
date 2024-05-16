const ev = require('events');
var x = new ev.EventEmitter();

x.on("Message", () => {
    console.log("Hey");
});

x.emit("Message", "This is the msg");