(function() {

	var cssLink = document.createElement('link');
	cssLink.setAttribute('rel', 'stylesheet');
	cssLink.setAttribute('type', 'text/stylesheet');
	cssLink.setAttribute('href', "http://www.godbolt.me/lullabot/css/retrofit.css");
	document.head.appendChild(cssLink);
	var jsLink = document.createElement('script');
	jsLink.setAttribute('type', 'text/javascript');
	jsLink.setAttribute('src', "http://www.godbolt.me/lullabot/js/retrofit.js");
	document.head.appendChild(jsLink);

	// Add meta tag, too!
	var metaCode = document.createElement('meta');
	metaCode.setAttribute('name', 'viewport');
	metaCode.setAttribute('content', 'width=device-width,initial-scale=1.0');
	document.head.appendChild(metaCode);

})();
