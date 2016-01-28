var Translator = (function(newTranslator) {
 var words = {
     "merry": "fröhlich",
     "christmas": "Weihnachten",
     "and": "und",
     "happy": "glücklich",
     "new": "neu",
     "year": "Jahr" 
 }
 newTranslator.getGerman = function(textArray) {
     var translatedText = "";
     for (var i = 0; i < textArray.length; i++) {
       translatedText += words[textArray[i]] + " ";
     };
     return translatedText;
   }
 return newTranslator;
   }
 
)(Translator);