
const addEmployeeBtn = document.querySelector('.addEmployeebtn');
addEmployeeBtn.addEventListener('click',(event)=>{
    event.preventDefault()
        const data ={
        name : document.querySelector('.empname').value,
        salary: document.querySelector('.empsalary').value,
        designation : document.querySelector('.empdesignation').value,
  
    }
    console.log(data)

    
    fetch("http://localhost:3000/empsubmit", {
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok){
            alert("Data Inserted Successfully!!")
        }
    })
})

// display

const empdata = document.querySelector('.emp-data');
console.log(empdata);

fetch ("http://localhost:3000/empdisplay")
.then (response => {
    
    return response.json();
    
}
)
.then(empdata => {
    console.log(empdata);
     const body=document.querySelector('.emp-tbody')
    for (let i = 0; i < empdata.length; i++) {
        // console.log(data[i]);;
       
        body.innerHTML+=`
        <tr>
            <td>
                ${empdata[i][0]}
            </td>

            
            <td>
                ${empdata[i][1]}
            </td>

            
            <td>
                ${empdata[i][2]}
            </td>

            
            <td>
                ${empdata[i][3]}
            </td>
  
        </tr>
        `
    }
})


//DELETION

const deleteEmpButton= document.querySelector('.deleteEmpBtn');
deleteEmpButton.addEventListener('click', (event) => {
    event.preventDefault();
    let empName = document.querySelector('.deleteName').value;
    if (!empName) {
        alert("Please enter a Employee Name");
        return;
    }
   

    fetch('http://localhost:3000/empdelete', {
        method: 'DELETE',
        body: JSON.stringify({ name: empName }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert("Data Deleted Successfully!!");
        } else {
            alert("Failed to delete data");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error deleting data");
    });
});

 













