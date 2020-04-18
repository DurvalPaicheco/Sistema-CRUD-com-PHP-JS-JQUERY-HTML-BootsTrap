

$(document).ready(function(){

    // carrega view de InserirDados
    $("#inserir").click(function(){
        $.get("/Crud-PHP-JavaScript/views/inserirdados.html", function(data){
            $("#cont").html(data);
        });
        
    });

    //Carrega view de BuscarDados
    $("#buscar").click(function(){
        $.get("/Crud-PHP-JavaScript/views/BuscarDados.html",function(data){
            $("#cont").html(data);
        });
    });


    
});

function btnEnvDados(){
   
    var formulario  = document.querySelector("form");
    formulario.addEventListener("submit", function(evento){
        evento.preventDefault();
        var nome = $("#userNome").val();
        alert(nome);
    });
}

function btnBuscarDados(){
    
    var formulario  = document.querySelector("form");
    formulario.addEventListener("submit", function(evento){
        evento.preventDefault();
        
    });
    
}





    
    
