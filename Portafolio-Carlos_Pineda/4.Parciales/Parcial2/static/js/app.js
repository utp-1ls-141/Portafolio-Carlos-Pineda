var txt, dxd, fxf, datos;
function concatenar(){
    txt = document.getElementById("txt1").value;
    dxd = document.getElementById("txt2").value;
    fxf = txt + dxd;
    window.alert(txt+dxd);
}
function myArry(){
    var arr;
    var i = document.getElementById("").value;
    for(var j = 0; j < i; j++){
        for(var k = 0; k < i; k++){
            arr[j][k] = 0 ;
        }
    }
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var bnt = document.getElementById("secd");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    txt = document.getElementById("txt1").value;
    dxd = document.getElementById("txt2").value;
    fxf = txt + dxd;
    document.getElementById("sep").innerHTML = fxf;
    modal.style.display = "block";
}

bnt.onclick = function(){
    document.getElementById("sep").innerHTML = "volatil";
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}