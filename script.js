
//globale arrays für die daten
var names = [];
var age = [];
var gender = [];


/*
 *
 *Funktion wird aufgerufen nachdem die Seite geladen wird. Listener für
 *Buttons werden registriert.
 */
function init(){
	//alert("Init aufgerfufen!");
	//listener save button registrieren
	var saveButton = document.getElementById("save_button");
	saveButton.addEventListener("click", clickedSpeichern, true);

	var deleteButton = document.getElementById("delete_button");
	deleteButton.addEventListener("click", clickedLoeschen, true);


}

/*
 *Funktion liest die Daten aus dem localStorage
 */
 function getLocalStorageData(){
 	//hole die gespeicherten Daten
 	names = JSON.parse(localStorage["names"]);
 	age = JSON.parse(localStorage["age"]);
 	gender = JSON.parse(localStorage["gender"]);
 }


 /*
  *Funktion reagiert auf den Klick auf den Speichern Button.
  *Eingabe des Benutzers wird ausgewertet, gespeichert und die
  *Liste wird aktualisiert
  */
  function clickedSpeichern(event){
  	//alert("clicked speichern");
  	var inputNameField = window.document.getElementById("name");
  	var inputName = inputNameField.value;

  	//nutzereingaben prüfen
  	if(inputName == ""){
  		alert("Es wurde kein Name eingegeben!");
  	}
  	else{

  		//name speichern
  		names.push(inputName);
  		localStorage["names"] = JSON.stringify(names);

  		//alter speichern
  		var inputAge = (document.getElementById("sliderAlter")).value;
  		age.push(inputAge);
  		localStorage["age"] = JSON.stringify(age);

  		//geschlecht speichern
  		var inputGender = (document.getElementById("flipGeschlecht")).value;
  		//alert("Gender: " + inputGender);
  		gender.push(inputGender);
  		localStorage["gender"] = JSON.stringify(gender);

  		//anzeige: daten gespeichert
  		alert("Daten gespeichert!");



  		//update tabelle
  		showData();

  	}
}

function clickedLoeschen(exceptions){
	

	var storage = localStorage;
  	var keys = [];
  	var exceptions = [].concat(exceptions); //prevent undefined

  	//get storage keys
  	$.each(localStorage, function(key, val) {
    	keys.push(key);
  	});

  	//loop through keys
  	for( i=0; i<keys.length; i++ ){
	    var key = keys[i];
	    var deleteItem = true;
	    //check if key excluded
    	for( j=0; j<exceptions.length; j++ ){
      		var exception = exceptions[j];
      		if( key == exception ) deleteItem = false;
    	}
    	//delete key
	    if( deleteItem ){
	      	localStorage.removeItem(key)
	    }
 	}

 	names = [];
  	age = [];
  	gender = [];
 	alert("Liste gelöscht!");
}


/*
 *Funktion zeigt Daten in einer Liste anzeigen
 */
 function showData(){

 	//löschze derzeitige listset
 	$("#datalist").empty();


 	//liste zusammenbauen
 	var i = 0;
 	names.forEach(function(entry){
 		$("#datalist").append("<li>" + entry + ", " + age[i] + ", " +gender[i] + "</li>");
 		i++;
 	});
}