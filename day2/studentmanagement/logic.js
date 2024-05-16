async function fetchData(){
    const ab=document.getElementById('tablebody');
    ab.innerHTML=``;

    const res=await fetch(`http://localhost:3000/users`);
    const data=await res.json();
    data.forEach(student=>{
        const r=document.createElement('tr');
        r.innerHTML=`
        <td>${student.id}</td>
    <td>${student.name}</td>
    <td>${student.branch}</td>
    <td align="center"><button id="edit" onclick="editData('${student.id}','${student.name}','${student.branch}')"><span class="material-symbols-outlined">
    edit
    </span></button>
    <button id="del" onclick="del(${student.id})"><span class="material-symbols-outlined">
    delete
    </span></button></td>
        `
        const ab=document.getElementById('tablebody');
        ab.appendChild(r);
    })
    
}


async function addData() {
    const r = document.getElementById('rno').value;
    const n = document.getElementById('name').value;
    const b = document.getElementById('branch').value;

    // Check if any of the values are undefined
    if (!r || !n || !b) {
        alert("Please fill in all fields.");
        return;
    }

    const data = {
        id: r,
        name: n,
        branch: b
    };


        const res = await fetch(`http://localhost:3000/users`, {
            method: "POST",
            
            body: JSON.stringify(data)
        }); 
}


async function del(id) {
    
    const res = await fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        });
        fetchData();

    
    
        
}

async function editData(id) {
    const fetch = await axios.get(`http://localhost:3000/users/${id}`);
    const student = fetch.data;

    document.getElementById('rno').value = student.id;
    document.getElementById('name').value = student.name;
    document.getElementById('branch').value = student.branch;
    

    document.getElementById('stuform').onsubmit = async function(event) {
        event.preventDefault();

        await axios.patch(`http://localhost:3000/users/${id}`, {
            "id": document.getElementById('rno').value,
            "name": document.getElementById('name').value,
            "branch": document.getElementById('branch').value,
        });
        fetchData();
    };
}
