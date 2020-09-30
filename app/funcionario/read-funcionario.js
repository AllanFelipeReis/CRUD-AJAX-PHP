$(document).ready(function(){
 
    // Carrega a lista de funcionarios quando iniciar a pagina
    showFuncionario();
 
});

// Quando o botao read-employee for acionado
$(document).on('click', '.read-employee-button', function(){
    showFuncionario();
});

// Funcao para mostrar a lista de funcionarios
function showFuncionario(){ 

    // Recebendo a lista de funcionarios pela api
    $.getJSON("http://localhost/CRUD-AJAX-PHP/api/funcionario/read.php", function(data){
    
        var read_employee_html=`
        <div id='create-employee' class='btn btn-primary pull-right create-employee-button'>
            <span class='glyphicon glyphicon-plus'></span> Cadastrar Funcionário
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
                read_employee_html+=`
                    <tr>
            
                        <td>` + val.name + `</td>
                        <td>` + val.cpf + `</td>
                        <td>` + val.gender + `</td>
                        <td>` + val.birthDate + `</td>
            
                        <td>
                            <button class='btn btn-primary read-one-employee-button' data-id='` + val.id + `'>
                                <span class='glyphicon glyphicon-eye-open'></span> Vizualizar
                            </button>
            
                            <button class='btn btn-info update-employee-button' data-id='` + val.id + `'>
                                <span class='glyphicon glyphicon-edit'></span> Editar
                            </button>
            
                            <button class='btn btn-danger delete-employee-button' data-id='` + val.id + `'>
                                <span class='glyphicon glyphicon-remove'></span> Deletar
                            </button>
                        </td>
            
                    </tr>`;
            });
        
        read_employee_html+=`</table>`;
        $("#page-content").html(read_employee_html);
    });
    changePageTitle("Funcionários");
}
