function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("./assets/js/cred.json", function(text){
    var data = JSON.parse(text);
});

document.getElementById("myinput").onclick = function () {
  var link = document.getElementById("linkinput").value;
  var data = {
    "domain": "aslnk.ml",
    "originalURL": link,
    "allowDuplicates": false
  };
  fetch('https://api.short.cm/links/public', {
    method: 'post',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': data
    },
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  })
    .then(function (data) {
      document.getElementById("message").innerHTML = data.shortURL
    })
  document.getElementById("linkinput").value = '';
}

{ 0}
