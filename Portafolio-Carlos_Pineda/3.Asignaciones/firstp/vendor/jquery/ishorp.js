var getData = function(){
    var texto1 = document.getElementById(cadena1).value;
    var texto2 = document.getElementById(cadena2).value;
    console.log(texto1=" "+texto2);
}

var getData = function(){
    var texto1 = document.forms["NoInternet"][text1].value;
    var texto2 = document.forms["NoInternet"][text2].value;
    console.log(texto1=" "+texto2);
}
var s = document.forms["NoInternet"][text1].value;
var t = document.forms["NoInternet"][text2].value;
function isIsomorphic(s, t) {
    if(s==null || t==null)
        return false;
 
    if(s.length != t.length)
        return false;
 
    if(s.length==0 && t.length==0)
        return true;

  var map = {};
  for(var i=0; i<s.length; i++){
        var c1 = s.charAt(i);
        var c2 = t.charAt(i);
 
        var c = getKey(map, c2);
        if(c != null && c!=c1){
            return false;
        }else if(map[c1]!=null){
            if(c2 != map[c1])
                return false;
        }else{
            map[c1]=c2;
        }
    }
 
    return true;
}
 
// a method for getting key of a target value
function getKey(map, target){
    for (var i in map)     {
        if (map[i] == target) {
            return i;
        }
    }
    return null;
}

console.log(isIsomorphic('ett','add'));

