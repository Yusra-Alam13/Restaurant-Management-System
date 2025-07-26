//DISPLAY
const data = document.querySelector('.data');
console.log(data);

fetch ("http://localhost:3000/display")
.then (response => {
    
    return response.json();
    
}
)
.then(data => {
    console.log(data);
     const body=document.querySelector('.tbody')
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);;
       
        body.innerHTML+=`
        <tr>
            <td>
                ${data[i][0]}
            </td>

            
            <td>
                ${data[i][1]}
            </td>

            
            <td>
                ${data[i][2]}
            </td>

            
            <td>
                ${data[i][3]}
            </td>

            
            <td>
                ${data[i][4]}
            </td>

            
        </tr>
        `
    }
})

//DELETE

const deleteButton= document.querySelector('.deleteBtn');
deleteButton.addEventListener('click', (event) => {
    event.preventDefault();
    let customerName = document.querySelector('.deleteName').value;
    if (!customerName) {
        alert("Please enter a Customer Name");
        return;
    }
   

    fetch('http://localhost:3000/delete', {
        method: 'DELETE',
        body: JSON.stringify({ name: customerName }),
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

 


