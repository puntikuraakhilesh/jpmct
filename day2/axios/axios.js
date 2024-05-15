const getD=()=>{
    axios.get("http://localhost:3000/users").then(res=>console.log(res.data))

}
const addD=()=>{
    axios.post("http://localhost:3000/users",{
        "id":5,
        "name":"Lokesh",
        "branch":"CSDS"
    }).then(res=>console.log(res.data))

}


const delD=()=>{
    axios.delete("http://localhost:3000/users/1").then(res=>console.log(res.data))

}

const upD=()=>{
    axios.patch("http://localhost:3000/users/4",{
        "branch":"Mech"
    }).then(res=>console.log(res.data))

}