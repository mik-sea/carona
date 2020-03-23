let res = {}

//prepare for get api from api.kawalcorona.com
var url = "https://api.kawalcorona.com"

$(document).ready(function(){
    $('#search').on('keyup', function(){
        var dataList = $(this).val().toLowerCase();
        $('.card').each(function(){
            if ($(this).filter('[searchData*="' + dataList + '"]').length > 0 || dataList.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
})
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
            res.waktu = `${waktuu.toLocaleDateString()} ${waktuu.toLocaleTimeString(undefined,{hour12:false})}`
            $("#negara").append(`<a class="dropdown-item" href="luar-negeri.html?negara=${res.negara.toLowerCase()}">${res.negara}</a>`)
            $("div#dataa").append(
                `<div class="col-lg-6 mb-1">`+
                `<div class="card text-center bg-light" searchData="${res.negara.toLowerCase()}">`+
                `<div class="card-header bg-dark" id="nama-negara" data-theme="dark">`+
                `<h5 class="card-title">${res.negara}</h5>`+
                `</div>`+
                `<div class="card-body" id="hasil" data-theme="dark">`+
                `<p class="card-text">Total Terinfeksi : ${res.positif} Jiwa😱</p>`+
                `<p class="card-text">Total Meninggal : ${res.meninggal} Jiwa👻</p>`+
                `<p class="card-text">Total Sembuh : ${res.sembuh} Jiwa😃</p>`+
                `<p class="card-text">Total Aktif : ${res.aktif} Jiwa😷</p>`+
                `<p class="card-text">Last Update : ${res.waktu}</p>`+
                `</div>`+
                `</div>`+
            `</div>`
            )
        // cetak(res.negara)
        })
    }
$.ajax({
    url:url,
    type:"GET",
    // headers:{
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "https://api.kawalcorona.com",
    //     "X-Content-Type-Options": "nosniff",
    // },
    success:(hasil)=>{
        getDetail(hasil)
        // console.log(hasil)
    },
    error:(err)=>{
        console.log(err)
    }
})
function cetak(data) {
    var search1 = document.getElementById("search").value ;
    // console.log(search1.toLowerCase())
    localStorage.setItem('search', JSON.stringify(search1.toLowerCase()))
    let get = localStorage.getItem('search')
    if(data.toLowerCase() == get){
        console.log("tidak")
    }else{
        console.log(data)
    }
    // const data = JSON.parse(localStorage.getItem('search'))
    // console.log(localStorage.getItem('search'))
    // document.getElementById("dataa").innerHTML = "<b>" + search1 +"</b>";
}