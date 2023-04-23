import { readFile } from 'fs';

console.log('Start')

process.nextTick(() => {
    console.log('Outside Next Tick callback executed')
})

Promise.resolve().then(() => {
    console.log('First outside promise callback executed')
})

readFile('./data.txt', 'utf-8', (err, data) => {
    console.log('File I/O callback')

    setTimeout(() => {
        console.log('Timeout callback executed')
    }, 0)

    setImmediate(() => {
        console.log('Immediate callback executed')
    })

    Promise.resolve().then(() => {
        console.log('Inside promise callback executed')
    })

    process.nextTick(() => {
        console.log('Inside Next Tick callback executed')
    })

    if (err) {
        console.error(err)
    } else {
        console.log(data)
    }
})

Promise.resolve().then(() => {
    console.log('Second outside promise callback executed')
})

process.nextTick(() => {
    console.log('Second outside Next Tick callback executed')
})

console.log('End')
