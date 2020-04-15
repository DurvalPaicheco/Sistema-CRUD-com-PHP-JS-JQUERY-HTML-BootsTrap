<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema CRUD</title>
    <!--Jquery -->
    <script src="scripts/Jquery.js"></script>
    <!-- Funções JS -->
    <script src="scripts/FuncJS.js"></script>
    <!-- Boostrap e CSS -->
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
    <!--Botões menu -->
    <nav>
        <ul>
            <li><h1>Sistema CRUD</h1></li>
            <li><button id="inserir" class="btn btn-dark" >Inserir</button></li>
            <li><button name="Editar" class="btn btn-dark" >Editar</button></li>
            <li><button name="Excluir" class="btn btn-dark">Excluir</button></li>
            <li><button name="buscar" class="btn btn-dark" >Buscar</button></li>
        </ul>
    </nav>
    <!-- Div Cont, recebera dados vindo através do ajax quando utilizados os botões-->
    <div id="cont">Bem Vindo ao sistema CRUD, todo construido com HTML, CSS, JS e PHP. Utilize o Menu acima para navegar no nosso site</div>

    <footer>Created by Durval Paicheco</footer>
</body>
</html>

