const addPriceBtn = document.querySelector('.addPricebtn');
addPriceBtn.addEventListener('click',(event)=>{
    event.preventDefault()
        const data ={
        name : document.querySelector('.foodname').value,
        price: document.querySelector('.foodprice').value

    }
    console.log(data)

    
    fetch("http://localhost:3000/pricesubmit", {
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

//display

const pricedata = document.querySelector('.pricedata');
console.log(pricedata);

fetch ("http://localhost:3000/pricedisplay")
.then (response => {
    
    return response.json();
    
}
)
.then(data => {
    console.log(data);
     const body=document.querySelector('.price-tbody')
    for (let i = 0; i < data.length; i++) {
       
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

            
        </tr>
        `
    }
})
