
var Translator = (function(newTranslator) {
  var words = {
  	"merry": "Feliz",
  	"christmas": "Navidad",
  	"and": "y",
  	"happy": "Feliz",
  	"new": "Nuevo",
  	"year": "Año" 
 }
 newTranslator.getSpanish = function(textArray) {
     var translatedText = "";
     for (var i = 0; i < textArray.length; i++) {
       translatedText += words[textArray[i]] + " ";
     };
     return translatedText;
   }
 return newTranslator;
   }
)(Translator);

