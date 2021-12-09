const {runMemoryChart} = require("./src/memory-chart");

// command line arguments parsing and handling

const process = require('process');
const {Command} = require('commander');
const program = new Command();
program
    .option('--leak-classes', 'leaks new LeakyClass instances every 100 ms')
    .option('--leak-objects', 'leaks new anonymous object every 100 ms')
    .option('--leak-buffers', 'allocates some Buffer instances every 100 ms')
    .option('--leak-callbacks', 'register a new setInterval function every 100 ms')
    .option('--allocate-classes', 'allocate new LocalClass instance every 100 ms and clean it up after 1s')
    .option('--chart', 'show memory chart')
    .option('--log', 'log memoryUsage')
    .usage()

program.parse(process.argv)
const options = program.opts()

console.log("Running with options:", options)

// call demo functions based on options

if (options.log) {
    setInterval(logMemoryUsage, 2000)
}

if (options.chart) {
    runMemoryChart(200)
}

if (options.leakObjects) {
    setInterval(leakObjects, 100)
}

if (options.leakClasses) {
    setInterval(leakObjects, 100)
}

if (options.leakCallbacks) {
    setInterval(leakCallbacks, 100)
}

if (options.leakClasses) {
    setInterval(leakClasses, 100)
}

if (options.allocateClasses) {
    setInterval(allocateLocalClasses, 100)
}

if (options.leakBuffers) {
    setInterval(leakBuffers, 100)
}

// example of object assigned to the "global" context
class TrullyGlobalObject {}
global.trulyGlobalObject = new TrullyGlobalObject()


// demo functions implementation

let globalArray = []


function logMemoryUsage() {
    const memoryUsage = process.memoryUsage()
    console.log("Memory usage stats:", memoryUsage)
}


function leakObjects() {
    globalArray.push({stuff: Array(10000).fill("stuff")})
}

class LocalClass {
    stuff = Array(10000).fill("stuff")
}

function allocateLocalClasses() {
    const localInstance = new LocalClass()
    setTimeout(() => { let foo = localInstance.stuff }, 1000)
}

function leakBuffers() {
    globalArray.push(Buffer.alloc(100000))
}

function leakCallbacks() {
    setInterval(() => {}, 10000)
}

class LeakyClass {
    stuff = Array(10000).fill("stuff")
}

function leakClasses() {
    globalArray.push(new LeakyClass())
}