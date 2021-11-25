fetch('https://aslnk_api.deta.dev/api/stats')
  .then(function (response) {
	// The API call was successful!
	return response.json();
})
  .then(function (data) {      document.getElementById("linksclk").innerHTML = data.clicks;
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
