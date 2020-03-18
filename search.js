var search = document.getElementsById('search');
var container =  document.getElementsByClassName('container');

search.addEventListener('keyup', function(){
    
    var ajax =  new XMLHttpRequest();
  
    ajax.onreadystatechange = function(){
  
      if(ajax.readyState == 4 && ajax.status == 200){
          container.innerHTML == ajax.responseText;
      }
    
    }
  
      ajax.open('GET', 'output.html?search=' )
  
});