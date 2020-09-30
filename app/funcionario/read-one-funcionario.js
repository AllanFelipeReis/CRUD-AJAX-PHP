$(document).ready(function(){
 
    $(document).on('click', '.read-one-employee-button', function(){

        var id = $(this).attr('data-id');

        $.getJSON("http://localhost/CRUD-AJAX-PHP/api/funcionario/read_one.php?id=" + id, function(data){

        var read_one_employee_html=`
        
            <div id='read-employee' class='btn btn-primary pull-right read-employee-button'>
                <span class='glyphicon glyphicon-list'></span> Listar Funcionários
            </div>

            <table class='table table-bordered table-hover'>
            
                <tr>
                    <td>Nome</td>
                    <td>` + data.name + `</td>
                </tr>
            
                <tr>
                    <td>CPF</td>
                    <td>` + data.cpf + `</td>
                </tr>
            
                <tr>
                    <td>Gênero</td>
                    <td>` + data.gender + `</td>
                </tr>
            
                <tr>
                    <td>Data de Nascimento</td>
                    <td>` + data.birthDate + `</td>
                </tr>
            
            </table>`;
        $("#page-content").html(read_one_employee_html);
            
        changePageTitle("Detalhes");
        });
    });
 
});