
const orderBtn = document.querySelector('.orderBtn')
orderBtn.addEventListener('click',(event)=>{
    event.preventDefault()
        const data ={
        name : document.querySelector('.name').value,
        contact : document.querySelector('.contact').value,
        email : document.querySelector('.email').value,
        address : document.querySelector('.address').value,
  
    }
    console.log(data)

    
    fetch("http://localhost:3000/submit", {
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





// DELETE BTN HERE

console.log(orderBtn);