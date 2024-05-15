async function add(a, b) {
    return (a + b);
}

console.log(add(1, 3));
console.log("Done");

//handing the promise because it always returns a promise

add(1, 3).then(res => { console.log(res) });
