var button = document.getElementById('counter');

button.onclick = function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(request.readystate == XMLHttpRequest.DONE)  {
          if(request.status == 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              counter = counter + 1;
              span.innerHTML = counter.toString();
          }
      }
    };
    
    request.open('GET','http://vinuthaadella.imad.hasura-app.io/counter', true);
    request.send(null);
};