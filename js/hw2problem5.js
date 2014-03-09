var a = document.getElementById('myWordsToCount');
var b = document.getElementById('wordcount');

a.onkeyup = function(){
	var value = a.value;
 	var strings = String(value).replace(/ +(?= )/g,'').split(' '); //remove extra spaces and replace with one space
    b.innerHTML = strings.length;
}

