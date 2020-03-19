var search = document.getElementById('search');
var container =  document.getElementById('dataa');

function cetak() {
    var search1 = document.getElementById("search").value ;
    document.getElementById("demo").innerHTML = "<b>" + search1 +"</b>";
}


// search.addEventListener('keyup',function(){  
//   var ajax =  new XMLHttpRequest();
//     ajax.onreadystatechange = function(){
//         if(ajax.readyState == 4 && ajax.status == 200){
//             container.innerHTML = ajax.responseText;
//         }
//     }
//     ajax.open('GET', 'output.js?search=' + search.value, true);
//     ajax.send();  
    
// })