/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
let data = []
var url = "https://api.kawalcorona.com"
fetch(url).then(response=>{
  response.json().then(hasil=>{
    hasil.forEach(res=>{
      let dataa = res.attributes
      console.log(dataa)
    })
  })
})
