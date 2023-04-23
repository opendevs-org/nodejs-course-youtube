console.log('start');

process.nextTick(() => {
    console.log('nextTick');
});

Promise.resolve().then(() => {
    console.log('promise');
});

setTimeout(() => {
    console.log('timeout');

    process.nextTick(() => {
        console.log('nextTick inside timeout');
    });

    Promise.resolve().then(() => {
        console.log('promise inside timeout');
    });
}, 0);

console.log('end');
