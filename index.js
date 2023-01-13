
let colorsDataArray = []

let color = `b85a9a`
let mode = `monochrome`

function render(){
    const colorsArray = colorsDataArray.map(color => color.hex.value)
    const colorsHtml = colorsArray.map(color => 
                ` <div>
                    <div class="color-div" style="background-color: ${color};"></div> 
                    <h3>${color}</h3>
                  </div>  
                `
       )
       document.getElementById("colors-container").innerHTML = colorsHtml.join('')
}



fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
   .then(res => res.json())
   .then(data => {
             colorsDataArray = data.colors
             render()
             })
       
 

   

document.getElementById("color-form").addEventListener("submit", e =>
{
    
   e.preventDefault()
    
     color = document.getElementById("hex-color").value
     mode = document.getElementById("color-mode").value
    
    
    console.log(color)
    console.log(mode)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
   .then(res => res.json())
   .then(data => {
             colorsDataArray = data.colors
             render()
             })
    
    

})   

