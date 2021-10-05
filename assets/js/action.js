document.getElementById("myinput").onclick = function() {
  var link = document.getElementById("linkinput").value;
  var slug = document.getElementById("ctmslug").value;
  var data = {
    "url": link,
    "slug": slug,
    "email": "guybruh06@gmail.com", 
    "domain": "www.aslnk.ml", 
    "workspace_id": "34184",
    "api_key": "TPJ0B0QP38ItBbaj/3rj1w=="
    }; 
 fetch('https://app.linklyhq.com/api/v1/link', {
    method: 'post',
    headers: {
      
      'accept': 'application/json',
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify(data)
  }) .then(function(response) {
        return response.json();
    }) 
    .then(function(data){ 
    document.getElementById("message").innerHTML = "Your short link is " + data.slug })
    document.getElementById("linkinput").value='';
 }