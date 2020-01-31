window.onload = function(){
	//Een variabele die alle div met de class icoon in een array opslaat
	var mobile = document.getElementsByClassName('icon');

	//Een for loop die alles klikbaar maakt
	for (var i = 0; i < mobile.length; i++) {
		//Het klikbaar maken per item in de array.
		mobile[i].onclick = function(){
			//per item in de array de correcte paragraaf pakken om zichtbaar te maken
			this.parentNode.getElementsByClassName('text')[0].classList.toggle('textShow');
		};
	}
};