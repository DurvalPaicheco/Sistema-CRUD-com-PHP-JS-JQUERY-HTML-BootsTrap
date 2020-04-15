

$(document).ready(function(){

    $("#inserir").click(function(){
        $.get("/Crud-PHP-JavaScript/views/inserirdados.html", function(data){
            $("#cont").html(data);
        });
        
    });

    $("env").click(function(){
        alert("quack");
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
    
    
