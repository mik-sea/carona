let res = {}
//prepare for get api from api.kawalcorona.com
var url = "https://api.kawalcorona.com"
function getDetail(hasil){
//   console.log(hasil)
    hasil.forEach(response=>{
        let dataa = response.attributes
        // let dt = response
        // console.log(dataa)
        res.negara = dataa.Country_Region
        res.lat = dataa.Lat
        res.long = dataa.Long_
        res.positif = dataa.Confirmed
        res.meninggal = dataa.Deaths
        res.sembuh = dataa.Recovered
        res.aktif = dataa.Active
        let waktu = new Date(dataa.Last_Update / 1000)
        console.log(waktu)
        // res.last_update = `${waktu.getHours()}:${waktu.getMinutes()}:${waktu.getSeconds()}`
        // console.log(res.last_update.getTimes())
        // console.log(res.last_update)
        $("#negara").append(`<a class="dropdown-item" href="#">${res.negara}</a>`)
        $("div#dataa").append(`<div class="col-lg-6 pb-5">`+
            `<div class="card text-center">`+
            `<div class="card-header" id="nama-negara">`+
            `<h5 class="card-title">${res.negara}</h5>`+
            `</div>`+
            `<div class="card-body" id="hasil">`+
            `<p class="card-text">Total Terinfeksi : ${res.positif}</p>`+
            `<p class="card-text">Total Meninggal : ${res.meninggal}</p>`+
            `<p class="card-text">Total Sembuh : ${res.sembuh}</p>`+
            `<p class="card-text">Total Aktif : ${res.aktif}</p>`+
            `<p class="card-text">Last Update : ${res.last_update}</p>`+
            `</div>`+
            `</div>`+
        `</div>`)
    })
}

fetch(url).then(response=>{
    response.json().then(hasil=>{
        getDetail(hasil)
    })
})


function cetak() {
    var search1 = document.getElementById("search").value ;
  
    localStorage.setItem('items', JSON.stringify(res))
  
    document.getElementById("dataa").innerHTML = "<b>" + search1 +"</b>";
}



    // $.ajax({
    //     url:url,
    //     type:"GET",
    //     headers:{
    //         "content-type":"application/json",
    //         "Access-Control-Allow-Origin":"*"
    //     },
    //     success:(res)=>{
    //         console.log(res)
    //     }
    // })