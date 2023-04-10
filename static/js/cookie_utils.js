var operator = "=";

function getCookieValue(keyStr){
	var value = null;
	var s = window.document.cookie;
	var arr = s.split("; ");
	for(var i=0; i<arr.length; i++){
		var str = arr[i];
		var k = str.split(operator)[0];
		var v = str.split(operator)[1];
		if(k == keyStr){
			value = v;
			break;
		}
	}
	return value;
}

function setCookieValue(key,value){
	document.cookie = key+operator+value;
}
 
function clearCookie(name,domain) {
   document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; Domain="+domain+"; path=/";
}
