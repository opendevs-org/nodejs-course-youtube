import { hrtime } from 'node:process';

console.log('Start')

const start = Date.now()
const startInNanoSeconds = hrtime.bigint()

setTimeout(() => {
    const difference = Date.now() - start
    const differenceInNanoSeconds = hrtime.bigint() - startInNanoSeconds
    console.log(`Timeout executed after: ${difference}ms, ${differenceInNanoSeconds}ns`)
}, 2000)

console.log('End')
