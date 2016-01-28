 var Translator = (function(newTranslator) {
 var words = {
     "merry": "marah",
     "christmas": "eid almilad",
     "and": "w",
     "happy": "saeid",
     "new": "jadid",
     "year": "sana" 
 }
 newTranslator.getArabic = function(textArray) {
   	console.log("get arabic function", textArray);
       var translatedText = "";
       for (var i = 0; i < textArray.length; i++) {
           translatedText += words[textArray[i]] + " ";
       };
       console.log("translated now", translatedText);
       return translatedText;
   };

 return newTranslator;
 }
)(Translator);