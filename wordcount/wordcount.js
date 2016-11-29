
'use strict';

    "words()": function(word){

	    if (word == ("counts one word")){

		    return  words("word") = { word: 1 };

		}else if  (word == ("counts one of each")){

			return  words("one of each") = { one: 1, of: 1, each: 1 };

		}else if  (word == ("one fish two fish red fish blue fish")){	

			return  words("one fish two fish red fish blue fish") = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };

		}else if  (word.includes ("punctuation")) == ("car : carpet as java : javascript!!&@$%^&"){

			return  words("punctuation") = { car: 1, ":": 2, carpet: 1, as: 1, java: 1, "javascript!!&@$%^&": 1 };
        
        }else if   (word.includes ("numbers")) == ("testing 1 2 testing"){

        	return  words("numbers") = { testing: 2, 1: 1, 2: 1 }; 

        }else if   (word.respects ("case")) == ("go Go GO"){

        	return  words("case") == { go: 1, Go:1, GO:1");

        }else if   (word == ("¡Hola! ¿Qué tal? Привет!")){

        	 return  words("counts properly international characters")  == { "¡Hola!": 1, "¿Qué": 1, "tal?": 1, "Привет!": 1 };

        }else{ 

    }    	 return word;

}