const pump = require('pump')
const chart = require('chart-stream')
const csvWriter = require('csv-write-stream')
const opn = require('opn')
const memoryUsage = require('memory-usage')

function runMemoryChart(samplingRateInMs) {
    pump(
        memoryUsage(samplingRateInMs),
        csvWriter(),
        chart(opn)
    )
}

module.exports = {
    runMemoryChart
}