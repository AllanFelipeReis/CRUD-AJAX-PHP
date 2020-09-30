$(document).ready(function(){
 
    // Carrega a lista de pessoas quando iniciar a pagina
    showPeople();
 
});

// Quando o botao read-person for acionado
$(document).on('click', '.read-person-button', function(){
    showPeople();
});

// Funcao para mostrar a lista de pessoas
function showPeople(){ 

    // Recebendo a lista de pessoas pela api
    $.getJSON("http://localhost/CRUD-AJAX-PHP/api/pessoa/read.php", function(data){
    
        var read_person_html=`
        <div id='create-person' class='btn btn-primary pull-right create-person-button'>
            <span class='glyphicon glyphicon-plus'></span> Cadastrar Pessoa
        </div>

        <table class='table table-bordered table-hover text-center'>
        
            <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Gênero</th>
                <th>Data de Nascimento</th>
                <th>Ações</th>
            </tr>`;
            
            //Percorre a lista
            $.each(data.records, function(key, val) {
            
                // Cria uma nova linha
                read_person_html+=`
                    <tr>
            
                        <td>` + val.name + `</td>
                        <td>` + val.cpf + `</td>
                        <td>` + val.gender + `</td>
                        <td>` + val.birthDate + `</td>
            
                        <td>
                            <button class='btn btn-primary read-one-person-button' data-id='` + val.id + `'>
                                <span class='glyphicon glyphicon-eye-open'></span> Vizualizar
                            </button>
            
                            <button class='btn btn-info update-person-button' data-id='` + val.id + `'>
                                <span class='glyphicon glyphicon-edit'></span> Editar
                            </button>
            
                            <button class='btn btn-danger delete-person-button' data-id='` + val.id + `'>
                                <span class='glyphicon glyphicon-remove'></span> Deletar
                            </button>
                        </td>
            
                    </tr>`;
            });
        
        read_person_html+=`</table>`;
        $("#page-content").html(read_person_html);
    });
    changePageTitle("Lista de Pessoas");
}
