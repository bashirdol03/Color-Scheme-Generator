
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
    
     let pickedColor = document.getElementById("hex-color").value
     color = pickedColor.substring(1)
     mode = document.getElementById("color-mode").value
    
    
   fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
   .then(res => res.json())
   .then(data => {
             colorsDataArray = data.colors
             render()
             
             })
       
    
    

})   

