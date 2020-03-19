var search = document.getElementById('search');
var container =  document.getElementsByClassName('');

search.addEventListener('keyup', function(){
    
    var ajax =  new XMLHttpRequest();
  
    ajax.onreadystatechange = function(){
  
      if(ajax.readyState == 4 && ajax.status == 200){
          container.innerHTML = ajax.responseText;
      }
    
    }
  
      ajax.open('GET', 'output.html?search=' + search.value, true);
      ajax.send(); 
      
  
}   