

$(document).ready(function(){

    // carrega view de Inserir Dados
    $("#inserir").click(function(){
        $.get("/Crud-PHP-JavaScript/views/inserirdados.html", function(data){
            $("#cont").html(data);
        });
        
    });

    $("env").click(function(){
        alert("quack");
    });

    //Carrega view de BuscarDados
    $("#buscar").click(function(){
        $.get("/Crud-PHP-JavaScript/views/BuscarDados.html",function(data){
            $("#cont").html(data);
        });
    });
});

function envDados(){
    var formulario  = document.querySelector("form");
    formulario.addEventListener("submit", function(evento){
        evento.preventDefault();
        var nome = $("#userNome").val();
        alert(nome);
    });
}


    
    
