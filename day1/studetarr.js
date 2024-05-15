ar = [[1, "Akhil", "CSIT"], [2, "Abhi", "CSE"], [3, "Anil", "ECE"]];
console.log(ar[0] + " " + ar.length);


const getDetails = (id) => {
    return new Promise((resolve, reject) => {

        for (let i = 0; i < ar.length; i++) {
            if (ar[i][0] == id) {
                resolve(ar[i]);
            }

        }
        reject("Failes");
    })
}


getDetails(2).then(res => { console.log(res) });





//do the same with the array of objects in the form of returning the promise

var arrofobj = [
    { id: 1, name: 'Akhil', branch: 'CSIT' },
    { id: 2, name: 'Abhi', branch: 'CSE' },
    { id: 3, name: 'Anil', branch: 'ECE' }
]

