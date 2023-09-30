const os=require('os');

console.log("cpu architecture :",os.arch());

console.log("free memeory : ",os.freemem());

console.log("total memory: ",os.totalmem());

console.log("Network interfaces"+JSON.stringify(os.networkInterfaces()));

console.log("os default tempt dir :" + os.tmpdir());

console.log("endianess : " +os.endianness());

console.log("hostname :",os.hostname())

console.log("type :",os.type())

console.log("release :",os.release())

console.log("platform :", os.platform());
