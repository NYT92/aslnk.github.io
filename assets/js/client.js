document.getElementById("myinput").onclick = function () {
var link = document.getElementById("linkinput").value;
fetch(`https://api.aslnk.ml/api/create?link=${link}`)
    .then((res) => res.json())
    .then(function (data) {
      appendData(data);
    });
  document.getElementById("linkinput").value = "";
};

function appendData(data) {
  var mainContainer = document.getElementById("contentresult");
  var div = document.createElement("div");
  div.innerHTML =
  '<div class="alert alert-success alert-dismissible" role="alert"><button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button><span><strong>Links :</strong></span><span>' + data.shortURL + '<br /></span><button class="btn btn-primary" type="button" style="background: transparent;color: rgb(0,0,0);border-width: 1px;border-color: rgb(0,0,0);border-radius: 0px;margin-top: 6px;" onclick="copyTxt()">Copy to Clipboard <i class="fa fa-clipboard"></i></button></div>';
  mainContainer.appendChild(div);
}

document.getElementById("copybtn").addEventListener("click", copyTxt);

function copyTxt() {
  var copyText = document.getElementById("text");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
}

var url = 'https://api.aslnk.ml/api/stats';
fetch(url)
  .then(function (response) {
	return response.json();
})
  .then(function (data) {     
      document.getElementById("linkscrt").innerHTML = data.links;
}).catch(function (err) {
      document.getElementById("linkscrt").innerHTML = 'Error : ' + err.message ;
});

fetch(url)
  .then(function (response) {
	return response.json();
})
  .then(function (data) {      
    document.getElementById("linksclk").innerHTML = data.clicks;
}).catch(function (err) {
	  document.getElementById("linksclk").innerHTML = 'Error : ' + err.message;
});

