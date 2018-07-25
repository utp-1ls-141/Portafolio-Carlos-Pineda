function Calculo(){
    
    var x = document.forms["formulario"]["str1"].value;
    var y = document.forms["formulario"]["str2"].value;

    var res = "";

    if (x.length !== y.length){
        document.getElementById("resiso").innerHTML = "No es isomorfica, longitud distinta.";
        $("#myModal").modal();
        return false;
    }

    var map = {};
    for(var i = 0; i < x.length; i++) {
        var a = x[i]; 
        var b = y[i];
        if (typeof map[a] === "undefined") {
            map[a] = b;

        // Buscar errores en la primera
        } else if (map[a] !== b) {
            document.getElementById("resiso").innerHTML = "No es isomorfica.";
            $("#myModal").modal();
            return false;
        }

        // Buscar errores en la segunda
        for (var key in map) {
            if (key !== a && b === map[key]) {
            document.getElementById("resiso").innerHTML = "No es isomorfica.";
            $("#myModal").modal();
            return false;
            }
        }
    }

    //alert(document.getElementById("myModal"));
    document.getElementById("resiso").innerHTML = "Es isomorfica";
    $("#myModal").modal();
    return true;
}