document.getElementById("myinput").onclick = function() {
  var link = document.getElementById("linkinput").value;
  var data = {
    "domain":"aslnk.ml",
    "originalURL": link,
    "allowDuplicates":false }; 
 fetch('https://api.short.cm/links/public', {
    method: 'post',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': 'pk_vDYFhUEvavPMEEDR'
    },
    body: JSON.stringify(data)
  }) .then(function(response) {
        return response.json();
    }) 
    .then(function(data){ 
    document.getElementById("message").innerHTML = "Your short link is " + data.shortURL })
    document.getElementById("linkinput").value='';
 }
