const process = require('process');

//log memory usage stats to console every 2 seconds
setInterval(logMemoryUsage, 2000)

setInterval(allocateGlobalObjects, 100)


const globalArray = []

function logMemoryUsage() {
    const memoryUsage = process.memoryUsage()
    console.log(memoryUsage)
}


function allocateGlobalObjects() {
    globalArray.push(Array(10000).fill("stuff"))
}