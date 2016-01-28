document.getElementById("translateButton").onclick = function() {
	getInfo();
};

// initializing input variables so they are accesible on the global scope
var phrase;
var language;
var outputTarget = document.getElementById("translationOutput");


//initial IIFE
var Translator = (function() {
	//Dont really need anything in here, really
  return {
    
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
	console.log(Translator);
	selectLang(language);
};
console.log("tran", Translator);

// //switch for cases for different languages
function selectLang(language){
	switch (language){
		case "German":
			console.log("switch1", Translator);
			outputTarget.innerHTML = Translator.getGerman(phrase);
			break;
		case "French":
			console.log("switch2", Translator);
			outputTarget.innerHTML = Translator.getFrench(phrase);
			break;
		case "Arabic":
			console.log("switch3", Translator);
			outputTarget.innerHTML = (Translator.getArabic(phrase));
			break;
		case "Spanish":
			console.log("switch4", Translator);
			outputTarget.innerHTML = Translator.getSpanish(phrase);
			break;
	};
};
console.log("tran", Translator);