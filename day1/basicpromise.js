let p = new Promise((resolve, reject) => {
    let a = 4;
    if (a == 2)
        resolve("Success");
    else
        reject("Failed");
})


p.then(res => { console.log(res) })
    .catch(err => { console.log(err) });