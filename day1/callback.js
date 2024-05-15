//Synchronous Java Script
const f1 = () => {
    console.log("Hello");

}
const f2 = (f1) => {
    console.log("Hey");
    f1();
}
f2(f1);

//Asynchronous JavaScript

const n = () => {
    console.log("This is the first message");
}
const x = (n) => {
    setTimeout(n, 2000);
    console.log("Finished");
}


x(n);



//Example of Callbacks
const div = (x, y) => x / y;
const mul = (x, y) => x * y;

const fu = (cal, x, y) => {
    return cal(x, y);
}

console.log(fu(div, 2, 3));
console.log(fu(mul, 2, 3));
