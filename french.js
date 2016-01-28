var Translator = (function(newTranslator) {
 var words = {
     "merry": "joyeux",
     "christmas": "Noël",
     "and": "et",
     "happy": "content",
     "new": "neuf",
     "year": "an" 
 }
 newTranslator.getFrench = function(textArray) {
     var translatedText = "";
     for (var i = 0; i < textArray.length; i++) {
       translatedText += words[textArray[i]] + " ";
     };
     return translatedText;
   }
 return newTranslator;
   }
 
)(Translator);