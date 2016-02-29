javascript:(function(){
	var tags = ['p', 'a', 'h1', 'h2', 'h3', 'span', '_6m7'];
	for (j = 0; j <= tags.length; j++){
		a = document.getElementsByTagName(tags[j]);
		for (var i = a.length - 1; i >= 0; i--) {
			a[i].textContent = a[i].textContent.replace(/\b(Trump)\b/g,'Drumpf');
		}
	}
	console.log('drumpfd');
})();