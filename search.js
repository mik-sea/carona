var search = document.getElementById('search');
var container =  document.getElementByClassName('container');

search.addEventListener('keyup', function(){
    
    var ajax =  new XMLHttpRequest();
  
    ajax.onreadystatechange = function(){
  
      if(ajax.readyState == 4 && ajax.status == 200){
          container.innerHTML = ajax.responseText;
      }
    
    }
  
      ajax.open('GET', 'index.html?search=' + search.value, true);
      ajax.send(); 
      
  
});