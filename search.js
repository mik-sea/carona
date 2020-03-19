var search = document.getElementById('search').value;
var container =  document.getElementById('dataa');

search.addEventListener('keyup',function(){  
  var ajax =  new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            container.innerHTML = ajax.responseText;
        }
    }
    ajax.open('GET', 'output.js?search=' + search.value, true);
    ajax.send();  
})