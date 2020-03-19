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
        // res.last_update = new Date(1584469982000/1000)
        // console.log(res.last_update)
        // console.log(res.negara)
        $("#negara").append(`<a class="dropdown-item" href="#">${res.negara}</a>`)
        $(".row").append(`<div class="col-lg-6 pb-5">`+
            `<div class="card text-center">`+
            `<div class="card-header" id="nama-negara">`+
            `<h5 class="card-title">${res.negara}</h5>`+
            `</div>`+
            `<div class="card-body" id="hasil">`+
            `<p class="card-text">Total Terinfeksi : ${res.terinfeksi}</p>`+
            `<p class="card-text">Total Meninggal : ${res.meninggal}</p>`+
            `<p class="card-text">Total Sembuh : ${res.sembuh}</p>`+
            `<p class="card-text">Total Aktif : ${res.aktif}</p>`+
            // `<p class="card-text">Terakhir Update : ${res.last_update}</p>`+
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
    // $.ajax({
    //     url:url,
    //     type:"GET",
    //     headers:{
    //         // "content-type":"application/json",
    //         "Access-Control-Allow-Origin":"*",
    //     },
    //     success:(res)=>{
    //         console.log(res)
    //     }
    // })