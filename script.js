/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

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
    // $("#hasil").append(`<p class="card-text">Total Terinfeksi : ${res.terinfeksi}</p>`+
    //                   `<p class="card-text">Total Meninggal : ${res.meninggal}</p>`+
    //                   `<p class="card-text">Total Sembuh : ${res.sembuh}</p>`+
    //                   `<p class="card-text">Total Aktif : ${res.aktif}</p>`)
    })
}

fetch(url).then(response=>{
  response.json().then(hasil=>{
    getDetail(hasil)
  })
})

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }    
}
toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
