


// let sum = doubleAfter2Seconds(10);
// sum += doubleAfter2Seconds(20);
// sum += doubleAfter2Seconds(30);
// console.log(sum);



// const addprom = (x) => {
//     return new Promise((resolve, reject) => {
//         doubleAfter2Seconds(10).then((a) => {
//             doubleAfter2Seconds(20).then((b) => {
//                 doubleAfter2Seconds(30).then((c) => {
//                     resolve(x + a + b + c);
//                 })
//             })
//         })
//     })
// }


// addprom(10).then(res => { console.log(res) });






function doubleAfter2Seconds(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    });
}

// (async () => {
//     const a = await doubleAfter2Seconds(10);
//     const b = await doubleAfter2Seconds(20);
//     let i = a + b;
//     console.log(i);
// })();
async function add(x) {
    const a = await doubleAfter2Seconds(x);
    const b = await doubleAfter2Seconds(a);
    const c = await doubleAfter2Seconds(b);
    return a + b + c;

}

add(10).then(res => {
    console.log(res);
})
