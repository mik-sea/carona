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
    })
}

fetch(url).then(response=>{
  response.json().then(hasil=>{
    getDetail(hasil)
  })
})

const darkSwitch = document.getElementById('darkSwitch');
window.addEventListener('load', () => {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener('change', () => {
      resetTheme();
    });
  }
});


/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-theme' to a 'dark'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-theme' attribute will not be set.
 * @return {void}
 */
function initTheme() {
  const darkThemeSelected =
    localStorage.getItem('darkSwitch') !== null &&
    localStorage.getItem('darkSwitch') === 'dark';
  darkSwitch.checked = darkThemeSelected;
  darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') :
    document.body.removeAttribute('data-theme');
}


/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
 * applied.
 * @return {void}
 */
function resetTheme() {
  if (darkSwitch.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('darkSwitch', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.removeItem('darkSwitch');
  }
}
