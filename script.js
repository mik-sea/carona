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
        res.waktu = new Date(dataa.Last_Update).toString()
        // console.log(res.waktu)
        // res.last_update = `${waktu.getHours()}:${waktu.getMinutes()}:${waktu.getSeconds()}`
        // console.log(res.last_update.getTimes())
        // console.log(res.last_update)
        $("#negara").append(`<a class="dropdown-item" href="#">${res.negara}</a>`)
        $("div#dataa").append(`<div class="col-lg-6 pb-5">`+
            `<div class="card text-center bg-light bg-dark">`+
            `<div class="card-header" id="nama-negara" data-theme="dark">`+
            `<h5 class="card-title">${res.negara}</h5>`+
            `</div>`+
            `<div class="card-body" id="hasil" data-theme="dark">`+
            `<p class="card-text">Total Terinfeksi : ${res.positif} Jiwa</p>`+
            `<p class="card-text">Total Meninggal : ${res.meninggal} Jiwa</p>`+
            `<p class="card-text">Total Sembuh : ${res.sembuh} Jiwa</p>`+
            `<p class="card-text">Total Aktif : ${res.aktif} Jiwa</p>`+
            `<p class="card-text">Last Update : ${res.waktu}</p>`+
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
  
    localStorage.setItem('search', JSON.stringify(res))
    const data = JSON.parse(localStorage.getItem('search'))
    alert(data);
  
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