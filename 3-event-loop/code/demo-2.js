import { readFile } from 'fs';
import { hrtime } from 'node:process';

const start = Date.now()
const startInNanoSeconds = hrtime.bigint()

console.log(`Start`)

setTimeout(() => {
    const difference = Date.now() - start
    const differenceInNanoSeconds = hrtime.bigint() - startInNanoSeconds
    console.log(`Outside Timeout callback executed - 1st after: ${difference}ms, ${differenceInNanoSeconds}ns`)
}, 10)

readFile(`./data.txt`, `utf-8`, (err, data) => {
    const difference = Date.now() - start
    const differenceInNanoSeconds = hrtime.bigint() - startInNanoSeconds
    console.log(`File I/O callback after: ${difference}ms, ${differenceInNanoSeconds}ns`)

    setTimeout(() => {
        console.log(`Inside Timeout callback executed - 3rd`)
    }, 0)

    setImmediate(() => {
        console.log(`Immediate callback executed`)
    })

    if (err) {
        console.error(err)
    } else {
        console.log(data)
    }
})

setTimeout(() => {
    const difference = Date.now() - start
    const differenceInNanoSeconds = hrtime.bigint() - startInNanoSeconds
    console.log(`Outside Timeout callback executed - 2nd after: ${difference}ms, ${differenceInNanoSeconds}ns`)
}, 0)

console.log(`End`)
