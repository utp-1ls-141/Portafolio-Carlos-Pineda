function Calculo(){
 
    var x = document.forms["formulario"]["str1"].value;
    var y = document.forms["formulario"]["str2"].value;
    var z = document.forms["formulario"]["str3"].value;

    var res = "";

    if (x.length !== y.length){
        document.getElementById("resiso").innerHTML = "No es isomorfica, longitud distinta.";
        $("#myModal").modal();
        return false;
    }

    var sia;
    var sib;
    var sison;

    var map = {};
    for(var i = 0; i < x.length; i++) {
        var a = x[i]; 
        var b = y[i];
        var c = z[i];
        
        if (typeof map[a] === "undefined") {
            map[a] = b;

        // Buscar errores en la primera
        } else if (map[a] !== b) {
            document.getElementById("resiso").innerHTML = "No son isomorficas.";
            $("#myModal").modal();
            return false;
        }

        // Buscar errores en la segunda
        for (var key in map) {
            if (key !== a && b === map[key]) {
            document.getElementById("resiso").innerHTML = "No son isomorficas.";
            $("#myModal").modal();
            return false;
            }
        }   

    }

    var map2 = {};
    
    for(var i = 0; i < x.length; i++) {
        var a = x[i]; 
        var b = y[i];
        var c = z[i];
        
        if (typeof map2[a] === "undefined") {
            map2[a] = c;

        // Buscar errores en la primera
        } else if (map2[a] !== c) {
            document.getElementById("resiso").innerHTML = "No son isomorficas.";
            $("#myModal").modal();
            return false;
        }

        // Buscar errores en la segunda
        for (var key in map2) {
            if (key !== a && c === map2[key]) {
            document.getElementById("resiso").innerHTML = "No son isomorficas.";
            $("#myModal").modal();
            return false;
            }
        }


    }

    document.getElementById("resiso").innerHTML = "Son isomorficas";
    $("#myModal").modal();
    return true;
}


function Calculo2(){
    
    var x = document.forms["formulario2"]["str4"].value;
    
    var matriz = [[]];
    
    for (var y=0 ; y <= x-1 ; y++){
        for (var z=0 ; z <= x-1 ; z++){
            //matriz[y][z] = Math.floor((Math.random() * 9) + 1);
            console.log("y " + y + " --- " + "z " + z + " --- " + "x " + x);
            matriz[z] = 1;
            console.log(matriz);
            //matriz.fill([y].fill(Math.floor((Math.random() * 100) + 1)));

        }
        matriz.fill([y].fill(Math.floor((Math.random() * 100) + 1)));
    
    }
    
    mat2=matriz;
    console.log(mat2);

    //DIAGONAL PRINCIPAL
    for (y=0 ; y <= x - 1 ; y++){

         if (matriz[y][y] % 23 == 0){
        }
        else{
            matriz[y][y]=Math.floor((Math.random() * 100) + 1);
            y--;
        }

    }
    
   
    //DIAGONAL SECUNDARIA
    for (y=0 ; y <= x - 1 ; y++){

        if (esPrimo(matriz[x-y-1][x-y-1])){

       }
       else{

        matriz[x-y-1][x-y-1]=Math.floor((Math.random() * 100) + 1);

       }


   } 

    console.log("final");
    console.log(matriz);

    //matriz[2[3]]=1;
    var cadena = ""
 
    for (y=0 ; y <= x - 1 ; y++){

        cadena+=  "<br>" + matriz[y];
        
        

    }



    //alert(document.getElementById("myModal"));
    document.getElementById("resiso").innerHTML = "Matriz: " + cadena;
    $("#myModal").modal();
    return;
    
}

function esPrimo(numero){

    contador = 2;
    primo = true;
    while ((primo) && (contador!=numero)){
        if (numero % contador == 0)
        primo = false;
        contador++;
    }
    return primo;
}

function Calculo3(){
 
    var x = document.forms["formulario3"]["str4"].value;

    var y;

    if (palindrome(x) == true){
        
        document.getElementById("resiso").innerHTML = "Es doblemente palindromo";

    }
    else{
        document.getElementById("resiso").innerHTML = "No es doblemente palindromo";
    }

    $("#myModal").modal();
    return true;

}

function palindrome(myString){

    /* remove special characters, spaces and make lowercase*/
    var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var removeChar2 = removeChar.toString(2);
    
    /* reverse removeChar for comparison*/
    var checkPalindrome = removeChar.split('').reverse().join('');
    var checkPalindrome2 = removeChar2.split('').reverse().join('');
    
    /* Check to see if myString is a Palindrome*/
    if(removeChar === checkPalindrome && removeChar2 === checkPalindrome2){
      
        return true
    }
    else{
      
        return false
    }
    }