/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
let res = []
//prepare for get api from api.kawalcorona.com
var url = "https://api.kawalcorona.com"
fetch(url).then(response=>{
  response.json().then(hasil=>{
    hasil.forEach(res=>{
      let dataa = res.attributes
      getDetail(dataa)
    })
  })
})

function getDetail(data){
  console.log(data)
  data.json().then(hasil=>{
    res.negara = hasil.Country_Region
    res.lat = hasil.Lat
    res.long = hasil.Long_
    res.terinfeksi = hasil.Confirmed
    res.meninggal = hasil.Deaths
    res.sembuh = hasil.Recovered
    res.aktif = hasil.Active
  })
  console.log(res)
}
