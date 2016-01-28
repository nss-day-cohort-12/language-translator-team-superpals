document.getElementById("translateButton").onclick = function() {
	getInfo();
};

var Translator = (function () {
	var words = { "Merry": "Feliz", "Christmas": "Navidad", "new": "nuevo", "and": "y", "year": "año", "everybody": "todos"};
	var firstString = "Merry Christmas and Merry new year"; //we can feed this var with getElementById
	var arrayFirstStrings = firstString.split(" "); // split by " " (space) to translate each word
	
	var translatedWords = "";
		for (var i=0; i<arrayFirstStrings.length; i++)  { // I don't know how to convert this for loop to a array.method
			console.log(i + " - " + arrayFirstStrings[i] + " - " + words[arrayFirstStrings[i]]);
			translatedWords += words[arrayFirstStrings[i]] + " ";
	}
console.log("translatedWords", translatedWords);

}) ();

// var inputTree = { one: "tree", two: "house"};
// console.log( inputTree.two);
 	
// 		


document.getElementById("translateButton").onclick = function() {
	getInfo();
};
// initializing input variables so they are accesible on the global scope
var phrase;
var language;
// IFFE that's holding german translation and returns access getGerman translator function
var Translator = (function() {
  var words = {
  	"merry": "fröhlich",
  	"christmas": "Weihnachten",
  	"and": "und",
  	"happy": "glücklich",
  	"new": "neu",
  	"year": "Jahr" 
  }
  return {
    getGerman: function(textArray) {
    	var translatedText = "";
    	for (var i = 0; i < textArray.length; i++) {
    		translatedText += words[textArray[i]] + " ";
    	};
    	return translatedText;
    }
  };
})();
// function to get input values and convert text string to array
// is currently also calling the translate function (needs to be moved)
function getInfo() {
	var phraseString = document.getElementById("inputText").value;
	phrase = phraseString.split(" ");
	language = document.getElementById("languageType").value;
    console.log(phrase);
    console.log(language);
	console.log(Translator.getGerman(phrase));
};




