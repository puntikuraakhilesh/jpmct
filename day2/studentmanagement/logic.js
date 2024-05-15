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

async function editData(id,name,branch){
    
    
    
            var r= document.getElementById('rno');
            r.value = id;
            var n=document.getElementById('name');
            n.value=name;
            var b=document.getElementById('branch');
            b.value=branch;


            const a = document.createElement('button');
            const ab = document.getElementById('stuform');
            a.textContent = "EDIT"; 
            a.setAttribute("name", "editButton"); 
            ab.appendChild(a);
            var button = document.getElementById('Add');


            button.style.display = 'none';
            
            var edit = document.getElementById('editButton');
            
            del(id);
            // Add an event listener to the button
            edit.addEventListener('click',async function() {
                
    // Code to execute when the button is clicked
            r=document.getElementById('rno').value;
            n=document.getElementById('name').value;
            b=document.getElementById('branch').value;
            
            const obj={
                id:r,
                name:n,
                branch:b
            }
            
            const res = await fetch(`http://localhost:3000/users`, {
            method: "PATCH",
            
            body: JSON.stringify(data)
        });


        
                    });
                    

                    
}
