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
        let waktuu = new Date(dataa.Last_Update)
        res.waktu = `${waktuu.toDateString()}&nbsp;${waktuu.toLocaleTimeString()}`
        $("#negara").append(`<a class="dropdown-item" href="#">${res.negara}</a>`)
        $("div#dataa").append(`<div class="col-lg-6 pb-5">`+
            `<div class="card text-center bg-light">`+
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
        cetak(res.negara)
    })
}

fetch(url).then(response=>{
    response.json().then(hasil=>{
        getDetail(hasil)
    })
})


function cetak(data) {
    var search1 = document.getElementById("search").value ;
    // console.log(search1.toLowerCase())
    localStorage.setItem('search', JSON.stringify(search1.toLowerCase()))
    let get = localStorage.getItem('search')
    if(data.toLowerCase() == get){
        // console.log("tidak")
    }else{
        // console.log(data)
    }
    // const data = JSON.parse(localStorage.getItem('search'))
    // console.log(localStorage.getItem('search'))
  
    // document.getElementById("dataa").innerHTML = "<b>" + search1 +"</b>";
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