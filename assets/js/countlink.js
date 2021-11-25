fetch('https://aslnk_api.deta.dev/api/stats')
  .then(function (response) {
	// The API call was successful!
	return response.json();
})
  .then(function (data) {      document.getElementById("linkscrt").innerHTML = data.links;
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
