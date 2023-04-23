import { hrtime } from 'node:process';

console.log('Start')

const start = Date.now() // 28734736374
const startInNanoSeconds = hrtime.bigint() // 28734736374000000000n

setTimeout(() => {
    const difference = Date.now() - start
    const differenceInNanoSeconds = hrtime.bigint() - startInNanoSeconds
    console.log(`Timeout executed after: ${difference}ms, ${differenceInNanoSeconds}ns`)
}, 2000)

console.log('End')
