import { readFile } from 'fs';

console.log('Start')

setTimeout(() => {
    console.log(`Outside Timeout callback executed`)
}, 10)

readFile('./data.txt', 'utf-8', (err, data) => {
    console.log('File I/O callback')

    setTimeout(() => {
        console.log('Timeout callback executed')
    }, 0)

    setImmediate(() => {
        console.log('Immediate callback executed')
    })

    if (err) {
        console.error(err)
    } else {
        console.log(data)
    }
})

console.log('End')
