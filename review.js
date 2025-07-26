const submitBtn = document.querySelector('.submitBtn')
submitBtn.addEventListener('click',(event)=>{
    event.preventDefault()
        const data ={
        name : document.querySelector('.name').value,
        contact : document.querySelector('.contact').value,
        email : document.querySelector('.email').value,
        food : document.querySelector('.food').value,
        review : document.querySelector('.review').value,

  
    }
    console.log(data)

    
    fetch("http://localhost:3000/reviewsubmit", {
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
