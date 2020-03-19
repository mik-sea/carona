let res = {}
//prepare for get api from api.kawalcorona.com
var url = "https://api.kawalcorona.com/indonesia"
// function getDetail(hasil){
//   console.log(hasil)
//     hasil.forEach(response=>{
//         // let dataa = response.attributes
//         let dt = response
//         // console.log(dataa)
//         // res.negara = dataa.Country_Region
//         // res.lat = dataa.Lat
//         // res.long = dataa.Long_
//         // res.terinfeksi = dataa.Confirmed
//         // res.meninggal = dataa.Deaths
//         // res.sembuh = dataa.Recovered
//         // res.aktif = dataa.Active
//         // res.last_update = new Date(1584469982000/1000)
//         // console.log(res.last_update)
//         $("#negara").append(`<a class="dropdown-item" href="#">${res.negara}</a>`)
//         $("div#dataa").append(`<div class="col-lg-6 pb-5">`+
//             `<div class="card text-center">`+
//             `<div class="card-header" id="nama-negara">`+
//             `<h5 class="card-title">${dt.name}</h5>`+
//             `</div>`+
//             `<div class="card-body" id="hasil">`+
//             `<p class="card-text">Total Terinfeksi : ${dt.positif}</p>`+
//             `<p class="card-text">Total Meninggal : ${dt.meninggal}</p>`+
//             `<p class="card-text">Total Sembuh : ${dt.sembuh}</p>`+
//             // `<p class="card-text">Total Aktif : ${dt.aktif}</p>`+
//             `<p class="card-text">Last Update : ${dt.lastupdate}</p>`
//             `</div>`+
//             `</div>`+
//         `</div>`)
//     })
// }

// fetch(url).then(response=>{
//     response.json().then(hasil=>{
//         getDetail(hasil)
//     })
// })
    $.ajax({
        url:url,
        type:"GET",
        headers:{
            "content-type":"application/json",
            // "Access-Control-Allow-Origin":"*",
        },
        success:(res)=>{
            console.log(res)
        }
    })