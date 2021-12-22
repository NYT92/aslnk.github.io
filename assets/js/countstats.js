var url = 'https://api.aslnk.ml/api/stats';

fetch(url)
  .then(function (response) {
	return response.json();
})
  .then(function (data) {      document.getElementById("linkscrt").innerHTML = data.links;
}).catch(function (err) {
	console.warn('Something went wrong.', err);
});

fetch(url)
  .then(function (response) {
	return response.json();
})
  .then(function (data) {      document.getElementById("linksclk").innerHTML = data.clicks;
}).catch(function (err) {
	console.warn('Something went wrong.', err);
});

