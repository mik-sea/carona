/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
let res = []
//prepare for get api from api.kawalcorona.com
var url = "https://api.kawalcorona.com"

function getDetail(hasil){
  // console.log(data)
  hasil.forEach(response=>{
      let dataa = response.attributes
      // console.log(dataa)
      res.negara = dataa.Country_Region
      res.lat = dataa.Lat
      res.long = dataa.Long_
      res.terinfeksi = dataa.Confirmed
      res.meninggal = dataa.Deaths
      res.sembuh = dataa.Recovered
      res.aktif = dataa.Active
      console.log(res.negara)
      $("#negara").append(`<a class="dropdown-item" href="#">${res.negara}</a>`)
    })
}

fetch(url).then(response=>{
  response.json().then(hasil=>{
    getDetail(hasil)
  })
})
