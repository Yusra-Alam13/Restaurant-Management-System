// display

const revdata = document.querySelector('.reviewdata');


fetch ("http://localhost:3000/reviewdisplay")
.then (response => {
    
    return response.json();
    
}
)
.then(revdata => {
    console.log(revdata);
     const body=document.querySelector('.tbody')
    for (let i = 0; i < revdata.length; i++) {
        // console.log(data[i]);;
       
        body.innerHTML+=`
        <tr>
            <td>
                ${revdata[i][0]}
            </td>

            
            <td>
                ${revdata[i][1]}
            </td>

            
            <td>
                ${revdata[i][2]}
            </td>

            
            <td>
                ${revdata[i][3]}
            </td>

            
            <td>
                ${revdata[i][4]}
            </td>

              <td>
                ${revdata[i][5]}
            </td>
            
        </tr>
        `
    }
})
