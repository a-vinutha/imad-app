
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
      if(request.readystate == XMLHttpRequest.OPEN)  {
          if(request.status === 200){
            console.log('user logged in');  
            alert('login successful');
          }
          else if (request.status === 403){
              alert('Login Details Incorrect');
          }
          else if (request.status === 500){
              alert('Server Error');
          }
      }
    };
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://vinuthaadella.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-type',  'application/json');
    request.send(JSON.stringify({username: username,password: password}));
};